import { useState } from 'react';
import LiveDashboard from '../components/LiveDashboard';
import DataForm from '../components/DataForm';
import ModeSelector from '../components/ModeSelector';

const DashboardPage = () => {
    const [isContributor, setContributor] = useState(false);

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-8">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-8">Dashboard Platform</h1>
            <ModeSelector isContributor={isContributor} setContributor={setContributor} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <main className={`col-span-1 ${isContributor ? 'md:col-span-2' : 'md:col-span-3'}`}>
                    <LiveDashboard />
                </main>

                {isContributor && (
                    <aside className="col-span-1">
                        <DataForm />
                    </aside>
                )}
            </div>
        </div>
    );
};

export default DashboardPage;
