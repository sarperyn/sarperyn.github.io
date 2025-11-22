import { Note, ExperienceItem, Skill } from './types';

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'backend' },
  { name: 'PyTorch', category: 'backend' },
  { name: 'Firedrake', category: 'backend'},
  { name: 'C++' , category: 'backend'},
  { name: 'petsc', category: 'backend'},
  { name: 'MPI', category: 'backend'},
  { name: 'PHOENICS', category: 'design'},
  { name: 'LaTeX', category: 'tools' },
  { name: 'Docker', category: 'tools' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Machine Learning Engineer',
    company: 'Entegral Integration',
    period: 'Nov 2025 - Present',
    description: [
      'Building LLM-driven orchestration and tooling for SAP Basis automation.',
      'Integrating LangChain/LangGraph agents with databases such as Prometheus and Elasticsearch.'
    ]
  },
  {
    id: '2',
    role: 'Open Source Contributor',
    company: 'Google Summer of Code',
    period: 'June 2024 - Aug 2024',
    description: [
      'Developed an end-to-end pipeline training SinGAN-Seg, DDIM, and VAE models for synthetic image generation.',
      'Implemented MedSAM and U-Net for segmentation and created a GUI for dataset selection.'
    ]
  },
  {
    id: '3',
    role: 'Undergraduate Researcher',
    company: 'Topological Machine Learning Group, UB',
    period: 'Summer 2024',
    description: [
      'Contributed to Cellular Transformers architecture by implementing linear time attention mechanisms.',
      'Implemented Cosformer, Linformer, Performer, and Clustered Attention methods.'
    ]
  },
  {
    id: '4',
    role: 'Undergraduate Researcher',
    company: 'Rehg Lab, Georgia Tech',
    period: 'Summer 2023',
    description: [
      'Worked on image editing using latent space in diffusion models.',
      'Implemented a "Delta-h" generator to change continuous attributes without retraining.'
    ]
  },
  {
    id: '5',
    role: 'Undergraduate Researcher',
    company: 'Astromusers, Princeton',
    period: 'Sep 2022 - Mar 2023',
    description: [
      'Enhanced photometric legacy in space telescopes through unsupervised and supervised learning.',
      'Built and open-sourced an end-to-end pipeline for exoplanet detection using JWST data.'
    ]
  }
];

export const NOTES_DATA: Note[] = [];