import { useLiveData } from '../hooks/useLiveData';

const LiveDashboard = () => {
    const data = useLiveData();

    return (
        <div className="bg-white p-6 rounded shadow-md overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">Real-Time Data Feed</h2>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Timestamp</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Source</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => (
                        <tr key={idx}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{row.timestamp || new Date().toISOString()}</td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{row.source || 'Unknown'}</td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{JSON.stringify(row.payload) || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LiveDashboard;
