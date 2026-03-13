import React from 'react';
import { Home, User, BookOpen, Hexagon, Sun, Moon } from 'lucide-react';
import { ViewState } from '../types';
import { useTheme } from '../App';

interface SidebarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'notes', icon: BookOpen, label: 'Notes' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`hidden md:flex flex-col w-24 lg:w-64 h-screen fixed left-0 top-0 backdrop-blur-sm z-50 ${
        theme === 'dark' 
          ? 'bg-black/95 border-white/10' 
          : 'bg-gray-100/95 border-gray-200'
      } border-r`}>
        <div className={`p-6 flex items-center justify-center lg:justify-start gap-3 border-b ${
          theme === 'dark' ? 'border-white/10' : 'border-gray-200/50'
        }`}>
          <div className={theme === 'dark' ? 'bg-indigo-500 p-2 rounded-xl shadow-lg shadow-indigo-500/20' : 'bg-blue-500 p-2 rounded-xl shadow-lg shadow-blue-500/20'}>
            <Hexagon className={`text-white w-6 h-6 fill-current`} />
          </div>
          <span className={`hidden lg:block text-xl font-bold tracking-tight ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
          }`}>
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
                    ? theme === 'dark'
                      ? 'bg-white/5 text-indigo-400 shadow-md shadow-black/20'
                      : 'bg-gray-200 text-blue-600 shadow-md shadow-gray-300/20'
                    : theme === 'dark'
                      ? 'text-gray-500 hover:bg-white/5 hover:text-gray-300'
                      : 'text-gray-600 hover:bg-gray-200/50 hover:text-gray-900'
                  }
                `}
              >
                <Icon className={`w-6 h-6 transition-transform group-hover:scale-110 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                <span className={`hidden lg:block font-medium ${isActive ? (theme === 'dark' ? 'text-indigo-400' : 'text-blue-600') : ''}`}>
                  {item.label}
                </span>
                {isActive && (
                  <div className={`hidden lg:block ml-auto w-1.5 h-1.5 rounded-full ${
                    theme === 'dark'
                      ? 'bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]'
                      : 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]'
                  }`} />
                )}
              </button>
            );
          })}
        </nav>

        <div className={`p-6 border-t flex flex-col gap-4 hidden lg:flex ${
          theme === 'dark' ? 'border-white/10' : 'border-gray-200/50'
        }`}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-white/5 border border-white/10 text-yellow-400 hover:bg-white/10'
                : 'bg-gray-200/50 border border-gray-300/50 text-amber-600 hover:bg-gray-200'
            }`}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4" />
                <span className="text-xs font-medium">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4" />
                <span className="text-xs font-medium">Dark</span>
              </>
            )}
          </button>

          {/* Status */}
          <div className={`rounded-xl p-4 border ${
            theme === 'dark'
              ? 'bg-white/5 border-white/10'
              : 'bg-gray-200/50 border-gray-300/50'
          }`}>
            <p className={`text-xs mb-2 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>Status</p>
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
      <div className={`md:hidden fixed bottom-0 left-0 w-full backdrop-blur-md border-t z-50 pb-safe ${
        theme === 'dark'
          ? 'bg-black/90 border-white/10'
          : 'bg-gray-100/90 border-gray-200'
      }`}>
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
                  ${isActive 
                    ? theme === 'dark'
                      ? 'bg-indigo-500/20 text-indigo-400'
                      : 'bg-blue-500/20 text-blue-600'
                    : theme === 'dark'
                      ? 'text-gray-500'
                      : 'text-gray-600'
                  }
                `}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`text-[10px] font-medium ${
                  isActive 
                    ? theme === 'dark' ? 'text-indigo-400' : 'text-blue-600'
                    : theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center gap-1 min-w-[64px]"
          >
            <div className={`
              p-2 rounded-xl transition-all duration-300
              ${theme === 'dark'
                ? 'text-yellow-400'
                : 'text-amber-600'
              }
            `}>
              {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </div>
            <span className={`text-[10px] font-medium ${
              theme === 'dark' ? 'text-yellow-400' : 'text-amber-600'
            }`}>
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>
        </nav>
      </div>
    </>
  );
};