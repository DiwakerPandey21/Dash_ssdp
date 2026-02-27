import { Bell, Search, User } from 'lucide-react';

const Header = () => {
    return (
        <header className="h-16 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex items-center bg-slate-100/70 rounded-full px-4 py-2 w-96 border border-slate-200 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                <Search size={18} className="text-slate-400" />
                <input
                    type="text"
                    placeholder="Search analytics..."
                    className="bg-transparent border-none outline-none ml-2 text-sm w-full text-slate-700 placeholder:text-slate-400"
                />
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold shadow-md cursor-pointer hover:shadow-lg transition-transform hover:scale-105">
                    <User size={18} />
                </div>
            </div>
        </header>
    );
};

export default Header;
