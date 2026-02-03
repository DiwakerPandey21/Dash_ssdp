import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import './App.css'

const socket = io('http://localhost:5000')

function App() {
  const [data, setData] = useState([])
  const [newValue, setNewValue] = useState('')
  const [userMode, setUserMode] = useState('Contributor') // Toggle between 'Viewer' and 'Contributor'

  useEffect(() => {
    // Fetch initial data
    fetch('http://localhost:5000/api/data')
      .then(res => res.json())
      .then(setData)
      .catch(console.error)

    // Listen for real-time updates
    socket.on('dataUpdate', (newEntry) => {
      setData(prev => [...prev, newEntry])
    })

    return () => socket.off('dataUpdate')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newValue.trim()) return

    try {
      const res = await fetch('http://localhost:5000/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: newValue, userType: userMode })
      })
      const newEntry = await res.json()
      setNewValue('')
      // Data will be updated via socket
    } catch (error) {
      console.error('Error submitting data:', error)
    }
  }

  return (
    <div className="app">
      <header>
        <h1>Real-Time Data Collection Platform</h1>
        <div className="user-mode">
          <label>
            Mode:
            <select value={userMode} onChange={(e) => setUserMode(e.target.value)}>
              <option value="Viewer">Viewer</option>
              <option value="Contributor">Contributor</option>
            </select>
          </label>
        </div>
      </header>

      <main>
        <section className="data-display">
          <h2>Live Data Feed</h2>
          <div className="data-list">
            {data.length === 0 ? (
              <p>No data yet. Be the first to contribute!</p>
            ) : (
              data.map(item => (
                <div key={item.id} className="data-item">
                  <span className="value">{item.value}</span>
                  <span className="timestamp">{new Date(item.timestamp).toLocaleString()}</span>
                  <span className="user-type">{item.userType}</span>
                </div>
              ))
            )}
          </div>
        </section>

        {userMode === 'Contributor' && (
          <section className="data-submit">
            <h2>Submit New Data</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                placeholder="Enter your data..."
                required
              />
              <button type="submit">Submit</button>
            </form>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
