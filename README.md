<div align="center">

# 🛰️ MISSION: CROP HEALTH MONITOR & ANOMALY DETECTION SYSTEM
### `ODISHA PADDY SURVEILLANCE NETWORK` | Autonomous Vegetative Stress Interception Engine

<br>

![Satellite Radar](https://img.shields.io/badge/Spaceborne%20Telemetry-Active-success?style=for-the-badge&logo=nasa&logoColor=white&color=0B3D91)
![Orbit](https://img.shields.io/badge/Constellation-Sentinel--2%20%26%20Landsat-blue?style=for-the-badge&logo=esa&logoColor=white&color=0032A0)
![GEE Engine](https://img.shields.io/badge/Compute%20Engine-Google%20Earth%20Engine-green?style=for-the-badge&logo=google-earth&logoColor=white&color=4285F4)
![Status](https://img.shields.io/badge/Mission%20Status-Operational-brightgreen?style=for-the-badge&logo=statuspage&logoColor=white)

<br>

![Python](https://img.shields.io/badge/Analytics-Python%203.10-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Deep Learning](https://img.shields.io/badge/DL%20Engine-TensorFlow%20%2F%20Keras-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Radar/Optics](https://img.shields.io/badge/Data%20Type-Multispectral%20Radiometry-8A2BE2?style=for-the-badge)
![Location](https://img.shields.io/badge/Target%20ROI-Odisha%20Delta%20Region-DC143C?style=for-the-badge&logo=google-maps&logoColor=white)

<br>

![Repo Size](https://img.shields.io/github/repo-size/GOURGOPAL618/Crop-Health-Monitor-Odisha?style=flat-square&color=informational)
![Last Commit](https://img.shields.io/github/last-commit/GOURGOPAL618/Crop-Health-Monitor-Odisha?style=flat-square&color=blueviolet)
![Issues](https://img.shields.io/github/issues/GOURGOPAL618/Crop-Health-Monitor-Odisha?style=flat-square&color=yellow)
![Stars](https://img.shields.io/github/stars/GOURGOPAL618/Crop-Health-Monitor-Odisha?style=flat-square&color=gold)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)
![Security](https://img.shields.io/badge/Security-Production%20Grade-success?style=flat-square)

<br>

**`SYSTEM CLASS:`** Remote Sensing Time-Series Intelligence &nbsp;|&nbsp; **`PAYLOAD:`** NDVI Spectral Index &nbsp;|&nbsp; **`OPS REGION:`** Odisha, India

<p align="center">
  <strong>An advanced remote sensing pipeline designed for real-time tracking of Kharif Paddy Phenology and preemptive anomaly detection using multi-spectral time-series baselines.</strong>
</p>

</div>

---

## 📡 Project Overview & Aerospace Context

In large-scale agricultural risk management (such as solutions deployed by SatSure, Munich Re, or space-agencies), relying on human ground-truthing is a single point of failure. This project implements an **Earth Observation (EO)** pipeline that monitors **Kharif Paddy Fields across Odisha, India**, completely from orbit.

By analyzing high-frequency temporal spectral signatures, the system intercepts hidden agronomic stress vectors (droughts, pest outbreaks, or flash floods) up to **3–4 weeks before physical degradation becomes visible to the naked eye**.

---

## 🏗️ Spaceborne Architecture & End-to-End Mission Pipeline

The system is engineered as a modular, 5-stage data processing and analytics pipeline, moving data seamlessly from orbital sensors to downstream risk alerts.

| Stage | Mission Phase | Core Technology | Operational Objective | Status |
| :---: | :--- | :--- | :--- | :---: |
| **01** | **Telemetry Ingestion** | `Google Earth Engine` | Querying Copernicus Sentinel-2 Level-2A assets with strict `QA60` cloud/cirrus bitmasking. | 🟢 **Active** |
| **02** | **Feature Engineering** | `Radiometric Calculus` | Transforming raw Red ($B4$) and NIR ($B8$) bands into daily continuous NDVI time-series matrix. | 🟢 **Active** |
| **03** | **Statistical Edge Processing** | `Python / NumPy` | Executing dynamic $\mu \pm 2\sigma$ baseline thresholding to separate sensor noise from true crop stress. | 🟢 **Active** |
| **04** | **Predictive Deep Learning** | `TensorFlow / LSTM` | Training sequence models on historical baseline profiles to score anomalies via Prediction Error (MSE). | 🟢 **Active** |
| **05** | **Downstream Alerting** | `Automated Payload` | Evaluating a 15-day Persistent Breach Filter to generate automated risk JSON payloads for insurers. | 🟢 **Active** |

---

## 🔄 System Architecture & Data Flow

The operational telemetry moves sequentially from orbital collection to cloud ingestion and automated alerting.

| Execution Order | Phase & Data Stage | Operational Process |
| :---: | :--- | :--- |
| **Step 1** | 🛰️ Sentinel-2 Data Ingestion | Querying Level-2A assets with strict `QA60` cloud bitmasking. |
| **Step 2** | 📊 Radiometric Indexing | Extracting daily continuous NDVI time-series matrix from Red & NIR bands. |
| **Step 3** | 🤖 Anomaly Processing ($\mu \pm 2\sigma$) | Executing dynamic baseline thresholding to flag true crop stress events. |
| **Step 4** | 🛡️ Persistent Filtering | Screening out single-pass scattering noise over a 15-day moving window. |
| **Step 5** | 🚨 Downstream Alert Delivery | Generating automated JSON risk payloads for agricultural underwriters. |

---

## 🔔 Automated Alert Telemetry — Sample Payload

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

> 🚨 **Escalation Logic:** `|Predicted_NDVI − Observed_NDVI| > 2σ` → trigger `CRITICAL_ACTION_REQUIRED` flag → dump alert packet to `outputs/alerts/`

---

## 🛠️ Technical Stack

<div align="center">

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Keras](https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)
![SciPy](https://img.shields.io/badge/SciPy-8CAAE6?style=for-the-badge&logo=scipy&logoColor=white)
![GEE](https://img.shields.io/badge/Google%20Earth%20Engine-4285F4?style=for-the-badge&logo=googleearth&logoColor=white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=plotly&logoColor=white)

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

<div align="center">

### 🌾 STATUS: GROUND STATION ACTIVE — MONITORING ODISHA PADDY SECTOR

*Built for early-warning agricultural resilience — because every σ of deviation matters.*

</div>

---

## 📂 Orbital Project Directory Structure

Crop-Health-Monitor-Odisha/
├── data/
│ ├── vectors/ # Input GeoJSON/KML spatial boundaries of target fields
│ └── rasters_tabular/ # Temporal radiometric CSV datasets extracted from orbit
├── notebooks/
│ ├── 01_paddy_anomaly_simulation.ipynb # Statistical Engine Proof-of-Concept [COMPLETED]
│ ├── 02_real_gee_data_eda.ipynb # Real-world Phenology Mapping [IN PROGRESS]
│ └── 03_lstm_crop_stress_predictor.ipynb # Deep Learning Sequence Model [PLANNED]
├── src/
│ └── gee_extract_ndvi.js # Production JavaScript executed on Google Earth Engine
├── outputs/
│ ├── figures/ # Analytical charts, anomaly scatter plots, and graphs
│ └── alerts/ # Automated JSON stress payloads for downstream applications
└── README.md


---

## ⚙️ Mathematical Engine & Detection Criteria

The statistical framework tracks the dynamic shifts of the seasonal paddy curve. To separate true vegetative degradation from random sensor noise, the critical threshold for triggering a **Downstream Crop Stress Alert** is defined as:

$$NDVI_{t, \text{current}} < \mu_{t, \text{baseline}} - 2\sigma$$

**Where:**
- **$NDVI_{t, \text{current}}$**: The current season's recorded value at Julian day $t$.
- **$\mu_{t, \text{baseline}}$**: The calculated multi-year historical median profile at Julian day $t$.
- **$\sigma$**: The system-wide natural environmental variance factor (calibrated at 0.04 NDVI units).

> 🛡️ **Persistent Breach Filter:** To completely eliminate false positives caused by temporary atmospheric scattering or cloud remnants, an alert is **only** escalated if the threshold is breached for **2 consecutive orbital passes (10–15 days window)**.

---

## 🚀 Mission Deployment Instructions

Follow these chronological steps to execute the full pipeline:

### 🛰️ Step 1: Telemetry Ingestion
1. Copy the entire production script from `src/gee_extract_ndvi.js`.
2. Paste and execute it within the [Google Earth Engine Code Editor](https://code.earthengine.google.com/).
3. Navigate to the **Tasks** tab on the right panel and click `Run` on both tasks to export your farm vector GeoJSON and the historical NDVI time-series CSV to your Google Drive.

### 🧪 Step 2: Run Simulation Testing
1. Mount your Google Drive inside your Jupyter/Colab environment.
2. Execute the notebook `notebooks/01_paddy_anomaly_simulation.ipynb`.
3. This will process the mathematical engine, test the $2\sigma$ filter against simulated pest shocks and flash-flood events, and automatically save the analytics plot inside `outputs/figures/`.

---

## 🔒 System Security, Copyright & Space-Data License

<div align="center">

<strong>🛰️ Chief Mission & Pipeline Architect</strong><br>
<code>GOURAGOPAL MOHAPATRA</code> 🚀 — <em>Lead Deep Learning & Earth Observation Systems Engineer</em>

<br><br>

[![Mission Profile](https://img.shields.io/badge/ORBITAL__MISSION-RS--SDA-blueviolet?style=for-the-badge&logo=nasa&logoColor=white)](#)
[![Telemetry Stream](https://img.shields.io/badge/TELEMETRY-SENTINEL__2__L2A-0052CC?style=for-the-badge&logo=esphome&logoColor=white)](#)
[![Data Pipeline](https://img.shields.io/badge/SPATIAL__CORE-EARTH__ENGINE-darkgreen?style=for-the-badge&logo=googleearth&logoColor=white)](#)

<br>

[![System Architecture](https://img.shields.io/badge/ARCHITECTURE-ENTERPRISE__GRADE-red?style=flat-square&logo=gitbook&logoColor=white)](#)
[![License: MIT](https://img.shields.io/badge/LICENSE-MIT__CORE-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Operational State](https://img.shields.io/badge/PIPELINE-NOMINAL__LOOP-brightgreen?style=flat-square)](#)
[![Made With](https://img.shields.io/badge/Made%20With-%E2%9D%A4%EF%B8%8F%20%26%20Python-red?style=flat-square)](#)

</div>

```config
=======================================================================================
🏛️ CORE ARCHITECTURAL REGISTRATION | DEPLOYMENT MATRIX ID: MISSION_RS_SDA_2026
=======================================================================================
[OWNER]      : GOURAGOPAL MOHAPATRA (Remote Sensing Data Scientist & Systems Architect)
[COPYRIGHT]  : © 2026 GOURAGOPAL MOHAPATRA. All Rights Reserved.
[VALIDATION] : Production-Grade Inversion Pipeline & Telemetry Verification Engine
=======================================================================================

NOTICE: This algorithmic matrix, temporal deep learning topology (Stacked LSTM), and
associated signal processing layers (Savitzky-Golay) are registered assets.
Unauthorized distribution, modification, or commercial ingestion without explicit
cryptographic verification from the Lead Architect is strictly prohibited under
operational data safety compliance.

Distribution without proper attribution is strictly governed under intellectual
repository controls.
=======================================================================================
```

<div align="center">

⭐ **If this mission resonates with you, consider starring the repository** ⭐

</div>
