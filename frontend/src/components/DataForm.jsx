import { useState } from 'react';
import axios from 'axios';
import useAuthStore from '../store/authStore';
import { Send, Activity } from 'lucide-react';

const DataForm = () => {
    const [source, setSource] = useState('');
    const [payload, setPayload] = useState('');
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const { token } = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        try {
            await axios.post('/api/data',
                { source, payload: { value: payload } },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setStatus({ type: 'success', msg: 'Data pushed successfully to live stream!' });
            setPayload('');
        } catch (error) {
            setStatus({ type: 'error', msg: error.response?.data?.error || 'Failed to push data.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-200/60 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-extrabold text-slate-800">Contribute Data</h2>
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                    <Activity size={20} />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1 justify-center">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Data Source</label>
                    <input
                        type="text"
                        placeholder="e.g., Sensor-XYZ, Node-Alpha"
                        value={source}
                        onChange={e => setSource(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                        required
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Metric Value</label>
                    <input
                        type="number"
                        placeholder="Numeric payload value"
                        value={payload}
                        onChange={e => setPayload(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-indigo-500/30 transform transition-all hover:-translate-y-0.5 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                    <Send size={18} />
                    {loading ? 'Pushing...' : 'Emit Live Event'}
                </button>
            </form>

            {status && (
                <div className={`mt-4 p-3 rounded-xl text-sm font-medium flex items-center gap-2 ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    <span className={`w-2 h-2 rounded-full ${status.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                    {status.msg}
                </div>
            )}
        </div>
    );
};

export default DataForm;
