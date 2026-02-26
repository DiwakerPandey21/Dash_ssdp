# Realtime Flow

The real-time infrastructure ensures data entered by Contributors is instantly broadcasted to Viewers.
- **Protocol**: Socket.IO / WebSockets
- **Event**: `dataUpdate`
- **Fallback**: Clients automatically fetch historical data upon connection or reconnection if WebSockets fail.
