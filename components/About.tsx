import React from 'react';
import { Github, Linkedin, Mail, BookOpen, Award, FileText } from 'lucide-react';
import { useTheme } from '../App';

export const About: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="max-w-4xl mx-auto pb-24 md:pb-0 animate-fade-in">
      <div className={`border rounded-3xl overflow-hidden backdrop-blur-sm shadow-xl ${
        theme === 'dark'
          ? 'bg-neutral-900/50 border-neutral-800'
          : 'bg-white/80 border-gray-300'
      }`}>
        <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: 'url(/lake_como.jpg)'}}>
             <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="px-8 pb-8">
          <div className="relative -mt-20 mb-6 flex flex-col md:flex-row items-end md:items-end gap-6">
            <div className={`w-40 h-40 rounded-3xl p-1.5 ring-4 shadow-2xl ${
              theme === 'dark'
                ? 'bg-neutral-800 ring-neutral-900'
                : 'bg-gray-100 ring-gray-200'
            }`}>
              <img 
                src="/profile.jpeg" 
                alt="Profile" 
                className={`w-full h-full rounded-2xl object-cover ${
                  theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-100'
                }`} 
              />
            </div>
            <div className="mb-2">
              <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Sarper Yurtseven</h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-indigo-400' : 'text-blue-600'}`}>Applied Mathematician & Researcher</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div className="md:col-span-2 space-y-6">
              <h3 className={`text-xl font-bold border-b pb-2 ${
                theme === 'dark'
                  ? 'text-gray-200 border-neutral-700/50'
                  : 'text-gray-900 border-gray-400/50'
              }`}>About Me</h3>
              <div className={`prose max-w-none leading-relaxed space-y-4 ${
                theme === 'dark'
                  ? 'prose-invert prose-slate text-gray-400'
                  : 'text-gray-700'
              }`}>
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
                <h3 className={`text-xl font-bold border-b pb-4 mb-4 flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'text-gray-200 border-neutral-700/50'
                    : 'text-gray-900 border-gray-400/50'
                }`}>
                  <Award className={`w-5 h-5 ${theme === 'dark' ? 'text-indigo-400' : 'text-blue-600'}`} />
                  Volunteer & Community
                </h3>
                <div className="space-y-4">
                  <div className={`p-4 rounded-xl border group hover:transition-colors ${
                    theme === 'dark'
                      ? 'bg-neutral-800/30 border-neutral-700/30 hover:border-neutral-600/50'
                      : 'bg-white/80 border-gray-300/50 hover:border-gray-400/50'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>inzva AI Team Member</h4>
                      <a href="https://github.com/inzva/inzva-DLSG" target="_blank" rel="noopener noreferrer" className={`p-1.5 rounded-lg transition-colors ${
                        theme === 'dark'
                          ? 'bg-neutral-700/50 group-hover:bg-neutral-600 text-gray-400 hover:text-white'
                          : 'bg-gray-200/50 group-hover:bg-gray-300 text-gray-700 hover:text-gray-900'
                      }`}>
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                        Co-organized Google ML Bootcamps and led the development of a deep learning lecture series.
                      </p>
                      <span className={`text-xs whitespace-nowrap ml-2 ${
                        theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                      }`}>2022 - Present</span>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-xl border group hover:transition-colors ${
                    theme === 'dark'
                      ? 'bg-neutral-800/30 border-neutral-700/30 hover:border-neutral-600/50'
                      : 'bg-gray-400/30 border-gray-400/30 hover:border-gray-500/50'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className={`font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>Matematik Dunyasi Archive Team</h4>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                        Transcribed historical mathematical content into LaTeX, making it accessible to a broader audience.
                      </p>
                      <span className={`text-xs whitespace-nowrap ml-2 ${
                        theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                      }`}>2021 - 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className={`text-xl font-bold border-b pb-2 ${
                theme === 'dark'
                  ? 'text-gray-200 border-neutral-700/50'
                  : 'text-gray-900 border-gray-400/50'
              }`}>Connect</h3>
              <div className="flex flex-col gap-3">
                <a href="https://github.com/sarperyn" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 rounded-xl transition-all border group ${
                  theme === 'dark'
                    ? 'bg-neutral-800/50 hover:bg-neutral-700 text-gray-300 hover:text-white border-neutral-700/50'
                    : 'bg-white/70 hover:bg-gray-50 text-gray-700 hover:text-gray-900 border-gray-300/50'
                }`}>
                  <div className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'bg-neutral-700 group-hover:bg-neutral-600'
                      : 'bg-gray-200 group-hover:bg-gray-300'
                  }`}>
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="font-medium">github</span>
                </a>
                
                <a href="https://www.linkedin.com/in/sarper-yurtseven/" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 rounded-xl transition-all border group ${
                  theme === 'dark'
                    ? 'bg-neutral-800/50 hover:bg-neutral-700 text-gray-300 hover:text-white border-neutral-700/50'
                    : 'bg-white/70 hover:bg-gray-50 text-gray-700 hover:text-gray-900 border-gray-300/50'
                }`}>
                  <div className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'bg-blue-900/30 group-hover:bg-blue-800/40'
                      : 'bg-blue-100/50 group-hover:bg-blue-200/50'
                  }`}>
                    <Linkedin className={`w-5 h-5 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`} />
                  </div>
                  <span className="font-medium">linkedIn</span>
                </a>

                <a href="mailto:sarperyn@gmail.com" className={`flex items-center gap-3 p-3 rounded-xl transition-all border group ${
                  theme === 'dark'
                    ? 'bg-neutral-800/50 hover:bg-neutral-700 text-gray-300 hover:text-white border-neutral-700/50'
                    : 'bg-white/70 hover:bg-gray-50 text-gray-700 hover:text-gray-900 border-gray-300/50'
                }`}>
                  <div className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'bg-emerald-900/30 group-hover:bg-emerald-800/40'
                      : 'bg-emerald-100/50 group-hover:bg-emerald-200/50'
                  }`}>
                    <Mail className={`w-5 h-5 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`} />
                  </div>
                  <span className="font-medium">email</span>
                </a>

                <a href="./curriculum.pdf" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 rounded-xl transition-all border group ${
                  theme === 'dark'
                    ? 'bg-neutral-800/50 hover:bg-neutral-700 text-gray-300 hover:text-white border-neutral-700/50'
                    : 'bg-white/70 hover:bg-gray-50 text-gray-700 hover:text-gray-900 border-gray-300/50'
                }`}>
                  <div className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'bg-indigo-900/30 group-hover:bg-indigo-800/40'
                      : 'bg-blue-100/50 group-hover:bg-blue-200/50'
                  }`}>
                    <FileText className={`w-5 h-5 ${theme === 'dark' ? 'text-indigo-400' : 'text-blue-700'}`} />
                  </div>
                  <span className="font-medium">curriculum</span>
                </a>
              </div>
              
              <div className={`p-4 rounded-xl border ${
                theme === 'dark'
                  ? 'bg-indigo-900/20 border-indigo-500/20'
                  : 'bg-blue-50/80 border-blue-200/50'
              }`}>
                 <div className={`flex items-center gap-2 mb-2 ${
                   theme === 'dark' ? 'text-indigo-300' : 'text-blue-700'
                 }`}>
                    <BookOpen className="w-4 h-4" />
                    <span className="font-bold text-sm">Research Focus</span>
                 </div>
                 <p className={`text-sm ${
                   theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                 }`}>
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