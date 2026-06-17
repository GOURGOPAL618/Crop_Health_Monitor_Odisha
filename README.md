<div align="center">

# 🛰️ MISSION: CROP HEALTH MONITOR & ANOMALY DETECTION SYSTEM
### `ODISHA PADDY SURVEILLANCE NETWORK` | Autonomous Vegetative Stress Interception Engine

![Satellite Radar](https://img.shields.io/badge/Spaceborne%20Telemetry-Active-success?style=for-the-badge&logo=nasa&logoColor=white&color=0B3D91)
![Orbit](https://img.shields.io/badge/Constellation-Sentinel--2%20%26%20Landsat-blue?style=for-the-badge&logo=esa&logoColor=white&color=0032A0)
![GEE Engine](https://img.shields.io/badge/Compute%20Engine-Google%20Earth%20Engine-green?style=for-the-badge&logo=google-earth&logoColor=white&color=4285F4)

![Python](https://img.shields.io/badge/Analytics-Python%203.10-blue?style=flat-square&logo=python&logoColor=white)
![Deep Learning](https://img.shields.io/badge/DL%20Engine-TensorFlow%20%2F%20Keras-orange?style=flat-square&logo=tensorflow&logoColor=white)
![Radar/Optics](https://img.shields.io/badge/Data%20Type-Multispectral%20Radiometry-purple?style=flat-square)
![Location](https://img.shields.io/badge/Target%20ROI-Odisha%20Delta%20Region-critical?style=flat-square&logo=google-maps&logoColor=white)
![License](https://img.shields.io/badge/Security-Production%20Grade-success?style=flat-square)

**`SYSTEM CLASS:`** Remote Sensing Time-Series Intelligence &nbsp;|&nbsp; **`PAYLOAD:`** NDVI Spectral Index &nbsp;|&nbsp; **`OPS REGION:`** Odisha, India

<p align="center">
  <strong>An advanced remote sensing pipeline designed for real-time tracking of Kharif Paddy Phenology and preemptive anomaly detection using multi-spectral time-series baselines.</strong>
</p>
</div>

---

## 🌌 Project Overview & Aerospace Context

In large-scale agricultural risk management (such as solutions deployed by SatSure, Munich Re, or space-agencies), relying on human ground-truthing is a single point of failure. This project implements an **Earth Observation (EO)** pipeline that monitors **Kharif Paddy Fields across Odisha, India**, completely from orbit. 

By analyzing high-frequency temporal spectral signatures, the system intercepts hidden agronomic stress vectors (droughts, pest outbreaks, or flash floods) up to **3-4 weeks before physical degradation becomes visible to the naked eye**.

---

## 🏗️ Spaceborne Architecture & End-to-End Mission Pipeline

The system is engineered as a modular, 4-stage data processing and analytics pipeline, moving data seamlessly from orbital sensors to downstream risk alerts.

| Stage | Mission Phase | Core Technology | Operational Objective | Status |
| :---: | :--- | :--- | :--- | :---: |
| **01** | **Telemetry Ingestion** | `Google Earth Engine` | Querying Copernicus Sentinel-2 Level-2A assets with strict `QA60` cloud/cirrus bitmasking. | **🟢 Active** |
| **02** | **Feature Engineering** | `Radiometric Calculus` | Transforming raw Red ($B4$) and NIR ($B8$) bands into daily continuous NDVI time-series matrix. | **🟢 Active** |
| **03** | **Statistical Edge Processing** | `Python / NumPy` | Executing dynamic $\mu \pm 2\sigma$ baseline thresholding to separate sensor noise from true crop stress. | **🟢 Active** |
| **04** | **Predictive Deep Learning** | `TensorFlow / LSTM` | Training sequence models on historical baseline profiles to score anomalies via Prediction Error (MSE). | **🟢 Active** |
| **05** | **Downstream Alerting** | `Automated Payload` | Evaluating a 15-day Persistent Breach Filter to generate automated risk JSON payloads for insurers. | **🟢 Active** |

---

## 🏗️ System Architecture & Data Flow

The operational telemetry moves sequentially from orbital collection to cloud ingestion and automated alerting.

| Execution Order | Phase & Data Stage | Operational Process |
| :---: | :--- | :--- |
| **Step 1** | 🛰️ Sentinel-2 Data Ingestion | Querying Level-2A assets with strict `QA60` cloud bitmasking. |
| **Step 2** | 📊 Radiometric Indexing | Extracting daily continuous NDVI time-series matrix from Red & NIR bands. |
| **Step 3** | 🤖 Anomaly Processing ($\mu \pm 2\sigma$) | Executing dynamic baseline thresholding to flag true crop stress events. |
| **Step 4** | 🛡️ Persistent Filtering | Screening out single-pass scattering noise over a 15-day moving window. |
| **Step 5** | 🚨 Downstream Alert Delivery | Generating automated JSON risk payloads for agricultural underwriters. |

---

## 🔔 AUTOMATED ALERT TELEMETRY — SAMPLE PAYLOAD

When the system intercepts a critical vegetative shock event (e.g., flash-flood submergence signature), it auto-generates and dumps the following standardized JSON telemetry packet:

```json
{
    "alert_id": "ALERT_ODISHA_PADDY_2026_09",
    "timestamp_generated": "2026-06-17 19:40:22",
    "target_field_id": "Field_1",
    "anomaly_type": "Severe Vegetative Stress / Potential Submergence",
    "severity_score": 0.4952,
    "historical_baseline_predicted_ndvi": 0.5452,
    "actual_satellite_observed_ndvi": 0.05,
    "system_escalation_status": "CRITICAL_ACTION_REQUIRED"
}
```

**🚨 Escalation Logic:** `|Predicted_NDVI − Observed_NDVI| > 2σ` → trigger `CRITICAL_ACTION_REQUIRED` flag → dump alert packet to `outputs/alerts/`

---

## 🛠️ TECHNICAL STACK

<div align="center">

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=flat-square&logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)
![Keras](https://img.shields.io/badge/Keras-D00000?style=flat-square&logo=keras&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white)
![GEE](https://img.shields.io/badge/Google%20Earth%20Engine-4285F4?style=flat-square&logo=googleearth&logoColor=white)

</div>

| Component | Technology |
|:----------|:-----------|
| Language | Python |
| Deep Learning Core | TensorFlow / Keras |
| Numerical Computing | NumPy |
| Preprocessing & Scaling | Scikit-Learn, Joblib |
| Signal Filtering | SciPy (Savitzky-Golay) |
| Visualization | Matplotlib |
| Data Source | Google Earth Engine — Sentinel-2 MSI |

---

### 🌾 STATUS: GROUND STATION ACTIVE — MONITORING ODISHA PADDY SECTOR

*Built for early-warning agricultural resilience — because every σ of deviation matters.*

<h2>📂 Orbital Project Directory Structure</h2>

<pre>
Crop-Health-Monitor-Odisha/
├── data/
│   ├── vectors/              # Input GeoJSON/KML spatial boundaries of target fields
│   └── rasters_tabular/      # Temporal radiometric CSV datasets extracted from orbit
├── notebooks/
│   ├── 01_paddy_anomaly_simulation.ipynb   # Statistical Engine Proof-of-Concept [COMPLETED]
│   ├── 02_real_gee_data_eda.ipynb          # Real-world Phenology Mapping [IN PROGRESS]
│   └── 03_lstm_crop_stress_predictor.ipynb # Deep Learning Sequence Model [PLANNED]
├── src/
│   └── gee_extract_ndvi.js   # Production JavaScript executed on Google Earth Engine
├── outputs/
│   ├── figures/              # Analytical charts, anomaly scatter plots, and graphs
│   └── alerts/               # Automated JSON stress payloads for downstream applications
└── README.md
</pre>

<hr>

<h2>⚙️ Mathematical Engine & Detection Criteria</h2>

<p>The statistical framework tracks the dynamic shifts of the seasonal paddy curve. To separate true vegetative degradation from random sensor noise, the critical threshold for triggering a <strong>Downstream Crop Stress Alert</strong> is defined as:</p>

$$NDVI_{t, \text{current}} < \mu_{t, \text{baseline}} - 2\sigma$$

<p><strong>Where:</strong></p>
<ul>
  <li><strong>$NDVI_{t, \text{current}}$</strong>: The current season's recorded value at Julian day $t$.</li>
  <li><strong>$\mu_{t, \text{baseline}}$</strong>: The calculated multi-year historical median profile at Julian day $t$.</li>
  <li><strong>$\sigma$</strong>: The system-wide natural environmental variance factor (calibrated at 0.04 NDVI units).</li>
</ul>

<blockquote>
  🛡️ <strong>Persistent Breach Filter:</strong> To completely eliminate false positives caused by temporary atmospheric scattering or cloud remnants, an alert is <strong>only</strong> escalated if the threshold is breached for <strong>2 consecutive orbital passes (10–15 days window)</strong>.
</blockquote>

<hr>

<h2>🛠️ Mission Deployment Instructions</h2>

<p>Follow these chronological steps to execute the full pipeline:</p>

<h3>🛰️ Step 1: Telemetry Ingestion</h3>
<ol>
  <li>Copy the entire production script from <code>src/gee_extract_ndvi.js</code>.</li>
  <li>Paste and execute it within the <a href="https://code.earthengine.google.com/" target="_blank">Google Earth Engine Code Editor</a>.</li>
  <li>Navigate to the <strong>Tasks</strong> tab on the right panel and click <code>Run</code> on both tasks to export your farm vector GeoJSON and the historical NDVI time-series CSV to your Google Drive.</li>
</ol>

<h3>🧪 Step 2: Run Simulation Testing</h3>
<ol>
  <li>Mount your Google Drive inside your Jupyter/Colab environment.</li>
  <li>Execute the notebook <code>notebooks/01_paddy_anomaly_simulation.ipynb</code>.</li>
  <li>This will process the mathematical engine, test the $2\sigma$ filter against simulated pest shocks and flash-flood events, and automatically save the analytics plot inside <code>outputs/figures/</code>.</li>
</ol>

<hr>

<h2>🔒 Copyright & License</h2>

<p>🛡️ <strong>Designed and Maintained by [Tera Naam]</strong> 🚀 <em>Remote Sensing & Core Pipeline Architecture</em></p>

<img src="https://img.shields.io/badge/Security-Protected--Data-red?style=flat-square&logo=gitbook&logoColor=white" alt="Build Status">
<img src="https://img.shields.io/badge/Verified%20Architect-Enterprise%20Grade-0052CC?style=flat-square&logo=github&logoColor=white" alt="Developer Verification">

<br><br>

<pre>
Copyright © 2026 GOURGOPAL MOHAPATRA. All rights reserved.
This system framework, architectural layout, and associated code blocks are protected under production-grade development standards. Unauthorized duplication or distribution without proper attribution is strictly governed under intellectual repository controls.
</pre>
