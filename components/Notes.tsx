import React, { useState, useMemo } from 'react';
import { Search, Tag, Calendar, ArrowRight } from 'lucide-react';
import { NOTES_DATA } from '../constants';
import { Note } from '../types';

interface NotesProps {
  onNoteClick: (note: Note) => void;
}

export const Notes: React.FC<NotesProps> = ({ onNoteClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotes = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return NOTES_DATA.filter(note => 
      note.title.toLowerCase().includes(term) || 
      note.content.toLowerCase().includes(term) ||
      note.tags.some(tag => tag.toLowerCase().includes(term))
    );
  }, [searchTerm]);

  return (
    <div className="pb-24 md:pb-0 h-full flex flex-col animate-fade-in">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-100">Digital Garden</h2>
          <p className="text-slate-400 mt-1">A collection of thoughts, snippets, and learnings.</p>
        </div>
        
        <div className="relative group w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-xl leading-5 bg-slate-800/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300"
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
              className="group bg-zinc-850/50 border border-zinc-800 hover:border-indigo-500/50 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col h-full backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-slate-400 border border-slate-700">
                  {note.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500">
                  <Calendar className="w-3 h-3" />
                  {note.date}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                {note.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                {note.content}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-800/50 mt-auto">
                <div className="flex gap-2">
                  {note.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs text-slate-500 flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                  {note.tags.length > 2 && (
                    <span className="text-xs text-slate-500">+{note.tags.length - 2}</span>
                  )}
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <div className="inline-block p-4 rounded-full bg-slate-800/50 mb-4">
              <Search className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-200">No notes found</h3>
            <p className="text-slate-400 mt-2">Try adjusting your search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};