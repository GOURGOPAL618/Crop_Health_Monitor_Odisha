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

### 🔄 Data & Logic Flow Schematic
```text
🛰️ Sentinel-2 Constellation ──> [Cloud-Masking Layer] ──> 📊 NDVI/NDWI Extraction
                                                                │
                                                                ▼
🚨 Downstream Alert Payload <── [Persistent Filter] <── 🤖 Anomaly Engine (μ ± 2σ)
---
---

 
