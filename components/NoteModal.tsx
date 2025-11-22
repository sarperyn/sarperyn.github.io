import React, { useEffect } from 'react';
import { X, Calendar, Tag, Share2 } from 'lucide-react';
import { Note } from '../types';

interface NoteModalProps {
  note: Note;
  onClose: () => void;
}

export const NoteModal: React.FC<NoteModalProps> = ({ note, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur border-b border-slate-800 p-6 flex items-start justify-between">
            <div className="pr-8">
                <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium">
                        {note.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {note.date}
                    </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 leading-tight">
                    {note.title}
                </h2>
            </div>
            <button 
                onClick={onClose}
                className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
            >
                <X className="w-5 h-5" />
            </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar">
            <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                {note.content.split('\n').map((paragraph, index) => (
                    paragraph ? <p key={index} className="mb-4">{paragraph}</p> : <br key={index} />
                ))}
            </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-800/30 border-t border-slate-800 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
                {note.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1 text-xs font-medium text-slate-400 bg-slate-800 px-2 py-1 rounded-md">
                        <Tag className="w-3 h-3" />
                        {tag}
                    </span>
                ))}
            </div>
            <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share Note</span>
            </button>
        </div>
      </div>
    </div>
  );
};