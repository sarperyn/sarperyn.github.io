import React, { useEffect } from 'react';
import { X, Calendar, Share2 } from 'lucide-react';
import { Note } from '../types';
import { MarkdownRenderer } from './MarkdownRenderer';

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
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-8xl bg-black rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-black/95 backdrop-blur border-b border-white/10 p-6 flex items-start justify-between">
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
              className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            >
                <X className="w-5 h-5" />
            </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <MarkdownRenderer
            content={note.content}
            className="prose prose-invert prose-lg max-w-none text-slate-300"
          />
        </div>

        {/* Footer */}
    <div className="p-6 bg-black/60 border-t border-white/10 flex items-center justify-between">
          <div />
            <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share Note</span>
            </button>
        </div>
      </div>
    </div>
  );
};