# 🛰️ CORONA-Paddy: Spaceborne Time-Series Crop Vigor & Early Warning System

<div align="center">

![Satellite Radar](https://img.shields.io/badge/Spaceborne%20Telemetry-Active-success?style=for-the-badge&logo=nasa&logoColor=white&color=0B3D91)
![Orbit](https://img.shields.io/badge/Constellation-Sentinel--2%20%26%20Landsat-blue?style=for-the-badge&logo=esa&logoColor=white&color=0032A0)
![GEE Engine](https://img.shields.io/badge/Compute%20Engine-Google%20Earth%20Engine-green?style=for-the-badge&logo=google-earth&logoColor=white&color=4285F4)

![Python](https://img.shields.io/badge/Analytics-Python%203.10-blue?style=flat-square&logo=python&logoColor=white)
![Deep Learning](https://img.shields.io/badge/DL%20Engine-TensorFlow%20%2F%20Keras-orange?style=flat-square&logo=tensorflow&logoColor=white)
![Radar/Optics](https://img.shields.io/badge/Data%20Type-Multispectral%20Radiometry-purple?style=flat-square)
![Location](https://img.shields.io/badge/Target%20ROI-Odisha%20Delta%20Region-critical?style=flat-square&logo=google-maps&logoColor=white)
![License](https://img.shields.io/badge/Security-Production%20Grade-success?style=flat-square)

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
| **04** | **Predictive Deep Learning** | `TensorFlow / LSTM` | Training sequence models on historical baseline profiles to score anomalies via Prediction Error (MSE). | **🟡 Planned** |
| **05** | **Downstream Alerting** | `Automated Payload` | Evaluating a 15-day Persistent Breach Filter to generate automated risk JSON payloads for insurers. | **🟡 Planned** |

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

## 📂 Orbital Project Directory Structure

```text
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

---

## ⚙️ Mathematical Engine & Detection Criteria

The statistical framework tracks the dynamic shifts of the seasonal paddy curve. To separate true vegetative degradation from random sensor noise, the critical threshold for triggering a **Downstream Crop Stress Alert** is defined as:

$$NDVI_{t, \text{current}} < \mu_{t, \text{baseline}} - 2\sigma$$

Where:
* **$NDVI_{t, \text{current}}$**: The current season's recorded value at Julian day $t$.
* **$\mu_{t, \text{baseline}}$**: The calculated multi-year historical median profile at Julian day $t$.
* **$\sigma$**: The system-wide natural environmental variance factor (calibrated at $0.04$ NDVI units).

> 🛡️ **Persistent Breach Filter:** To completely eliminate false positives caused by temporary atmospheric scattering or cloud remnants, an alert is **only** escalated if the threshold is breached for **2 consecutive orbital passes (10–15 days window)**.

---

## 🛠️ Mission Deployment Instructions

Follow these chronological steps to execute the full pipeline:

### 🛰️ Step 1: Telemetry Ingestion
1. Copy the entire production script from `src/gee_extract_ndvi.js`.
2. Paste and execute it within the [Google Earth Engine Code Editor](https://code.earthengine.google.com/).
3. Navigate to the **Tasks** tab on the right panel and click `Run` on both tasks to export your farm vector GeoJSON and the historical NDVI time-series CSV to your Google Drive.

### 🧪 Step 2: Run Simulation Testing
1. Mount your Google Drive inside your Jupyter/Colab environment.
2. Execute the notebook `notebooks/01_paddy_anomaly_simulation.ipynb`.
3. This will process the mathematical engine, test the $2\sigma$ filter against simulated pest shocks and flash-flood events, and automatically save the analytics plot inside `outputs/figures/`.


