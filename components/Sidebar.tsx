import React from 'react';
import { Home, User, BookOpen, Hexagon } from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'notes', icon: BookOpen, label: 'Notes' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-24 lg:w-64 h-screen fixed left-0 top-0 bg-slate-900/95 border-r border-slate-800 backdrop-blur-sm z-50">
        <div className="p-6 flex items-center justify-center lg:justify-start gap-3 border-b border-slate-800/50">
          <div className="bg-indigo-500 p-2 rounded-xl shadow-lg shadow-indigo-500/20">
            <Hexagon className="text-white w-6 h-6 fill-indigo-500" />
          </div>
          <span className="hidden lg:block text-xl font-bold text-slate-100 tracking-tight">
            sarperyn
          </span>
        </div>

        <nav className="flex-1 py-8 flex flex-col gap-2 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setView(item.id as ViewState)}
                className={`
                  flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group
                  ${isActive 
                    ? 'bg-slate-800 text-indigo-400 shadow-md shadow-black/20' 
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}
                `}
              >
                <Icon className={`w-6 h-6 transition-transform group-hover:scale-110 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                <span className={`hidden lg:block font-medium ${isActive ? 'text-indigo-400' : ''}`}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="hidden lg:block ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-6 border-t border-slate-800/50 hidden lg:block">
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <p className="text-xs text-slate-400 mb-2">Status</p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
              </span>
              <span className="text-sm font-medium text-yellow-400">Busier than usual</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-t border-slate-800 z-50 pb-safe">
        <nav className="flex justify-around items-center p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setView(item.id as ViewState)}
                className="flex flex-col items-center gap-1 min-w-[64px]"
              >
                <div className={`
                  p-2 rounded-xl transition-all duration-300
                  ${isActive ? 'bg-indigo-500/20 text-indigo-400' : 'text-slate-400'}
                `}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`text-[10px] font-medium ${isActive ? 'text-indigo-400' : 'text-slate-500'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};