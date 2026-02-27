import LiveDashboard from '../components/LiveDashboard';
import DataForm from '../components/DataForm';
import useAuthStore from '../store/authStore';
import { useLiveData } from '../hooks/useLiveData';
import { Activity } from 'lucide-react';

const DashboardPage = () => {
    const { user } = useAuthStore();
    const data = useLiveData();
    const isContributor = user?.role === 'CONTRIBUTOR' || user?.role === 'ADMIN';

    return (
        <div className="h-full flex flex-col">
            <div className="mb-8 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">System Overview</h1>
                    <p className="text-slate-500 mt-1">Real-time metrics and event stream</p>
                </div>
                {!isContributor && (
                    <div className="bg-amber-50 text-amber-700 border border-amber-200 px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2">
                        <Activity size={16} />
                        Read-Only View (Requires Contributor Role)
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 flex-1 min-h-0">
                <main className={`flex flex-col min-h-0 ${isContributor ? 'xl:col-span-3' : 'xl:col-span-4'}`}>
                    <LiveDashboard data={data} />
                </main>

                {isContributor && (
                    <aside className="xl:col-span-1 h-[400px] xl:h-[auto]">
                        <DataForm />
                    </aside>
                )}
            </div>
        </div>
    );
};

export default DashboardPage;
