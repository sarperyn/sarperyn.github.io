import React, { useState } from 'react';
import { ViewState, Note } from './types';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Notes } from './components/Notes';
import { NoteModal } from './components/NoteModal';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [activeNote, setActiveNote] = useState<Note | null>(null);

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'notes':
        return <Notes onNoteClick={setActiveNote} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-indigo-500/30">
      <Sidebar currentView={currentView} setView={setCurrentView} />
      
      <main className="md:ml-24 lg:ml-64 min-h-screen p-4 md:p-8 lg:p-12 max-w-[1920px]">
        {renderContent()}
      </main>

      {/* Detail Modal for Notes */}
      {activeNote && (
        <NoteModal 
          note={activeNote} 
          onClose={() => setActiveNote(null)} 
        />
      )}

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
          background-color: #334155;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
};

export default App;