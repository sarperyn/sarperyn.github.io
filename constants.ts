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

export const NOTES_DATA: Note[] = [
  {
    id: '1',
    title: 'Recommended Resources',
    date: 'Nov 22, 2025',
    category: 'Resources',
    tags: ['Mathematics', 'Machine Learning', 'Learning Materials'],
    content: `This page contains links to some useful resources. I'll keep updating this page as much as I can. Most of the books are well-known.

## Mathematics

### Videos and Playlists

| Title | Description | Link |
|-------|-------------|------|
| Gilbert Strang lectures on Linear Algebra (MIT) | Linear algebra lessons. He's the best in the universe. | [Watch](https://www.youtube.com/playlist?list=PL49CF3715CB9EF31D) |
| Intro to Abstract Algebra and proof techniques in mathematics | Algebra part is not detailed but enough to have a basic understanding. | [Watch](https://www.youtube.com/playlist?list=PL22w63XsKjqxaZ-v5N4AprggFkQXgkNoP) |
| Vector Calculus and Partial Differential Equations | Steve is the guy! | [Watch](https://www.youtube.com/playlist?list=PLMrJAkhIeNNQromC4WswpU1krLOq5Ro6S) |
| A Brief Introduction to Groups | Nice group theory tutorial for non-mathematicians. | [Watch](https://www.youtube.com/watch?v=KufsL2VgELo&list=WL&index=3&t=31s) |
| Mathematical Foundations of Quantum Mechanics - Why do we need a Hilbert Space? | Great introduction to quantum mechanics foundations. | [Watch](https://www.youtube.com/watch?v=_nL4SznGPgU&list=WL&index=5) |
| Group theory, abstraction, and the 196,883-dimensional monster | A great video about the 'monster group'. A 3blue1brown classic. | [Watch](https://www.youtube.com/watch?v=mH0oCDa74tE&list=PLTOG9kHXmwlGeO2ZcZpYWndVZNO1UxLnx&index=2) |
| Visual Group Theory course | One of the best lecture series on the internet. | [Watch](https://www.youtube.com/playlist?list=PLwV-9DG53NDxU337smpTwm6sef4x-SCLv) |

### Textbooks

| Title | Description | Link |
|-------|-------------|------|
| Abstract Mathematics | For those who want to begin with abstract mathematics. | [Read](https://www.people.vcu.edu/~rhammack/BookOfProof/Main.pdf) |
| Elementary Differential Geometry | Great book to start learning differential geometry. It's easy and well-written. | [Read](http://staff.ustc.edu.cn/~spliu/2018DG/ONeill.pdf) |

## Machine Learning

### Textbooks

| Title | Description | Link |
|-------|-------------|------|
| An Introduction to Statistical Learning | Classic introduction to statistical learning methods. | [Read](https://hastie.su.domains/ISLR2/ISLRv2_website.pdf) |
| Deep Learning | Classic deep learning book. | [Read](https://www.deeplearningbook.org) |
| Deep Learning Book (UDL) | My favorite deep learning book. | [Read](https://udlbook.github.io/udlbook/) |
| Mathematics for Machine Learning | Mathematics fundamentals of machine learning. | [Read](https://mml-book.github.io/book/mml-book.pdf) |`
  }
];