# Analytics Metrics

## Overview
This document outlines the key metrics and KPIs for the data collection platform.

## Data Models
- **Data Entry Schema**: See `schemas/data-schema.json` for the structure of collected data points.
- **User Types**: Viewer (read-only), Contributor (read + write)

## Metrics
- **Total Data Entries**: Count of all submitted data points
- **Active Users**: Number of unique users interacting with the system
- **Submission Rate**: Data entries per minute/hour
- **Real-time Update Latency**: Time from submission to frontend update
- **Power BI Refresh Frequency**: How often dashboards update (target: near real-time)

## Power BI Dashboards
- **Main Dashboard**: Overview of all data with real-time charts
- **User Activity Dashboard**: Metrics on user interactions
- **Data Trends Dashboard**: Historical analysis and forecasting

## Data Flow to Power BI
1. Backend exposes `/api/data` endpoint
2. Power BI connects via Web API data source
3. Scheduled refresh every 1-5 minutes for near real-time updates
4. Alternative: Use Power BI Streaming Dataset for true real-time (requires Premium)