import { useState } from 'react';
import { pushLiveData } from '../services/api';

const DataForm = () => {
    const [source, setSource] = useState('');
    const [payload, setPayload] = useState('');
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await pushLiveData({ source, payload: { value: payload } });
            setStatus('Success!');
            setSource('');
            setPayload('');
        } catch (error) {
            setStatus('Failed to push data.');
        }
    };

    return (
        <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Contribute Data</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Data Source (e.g., Sensor-XYZ)"
                    value={source}
                    onChange={e => setSource(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Payload details"
                    value={payload}
                    onChange={e => setPayload(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition-colors">Submit Data</button>
            </form>
            {status && <p className="mt-2 text-sm text-gray-600">{status}</p>}
        </div>
    );
};

export default DataForm;
