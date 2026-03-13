import React, { useState, createContext, useContext, useEffect } from 'react';
import { ViewState, Note, Theme } from './types';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Notes } from './components/Notes';
import { NotePage } from './components/NotePage';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'dark';
  });

  const isNoteDetailPage = currentView === 'notes' && !!activeNoteId;

  const parseHashRoute = (): { view: ViewState; noteId: string | null } => {
    const raw = window.location.hash || '';
    const hash = raw.startsWith('#') ? raw.slice(1) : raw;

    if (!hash || hash === '/') {
      return { view: 'home', noteId: null };
    }

    const parts = hash.replace(/^\/+/, '').split('/').filter(Boolean);
    const head = parts[0];

    if (head === 'home' || head === 'about' || head === 'notes') {
      if (head === 'notes' && parts[1]) {
        return { view: 'notes', noteId: decodeURIComponent(parts[1]) };
      }
      return { view: head, noteId: null };
    }

    return { view: 'home', noteId: null };
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const syncFromHash = () => {
      const route = parseHashRoute();
      setCurrentView(route.view);
      setActiveNoteId(route.noteId);
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navigateToView = (view: ViewState) => {
    window.location.hash = `#/${view}`;
  };

  const openNote = (note: Note) => {
    window.location.hash = `#/notes/${encodeURIComponent(note.id)}`;
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'notes':
        return activeNoteId ? (
          <NotePage noteId={activeNoteId} onBack={() => navigateToView('notes')} />
        ) : (
          <Notes onNoteClick={openNote} />
        );
      default:
        return <Home />;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? 'min-h-screen bg-black text-slate-200 font-sans selection:bg-indigo-500/30' : 'min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-200'}>
        <Sidebar currentView={currentView} setView={navigateToView} />
        
        <main className={`md:ml-24 lg:ml-64 min-h-screen max-w-[1920px] ${isNoteDetailPage ? 'p-0' : 'p-4 md:p-8 lg:p-12'}`}>
          {renderContent()}
        </main>

        {/* Global Style overrides for specific animations that Tailwind config doesn't catch easily in CDN mode */}
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scale-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.4s ease-out forwards;
          }
          .animate-scale-in {
            animation: scale-in 0.3s ease-out forwards;
          }
          /* Custom scrollbar utility */
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #040c17;
            border-radius: 20px;
          }
        `}</style>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;