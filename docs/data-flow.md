# Data Flow 

1. **Contributor Mode:** User submits `DataForm.jsx`.
2. **REST API:** `POST /api/data` validates and formats the entry.
3. **Database:** Persists the validated entry.
4. **Socket.IO:** Server emits `dataUpdate` to all connected clients.
5. **Viewer Mode (React):** Listens to `dataUpdate` and dynamically updates the `LiveDashboard.jsx`.
6. **PowerBI Service:** Server invokes the Power BI REST API to push rows to the dataset.
