import React from 'react';
import { GraduationCap, Briefcase, Code2, MapPin, ScrollText } from 'lucide-react';
import { EXPERIENCE, SKILLS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-24 md:pb-0">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700/50 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/20 transition-all duration-500" />
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                {/* Portfolio 2024 */}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight mb-4">
                <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Welcome!
                </span>  
              </h1>
            </div>
            <p className="text-slate-400 text-lg max-w-lg mt-4">
              I believe mathematics is the greatest thing the human mind has created. I believe in mathematics.
            </p>
          </div>
        </div>

        <div className="bg-zinc-850/50 p-8 rounded-3xl border border-zinc-800 backdrop-blur-sm flex flex-col justify-center items-center text-center gap-4 hover:border-indigo-500/30 transition-colors duration-300">
          <div className="w-24 h-24 rounded-full bg-slate-700 overflow-hidden ring-4 ring-slate-800 shadow-xl mb-2 relative">
             <img src="/profile.jpeg" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-100">Sarper Yurtseven</h2>
            <p className="text-indigo-400 font-medium">Researcher</p>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
            <MapPin className="w-4 h-4" />
            <span>Milan, Italy</span>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-zinc-850/50 p-6 rounded-3xl border border-zinc-800 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-slate-800 rounded-lg">
              <Code2 className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-200">Things That I am Confident</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span 
                key={skill.name} 
                className={`
                  px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-300 cursor-default hover:scale-105
                  ${skill.category === 'frontend' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : ''}
                  ${skill.category === 'backend' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : ''}
                  ${skill.category === 'design' ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : ''}
                  ${skill.category === 'tools' ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : ''}
                `}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Experience & Education Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Timeline */}
        <div className="lg:col-span-2 bg-zinc-850/30 p-8 rounded-3xl border border-zinc-800/80">
          <h3 className="text-xl font-bold text-slate-100 mb-8 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-indigo-400" />
            Work History
          </h3>
          <div className="space-y-12">
            {EXPERIENCE.map((job) => (
              <div key={job.id} className="relative pl-8 border-l border-slate-700 last:border-0">
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-slate-900" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="text-lg font-semibold text-slate-200">{job.role}</h4>
                  <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">{job.period}</span>
                </div>
                <p className="text-indigo-400 font-medium mb-3 text-sm">{job.company}</p>
                <ul className="space-y-2">
                  {job.description.map((desc, i) => (
                    <li key={i} className="text-slate-400 text-sm leading-relaxed list-disc list-outside ml-4">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Publications */}
        <div className="space-y-6">
          {/* Education */}
          <div className="bg-zinc-850/50 p-6 rounded-3xl border border-zinc-800 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              Education
            </h3>
            
            <div className="space-y-6">
              <div className="group">
                <h4 className="text-slate-200 font-medium group-hover:text-indigo-400 transition-colors">Mathematical Engineering, M.S.</h4>
                <p className="text-slate-500 text-sm mt-1">Politecnico di Milano</p>
                <p className="text-xs text-slate-600 mt-1">2024 - Present</p>
                <p className="text-xs text-indigo-400/70 mt-2">Focus on Computational Science and Learning</p>
              </div>
              
              <div className="border-t border-slate-800 my-4" />

              <div className="group">
                <h4 className="text-slate-200 font-medium group-hover:text-indigo-400 transition-colors">Mathematics, B.S.</h4>
                <p className="text-slate-500 text-sm mt-1">Yildiz Technical University</p>
                <p className="text-xs text-slate-600 mt-1">2020 - 2024</p>
                <p className="text-xs text-emerald-400/70 mt-1">Graduated with honors</p>
              </div>
            </div>
          </div>

          {/* Publications */}
          <div className="bg-zinc-850/50 p-6 rounded-3xl border border-zinc-800 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <ScrollText className="w-5 h-5 text-indigo-400" />
              Publications
            </h3>
            
            <div className="space-y-6">
              <a href="https://openreview.net/pdf?id=GW3h79mxrF" target="_blank" rel="noopener noreferrer" className="group block hover:text-indigo-400 transition-colors cursor-pointer">
                <h4 className="text-slate-200 text-sm font-medium leading-snug group-hover:text-indigo-400 transition-colors">
                  Higher-Order Molecular Learning: The Cellular Transformer
                </h4>
                <p className="text-xs text-slate-500 mt-1">ICLR 2025 Workshop on GEM</p>
              </a>

              <div className="border-t border-slate-800 my-4" />

              <a href="https://www.researchgate.net/publication/393390923_Sa2056_AN_AUTOMATED_SEGMENTATION_PIPELINE_FOR_QUANTIFYING_GASTRIC_MOTILITY_IN_HUMANS_USING_4D_CINE_MAGNETIC_RESONANCE_IMAGING" target="_blank" rel="noopener noreferrer" className="group block hover:text-indigo-400 transition-colors cursor-pointer">
                <h4 className="text-slate-200 text-sm font-medium leading-snug group-hover:text-indigo-400 transition-colors">
                  An Automated Segmentation Pipeline for Gastric Motility
                </h4>
                <p className="text-xs text-slate-500 mt-1">Gastroenterology, Elsevier, 2025</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};