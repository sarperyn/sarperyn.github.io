import React, { useState, useMemo } from 'react';
import { Search, Calendar, ArrowRight } from 'lucide-react';
import { NOTES_DATA } from '../constants';
import { Note } from '../types';
import { useTheme } from '../App';

interface NotesProps {
  onNoteClick: (note: Note) => void;
}

export const Notes: React.FC<NotesProps> = ({ onNoteClick }) => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotes = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return NOTES_DATA.filter(note => 
      note.title.toLowerCase().includes(term) || 
      note.content.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="pb-24 md:pb-0 h-full flex flex-col animate-fade-in">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-slate-100' : 'text-gray-900'}`}>Digital Garden</h2>
          <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'} mt-1`}>A collection of thoughts, snippets, and learnings.</p>
        </div>
        
        <div className="relative group w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className={`h-5 w-5 ${theme === 'dark' ? 'text-slate-500 group-focus-within:text-indigo-400' : 'text-gray-500 group-focus-within:text-blue-600'} transition-colors`} />
          </div>
          <input
            type="text"
            className={`block w-full pl-10 pr-3 py-3 border rounded-xl leading-5 focus:outline-none focus:ring-2 transition-all duration-300 ${
              theme === 'dark'
                ? 'border-white/10 bg-black/60 text-slate-100 placeholder-slate-500 focus:ring-indigo-500/50 focus:border-indigo-500'
                : 'border-gray-300 bg-white/80 text-gray-900 placeholder-gray-400 focus:ring-blue-500/30 focus:border-blue-500'
            }`}
            placeholder="Search notes by title, content, or tag..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div 
              key={note.id}
              onClick={() => onNoteClick(note)}
              className={`group border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col h-full backdrop-blur-sm ${
                theme === 'dark'
                  ? 'bg-black/60 border-white/10 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10'
                  : 'bg-white/80 border-gray-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-gray-400/20'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  theme === 'dark'
                    ? 'bg-white/5 text-slate-300 border-white/10'
                    : 'bg-gray-100 text-gray-700 border-gray-200'
                }`}>
                  {note.category}
                </span>
                <span className={`flex items-center gap-1 text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`}>
                  <Calendar className="w-3 h-3" />
                  {note.date}
                </span>
              </div>
              
              <h3 className={`text-xl font-bold mb-3 transition-colors line-clamp-2 ${
                theme === 'dark'
                  ? 'text-slate-200 group-hover:text-indigo-400'
                  : 'text-gray-900 group-hover:text-blue-600'
              }`}>
                {note.title}
              </h3>
              
              <div className={`flex items-center justify-end pt-4 border-t mt-auto ${theme === 'dark' ? 'border-white/10' : 'border-gray-200/80'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  theme === 'dark' ? 'bg-white/5 group-hover:bg-indigo-500' : 'bg-gray-100 group-hover:bg-blue-500'
                }`}>
                  <ArrowRight className={`w-4 h-4 transition-colors ${theme === 'dark' ? 'text-slate-400 group-hover:text-white' : 'text-gray-500 group-hover:text-white'}`} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <div className={`inline-block p-4 rounded-full mb-4 ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'}`}>
              <Search className={`w-8 h-8 ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`} />
            </div>
            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'}`}>No notes found</h3>
            <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'} mt-2`}>Try adjusting your search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};