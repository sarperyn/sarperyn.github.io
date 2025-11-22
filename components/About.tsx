import React from 'react';
import { Github, Linkedin, Mail, BookOpen, Award, FileText } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pb-24 md:pb-0 animate-fade-in">
      <div className="bg-zinc-850/50 border border-zinc-800 rounded-3xl overflow-hidden backdrop-blur-sm shadow-xl">
        <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: 'url(/lake_como.jpg)'}}>
             <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="px-8 pb-8">
          <div className="relative -mt-20 mb-6 flex flex-col md:flex-row items-end md:items-end gap-6">
            <div className="w-40 h-40 rounded-3xl bg-slate-800 p-1.5 ring-4 ring-slate-900 shadow-2xl">
              <img 
                src="/profile.jpeg" 
                alt="Profile" 
                className="w-full h-full rounded-2xl object-cover bg-slate-700" 
              />
            </div>
            <div className="mb-2">
              <h2 className="text-3xl font-bold text-slate-100">Sarper Yurtseven</h2>
              <p className="text-indigo-400 text-lg">Applied Mathematician & Researcher</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-xl font-bold text-slate-200 border-b border-slate-700/50 pb-2">About Me</h3>
              <div className="prose prose-invert prose-slate max-w-none text-slate-400 leading-relaxed space-y-4">
                <p>
                  Hi, I'm Sarper. I enjoy sharing moments from my life, along with some science and mathematics-related content. 
                  I also post my notes and share the resources I use. Hopefully, i will keep it updated as much as I can keep.
                </p>
                <p>
                  I am a Master's student at Politecnico di Milano, pursuing a degree in Mathematical Engineering. My bachelor's degree was in Mathematics, and pursuing an engineering degree combined my passion both for engineering and mathematics.
                </p>
                <p>
                  I love traveling. I've visited several places across Europe and West Asia, but there are still many more to explore. I plan to use my next travels to visit Italy, and I hope to see all of Italy before I finish my master's degree. We'll see.
                  I'm also a big fan of Star Wars and enjoy reading manga and watching anime. My favorite manga is Berserk, and I consider series like Attack on Titan, Neon Genesis Evangelion, Violet Evergarden, and Claymore to be masterpieces—so good that I wish I could forget them just to experience them again.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-200 border-b border-slate-700/50 pb-4 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-400" />
                  Volunteer & Community
                </h3>
                <div className="space-y-4">
                  <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/30 group hover:border-slate-600/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-200">inzva AI Team Member</h4>
                      <a href="https://github.com/inzva/inzva-DLSG" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-slate-700/50 group-hover:bg-slate-600 transition-colors text-slate-400 hover:text-white">
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-slate-400 mb-2">
                        Co-organized Google ML Bootcamps and led the development of a deep learning lecture series.
                      </p>
                      <span className="text-xs text-slate-500 whitespace-nowrap ml-2">2022 - Present</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/30 group hover:border-slate-600/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-200">Matematik Dunyasi Archive Team</h4>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-slate-400">
                        Transcribed historical mathematical content into LaTeX, making it accessible to a broader audience.
                      </p>
                      <span className="text-xs text-slate-500 whitespace-nowrap ml-2">2021 - 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-200 border-b border-slate-700/50 pb-2">Connect</h3>
              <div className="flex flex-col gap-3">
                <a href="https://github.com/sarperyn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/50 group">
                  <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="font-medium">GitHub</span>
                </a>
                
                <a href="https://www.linkedin.com/in/sarper-yurtseven/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/50 group">
                  <div className="p-2 bg-blue-900/30 rounded-lg group-hover:bg-blue-800/40 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </a>

                <a href="mailto:sarperyn@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/50 group">
                  <div className="p-2 bg-emerald-900/30 rounded-lg group-hover:bg-emerald-800/40 transition-colors">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="font-medium">Email Me</span>
                </a>

                <a href="./curriculum.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/50 group">
                  <div className="p-2 bg-indigo-900/30 rounded-lg group-hover:bg-indigo-800/40 transition-colors">
                    <FileText className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="font-medium">Curriculum</span>
                </a>
              </div>
              
              <div className="bg-indigo-900/20 p-4 rounded-xl border border-indigo-500/20 mt-6">
                 <div className="flex items-center gap-2 text-indigo-300 mb-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-bold text-sm">Research Focus</span>
                 </div>
                 <p className="text-slate-400 text-sm">
                    Focusing on numerical PDE methods, deep learning–based PDE solvers, and model order reduction.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};