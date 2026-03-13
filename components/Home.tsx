import React from 'react';
import { GraduationCap, Briefcase, Code2, MapPin, ScrollText } from 'lucide-react';
import { EXPERIENCE, SKILLS } from '../constants';
import { useTheme } from '../App';

export const Home: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="space-y-6 animate-fade-in pb-24 md:pb-0">
      {/* Profile Section */}
      <div className={`p-8 rounded-3xl border backdrop-blur-sm flex flex-col justify-center items-center text-center gap-4 transition-colors duration-300 w-fit mx-auto ${
        theme === 'dark'
          ? 'bg-neutral-900/50 border-neutral-800 hover:border-indigo-500/30'
          : 'bg-white/80 border-gray-300 hover:border-blue-500/30'
      }`}>
        <div className={`w-24 h-24 rounded-full overflow-hidden ring-4 shadow-xl mb-2 relative ${
          theme === 'dark'
            ? 'bg-neutral-700 ring-neutral-800'
            : 'bg-gray-300 ring-gray-200'
        }`}>
           <img src="/profile.jpeg" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Sarper Yurtseven</h2>
          <p className={theme === 'dark' ? 'text-indigo-400 font-medium' : 'text-blue-600 font-medium'}>Researcher</p>
        </div>
        <div className={`flex items-center gap-2 text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          <MapPin className="w-4 h-4" />
          <span>Milan, Italy</span>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className={`col-span-1 md:col-span-2 lg:col-span-4 p-6 rounded-3xl border backdrop-blur-sm ${
          theme === 'dark'
            ? 'bg-neutral-900/50 border-neutral-800'
            : 'bg-white/80 border-gray-300'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2 rounded-lg ${
              theme === 'dark'
                ? 'bg-neutral-800'
                : 'bg-gray-200'
            }`}>
              <Code2 className={`w-5 h-5 ${theme === 'dark' ? 'text-indigo-400' : 'text-blue-600'}`} />
            </div>
            <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>Things that I am confident with</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span 
                key={skill.name} 
                className={`
                  px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-300 cursor-default hover:scale-105
                  ${skill.category === 'frontend' ? (
                    theme === 'dark'
                      ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                      : 'bg-blue-100 border-blue-300 text-blue-700'
                  ) : ''}
                  ${skill.category === 'backend' ? (
                    theme === 'dark'
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                      : 'bg-emerald-100 border-emerald-300 text-emerald-700'
                  ) : ''}
                  ${skill.category === 'design' ? (
                    theme === 'dark'
                      ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                      : 'bg-purple-100 border-purple-300 text-purple-700'
                  ) : ''}
                  ${skill.category === 'tools' ? (
                    theme === 'dark'
                      ? 'bg-orange-500/10 border-orange-500/20 text-orange-400'
                      : 'bg-orange-100 border-orange-300 text-orange-700'
                  ) : ''}
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
        <div className={`lg:col-span-2 p-8 rounded-3xl border ${
          theme === 'dark'
            ? 'bg-neutral-900/30 border-neutral-800/80'
            : 'bg-white/60 border-gray-300/80'
        }`}>
          <h3 className={`text-xl font-bold mb-8 flex items-center gap-2 ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
          }`}>
            <Briefcase className={`w-5 h-5 ${theme === 'dark' ? 'text-indigo-400' : 'text-blue-600'}`} />
            Work History
          </h3>
          <div className="space-y-12">
            {EXPERIENCE.map((job) => (
              <div key={job.id} className={`relative pl-8 border-l last:border-0 ${
                theme === 'dark' ? 'border-neutral-700' : 'border-gray-300'
              }`}>
                <div className={`absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full ring-4 ${
                  theme === 'dark'
                    ? 'bg-indigo-500 ring-black'
                    : 'bg-blue-500 ring-gray-50'
                }`} />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>{job.role}</h4>
                  <span className={`text-xs font-mono px-2 py-1 rounded ${
                    theme === 'dark'
                      ? 'text-gray-500 bg-neutral-800'
                      : 'text-gray-600 bg-gray-200'
                  }`}>{job.period}</span>
                </div>
                <p className={`font-medium mb-3 text-sm ${theme === 'dark' ? 'text-indigo-400' : 'text-blue-600'}`}>{job.company}</p>
                <ul className="space-y-2">
                  {job.description.map((desc, i) => (
                    <li key={i} className={`text-sm leading-relaxed list-disc list-outside ml-4 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                    }`}>
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
          <div className={`p-6 rounded-3xl border backdrop-blur-sm ${
            theme === 'dark'
              ? 'bg-neutral-900/50 border-neutral-800'
              : 'bg-white/80 border-gray-300'
          }`}>
            <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${
              theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
            }`}>
              <GraduationCap className={`w-5 h-5 ${theme === 'dark' ? 'text-indigo-400' : 'text-blue-600'}`} />
              Education
            </h3>
            
            <div className="space-y-6">
              <div className="group">
                <h4 className={`font-medium group-hover:transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-200 group-hover:text-indigo-400'
                    : 'text-gray-900 group-hover:text-blue-600'
                }`}>Mathematical Engineering, M.S.</h4>
                <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>Politecnico di Milano</p>
                <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}`}>2024 - Present</p>
                <p className={`text-xs mt-2 ${
                  theme === 'dark'
                    ? 'text-indigo-400/70'
                    : 'text-blue-600/70'
                }`}>Focus on Computational Science and Learning</p>
              </div>
              
              <div className={`border-t my-4 ${theme === 'dark' ? 'border-neutral-800' : 'border-gray-200'}`} />

              <div className="group">
                <h4 className={`font-medium group-hover:transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-200 group-hover:text-indigo-400'
                    : 'text-gray-900 group-hover:text-blue-600'
                }`}>Mathematics, B.S.</h4>
                <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>Yildiz Technical University</p>
                <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}`}>2020 - 2024</p>
                <p className={`text-xs mt-1 ${
                  theme === 'dark'
                    ? 'text-emerald-400/70'
                    : 'text-emerald-600/70'
                }`}>Graduated with honors</p>
              </div>
            </div>
          </div>

          {/* Publications */}
          <div className={`p-6 rounded-3xl border backdrop-blur-sm ${
            theme === 'dark'
              ? 'bg-neutral-900/50 border-neutral-800'
              : 'bg-white/80 border-gray-300'
          }`}>
            <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${
              theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
            }`}>
              <ScrollText className={`w-5 h-5 ${theme === 'dark' ? 'text-indigo-400' : 'text-blue-600'}`} />
              Publications
            </h3>
            
            <div className="space-y-6">
              <a href="https://openreview.net/pdf?id=GW3h79mxrF" target="_blank" rel="noopener noreferrer" className={`group block transition-colors cursor-pointer ${
                theme === 'dark'
                  ? 'hover:text-indigo-400'
                  : 'hover:text-blue-600'
              }`}>
                <h4 className={`text-sm font-medium leading-snug transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-200 group-hover:text-indigo-400'
                    : 'text-gray-900 group-hover:text-blue-600'
                }`}>
                  Higher-Order Molecular Learning: The Cellular Transformer
                </h4>
                <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>ICLR 2025 Workshop on GEM</p>
              </a>

              <div className={`border-t my-4 ${theme === 'dark' ? 'border-neutral-800' : 'border-gray-200'}`} />

              <a href="https://www.researchgate.net/publication/393390923_Sa2056_AN_AUTOMATED_SEGMENTATION_PIPELINE_FOR_QUANTIFYING_GASTRIC_MOTILITY_IN_HUMANS_USING_4D_CINE_MAGNETIC_RESONANCE_IMAGING" target="_blank" rel="noopener noreferrer" className={`group block transition-colors cursor-pointer ${
                theme === 'dark'
                  ? 'hover:text-indigo-400'
                  : 'hover:text-blue-600'
              }`}>
                <h4 className={`text-sm font-medium leading-snug transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-200 group-hover:text-indigo-400'
                    : 'text-gray-900 group-hover:text-blue-600'
                }`}>
                  An Automated Segmentation Pipeline for Gastric Motility
                </h4>
                <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>Gastroenterology, Elsevier, 2025</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};