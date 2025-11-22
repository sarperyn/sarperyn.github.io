import React from 'react';
import { Github, Linkedin, Mail, Globe, BookOpen, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pb-24 md:pb-0 animate-fade-in">
      <div className="bg-zinc-850/50 border border-zinc-800 rounded-3xl overflow-hidden backdrop-blur-sm shadow-xl">
        <div className="h-48 bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 relative">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        
        <div className="px-8 pb-8">
          <div className="relative -mt-20 mb-6 flex flex-col md:flex-row items-end md:items-end gap-6">
            <div className="w-40 h-40 rounded-3xl bg-slate-800 p-1.5 ring-4 ring-slate-900 shadow-2xl">
              <img 
                src="https://picsum.photos/300/300" 
                alt="Profile" 
                className="w-full h-full rounded-2xl object-cover bg-slate-700" 
              />
            </div>
            <div className="mb-2">
              <h2 className="text-3xl font-bold text-slate-100">Sarper Yurtseven</h2>
              <p className="text-indigo-400 text-lg">Mathematical Engineer & Researcher</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-xl font-bold text-slate-200 border-b border-slate-700/50 pb-2">About Me</h3>
              <div className="prose prose-invert prose-slate max-w-none text-slate-400 leading-relaxed">
                <p>
                  Hello! I'm Sarper, a Mathematical Engineering Master's student at Politecnico di Milano. My academic and professional journey has been driven by a deep curiosity for Computational Science and Machine Learning.
                </p>
                <p>
                  I specialize in <strong>Deep Learning</strong>, <strong>Generative AI</strong>, and <strong>Computer Vision</strong>. I have actively contributed to research groups at the University of Barcelona, Georgia Tech, and Princeton, working on cutting-edge topics like Cellular Transformers, Diffusion Models, and Exoplanet Detection.
                </p>
                <p>
                  Beyond research, I am an open-source enthusiast, having contributed to significant projects through Google Summer of Code, and I am passionate about sharing knowledge through workshops and lecture series.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-200 border-b border-slate-700/50 pb-4 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-400" />
                  Volunteer & Community
                </h3>
                <div className="space-y-4">
                  <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/30">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-200">inzva AI Team Member</h4>
                      <span className="text-xs text-slate-500">2022 - Present</span>
                    </div>
                    <p className="text-sm text-slate-400 mb-2">
                      Co-organized Google ML Bootcamps and led the development of a deep learning lecture series.
                    </p>
                  </div>
                  
                  <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/30">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-200">Matematik Dunyasi Archive Team</h4>
                      <span className="text-xs text-slate-500">2021 - 2024</span>
                    </div>
                    <p className="text-sm text-slate-400">
                      Transcribed historical mathematical content into LaTeX, making it accessible to a broader audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-200 border-b border-slate-700/50 pb-2">Connect</h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/50 group">
                  <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="font-medium">GitHub</span>
                </a>
                
                <a href="#" className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/50 group">
                  <div className="p-2 bg-blue-900/30 rounded-lg group-hover:bg-blue-800/40 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </a>

                <a href="mailto:hello@example.com" className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/50 group">
                  <div className="p-2 bg-emerald-900/30 rounded-lg group-hover:bg-emerald-800/40 transition-colors">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="font-medium">Email Me</span>
                </a>
              </div>
              
              <div className="bg-indigo-900/20 p-4 rounded-xl border border-indigo-500/20 mt-6">
                 <div className="flex items-center gap-2 text-indigo-300 mb-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-bold text-sm">Research Focus</span>
                 </div>
                 <p className="text-slate-400 text-sm">
                    Currently exploring topological spaces and their application to cellular transformers.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};