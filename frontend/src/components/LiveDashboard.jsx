import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const LiveDashboard = ({ data }) => {
    // Transform data for charts
    const chartData = data.map(d => ({
        time: new Date(d.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        value: d.payload?.value ? Number(d.payload.value) : 0,
        source: d.source
    }));

    return (
        <div className="flex flex-col gap-6 h-full">
            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-200/60">
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Live Values</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} minTickGap={30} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-indigo-900 p-6 rounded-3xl shadow-lg border border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                    <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-widest mb-1 relative z-10">Total Ingested Events</h3>
                    <div className="text-5xl font-extrabold text-white mt-4 relative z-10">{data.length}</div>
                    <p className="text-indigo-200/70 text-sm mt-2 relative z-10">Live processing from Contributor nodes</p>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden flex-1 flex flex-col">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white">
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Recent Activity Log</h3>
                    <span className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Live
                    </span>
                </div>
                <div className="overflow-x-auto flex-1">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 text-xs text-slate-500 uppercase tracking-wider">
                                <th className="px-6 py-4 font-semibold border-b border-slate-200/60">Time</th>
                                <th className="px-6 py-4 font-semibold border-b border-slate-200/60">Source</th>
                                <th className="px-6 py-4 font-semibold border-b border-slate-200/60">Payload</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-slate-700">
                            {[...data].reverse().slice(0, 10).map((row, idx) => (
                                <tr key={row.id || idx} className="hover:bg-blue-50/50 transition-colors border-b border-slate-100 last:border-0">
                                    <td className="px-6 py-4 whitespace-nowrap text-slate-500">{new Date(row.timestamp).toLocaleString()}</td>
                                    <td className="px-6 py-4 font-medium text-indigo-600">{row.source}</td>
                                    <td className="px-6 py-4 text-slate-600 font-mono text-xs bg-slate-50 rounded mx-6 my-2 px-2 inline-block border border-slate-200">
                                        {JSON.stringify(row.payload)}
                                    </td>
                                </tr>
                            ))}
                            {data.length === 0 && (
                                <tr>
                                    <td colSpan="3" className="px-6 py-12 text-center text-slate-400">Waiting for live data...</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LiveDashboard;
