import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Database, Settings, LogOut } from 'lucide-react';
import useAuthStore from '../store/authStore';

const Sidebar = () => {
    const location = useLocation();
    const { logout, user } = useAuthStore();

    const navItems = [
        { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
        { name: 'Analytics Setup', path: '/analytics', icon: <Database size={20} /> },
        { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
    ];

    return (
        <aside className="w-64 h-screen bg-white/70 backdrop-blur-xl border-r border-white/20 shadow-lg flex flex-col justify-between hidden md:flex sticky top-0">
            <div>
                <div className="h-16 flex items-center px-6 font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    SaaS Dash
                </div>
                <nav className="mt-6 px-4 space-y-2">
                    {navItems.map(item => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 font-medium' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
            </div>

            <div className="p-4 border-t border-slate-200/50">
                <div className="px-4 py-3 mb-2 rounded-xl bg-slate-50 border border-slate-100/50 flex flex-col">
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Logged in as</span>
                    <span className="text-sm font-medium text-slate-800 truncate">{user?.email || 'Guest'}</span>
                    <span className="text-xs text-blue-600 font-semibold mt-1">{user?.role}</span>
                </div>
                <button
                    onClick={logout}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors font-medium"
                >
                    <LogOut size={18} />
                    Sign Out
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
