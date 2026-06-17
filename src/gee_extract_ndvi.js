// =========================================================================
// STEP 1: DEFINE PADDY POLYGONS IN ODISHA (Cuttack/Jagatsinghpur Border)
// =========================================================================
var field1 = ee.Geometry.Polygon([[86.120, 20.250], [86.122, 20.250], [86.122, 20.252], [86.120, 20.252]]);
var field2 = ee.Geometry.Polygon([[86.130, 20.260], [86.132, 20.260], [86.132, 20.262], [86.130, 20.262]]);
var field3 = ee.Geometry.Polygon([[86.140, 20.270], [86.142, 20.270], [86.142, 20.272], [86.140, 20.272]]);
var field4 = ee.Geometry.Polygon([[86.150, 20.280], [86.152, 20.280], [86.152, 20.282], [86.150, 20.282]]);
var field5 = ee.Geometry.Polygon([[86.160, 20.290], [86.162, 20.290], [86.162, 20.292], [86.160, 20.292]]);

var allFields = ee.FeatureCollection([
  ee.Feature(field1, {name: 'Field_1'}),
  ee.Feature(field2, {name: 'Field_2'}),
  ee.Feature(field3, {name: 'Field_3'}),
  ee.Feature(field4, {name: 'Field_4'}),
  ee.Feature(field5, {name: 'Field_5'})
]);

Map.centerObject(allFields, 12);
Map.addLayer(allFields, {color: 'red'}, 'Paddy Fields');

// =========================================================================
// STEP 2: FIXED CLOUD MASKING FUNCTION (Bacha liya system:time_start ko!)
// =========================================================================
function maskS2clouds(image) {
  var qa = image.select('QA60');
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));
      
  var cleanedImage = image.updateMask(mask).divide(10000);
  
  // FIXED LINE: Purani image se system:time_start aur sari properties copy karo
  return cleanedImage.copyProperties(image, ["system:time_start", "system:index"]);
}

// =========================================================================
// STEP 3: FETCH SENTINEL-2 DATA & CALCULATE NDVI
// =========================================================================
var s2Collection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
                  .filterDate('2023-01-01', '2023-12-31')
                  .filterBounds(allFields)
                  .map(maskS2clouds);

var addNDVI = function(image) {
  var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
  // NDVI band ko image me jodo aur fir se time property carry forward karo
  return image.addBands(ndvi).copyProperties(image, ["system:time_start"]);
};

var ndviCollection = s2Collection.map(addNDVI).select('NDVI');

// =========================================================================
// STEP 4: PLOT THE TIME SERIES CHART
// =========================================================================
var chart = ui.Chart.image.seriesByRegion({
  imageCollection: ndviCollection,
  regions: allFields,
  reducer: ee.Reducer.mean(),
  band: 'NDVI',
  scale: 10,
  xProperty: 'system:time_start',
  seriesProperty: 'name'
}).setOptions({
  title: 'Odisha Paddy Fields NDVI Time Series 2023 (Fixed)',
  vAxis: {title: 'NDVI', viewWindow: {min: 0, max: 1}},
  hAxis: {title: 'Date', format: 'MM-yyyy'},
  lineWidth: 2,
  pointSize: 4
});

print(chart);

// =========================================================================
// STEP 5: EXPORT DATA TO GOOGLE DRIVE AS CSV
// =========================================================================
var triplet = ndviCollection.map(function(image) {
  return image.reduceRegions({
    collection: allFields,
    reducer: ee.Reducer.mean(),
    scale: 10
  }).map(function(feature) {
    return feature.set({
      'date': image.date().format('yyyy-MM-dd')
    });
  });
}).flatten();

// Filter out null values to make sure export is clean
var cleanTriplet = triplet.filter(ee.Filter.notNull(['mean']));

Export.table.toDrive({
  collection: cleanTriplet,
  description: 'Odisha_Paddy_NDVI_2023_Fixed',
  fileFormat: 'CSV',
  selectors: ['date', 'name', 'mean']
});

// =========================================================================
// STEP 6: EXPORT VECTOR POLYGONS AS GEOJSON FOR YOUR 'data/vectors/' FOLDER
// =========================================================================
Export.table.toDrive({
  collection: allFields,          // Hamare 5 polygons ka collection
  description: 'Odisha_Paddy_Fields_Vectors',
  fileFormat: 'GeoJSON',          // Format select kiya GeoJSON
  selectors: ['name']             // Har polygon ka naam export hoga
});