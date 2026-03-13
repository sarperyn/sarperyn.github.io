import React from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { NOTES_DATA } from '../constants';
import { useTheme } from '../App';
import { MarkdownRenderer } from './MarkdownRenderer';

interface NotePageProps {
  noteId: string;
  onBack: () => void;
}

export const NotePage: React.FC<NotePageProps> = ({ noteId, onBack }) => {
  const { theme } = useTheme();
  const note = NOTES_DATA.find(n => n.id === noteId);

  if (!note) {
    return (
      <div className={`min-h-screen w-full animate-fade-in pb-24 md:pb-0 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12">
          <div
            className={`p-6 rounded-3xl border ${
              theme === 'dark' ? 'bg-black border-white/10' : 'bg-white border-gray-300'
            }`}
          >
            <button
              onClick={onBack}
              className={`inline-flex items-center gap-2 text-sm font-medium mb-4 ${
                theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-slate-100' : 'text-gray-900'}`}>
              Note not found
            </h2>
            <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'} mt-2`}>
              This note doesn’t exist (or the link is wrong).
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen w-full animate-fade-in pb-24 md:pb-0 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12">
        <button
          onClick={onBack}
          className={`inline-flex items-center gap-2 text-sm font-medium mb-6 ${
            theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Digital Garden
        </button>

        <div
          className={`rounded-3xl border overflow-hidden ${
            theme === 'dark' ? 'bg-black border-white/10' : 'bg-white border-gray-300'
          }`}
        >
          <div
            className={`p-6 md:p-8 border-b ${
              theme === 'dark' ? 'border-white/10' : 'border-gray-200'
            }`}
          >
            <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
              <span
                className={`px-2.5 py-0.5 rounded-md border font-medium ${
                  theme === 'dark'
                    ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                    : 'bg-blue-500/10 text-blue-700 border-blue-500/20'
                }`}
              >
                {note.category}
              </span>
              <span className={`flex items-center gap-1.5 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                <Calendar className="w-3.5 h-3.5" />
                {note.date}
              </span>
            </div>

            <h1 className={`text-2xl md:text-4xl font-bold leading-tight ${theme === 'dark' ? 'text-slate-100' : 'text-gray-900'}`}>
              {note.title}
            </h1>
          </div>

          <div className="p-6 md:p-8">
            <MarkdownRenderer
              content={note.content}
              className={`prose max-w-none ${
                theme === 'dark' ? 'prose-invert text-slate-300' : 'text-gray-800'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
