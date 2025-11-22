import { Note, ExperienceItem, Skill } from './types';

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'backend' },
  { name: 'PyTorch', category: 'backend' },
  { name: 'TensorFlow', category: 'backend' },
  { name: 'LangChain', category: 'backend' },
  { name: 'Generative AI', category: 'backend' },
  { name: 'Computer Vision', category: 'backend' },
  { name: 'Unsupervised Learning', category: 'backend' },
  { name: 'LaTeX', category: 'tools' },
  { name: 'Git', category: 'tools' },
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
    title: 'The Art of Component Composition',
    date: 'Oct 12, 2023',
    category: 'React',
    tags: ['Architecture', 'Clean Code'],
    content: `Component composition is one of React's most powerful patterns, yet it is often overlooked in favor of complex prop drilling or excessive context usage.

By using the \`children\` prop effectively, we can invert control and let the parent decide what to render inside a wrapper. This leads to significantly more reusable and testable components.

For example, instead of a \`Card\` component taking a \`title\`, \`image\`, and \`description\` prop, it can simply accept children slots or compound components like \`Card.Title\`, \`Card.Image\`, etc.

This approach mimics HTML structure and reduces the cognitive load when reading component code.`
  },
  {
    id: '2',
    title: 'Why I Switched to Tailwind CSS',
    date: 'Sep 28, 2023',
    category: 'CSS',
    tags: ['Styling', 'DX'],
    content: `I was a skeptic. I loved my BEM and my SCSS modules. The idea of cluttering my HTML with utility classes seemed like a step backward to the days of inline styles.

But after using Tailwind on a production project, the "aha" moment hit.

1. **Context Switching:** I no longer have to jump between a .tsx file and a .module.css file. Everything is co-located.
2. **Naming Things:** I don't have to invent class names like \`wrapper-inner-container--active\`.
3. **Consistency:** The constraints of the design system are enforced by the config. I can't just pick a random 13px font size; I stick to the scale.

It's not just a styling library; it's a productivity multiplier.`
  },
  {
    id: '3',
    title: 'Mental Models for Async State',
    date: 'Aug 15, 2023',
    category: 'Engineering',
    tags: ['State Management', 'UX'],
    content: `Handling asynchronous state is more than just \`isLoading\` and \`data\`. A robust mental model treats remote data as a state machine.

States we often forget:
- **Idle:** The request hasn't started yet.
- **Loading:** Request in flight.
- **Success:** Data arrived (but is it empty?).
- **Error:** Something went wrong (network vs server).
- **Validating:** Data is stale, refreshing in background.

Libraries like TanStack Query normalize this pattern, but understanding the underlying machine is crucial for building great UX.`
  },
  {
    id: '4',
    title: 'Designing for Dark Mode First',
    date: 'Jul 10, 2023',
    category: 'Design',
    tags: ['UI', 'Accessibility'],
    content: `Dark mode isn't just "white text on black background". It requires careful consideration of contrast, saturation, and depth.

- **Avoid pure black (#000000):** It causes smearing on OLED screens and is harsh on the eyes. Use dark greys or blues (like Slate-900).
- **Desaturate colors:** Bright colors vibrate against dark backgrounds. Lower the saturation of your primary brand colors for dark mode.
- **Elevation:** In light mode, we use shadows for depth. In dark mode, shadows are invisible. Use lightness (lighter surfaces are closer) to convey hierarchy.`
  },
    {
    id: '5',
    title: 'TypeScript Utility Types You Should Know',
    date: 'Jun 22, 2023',
    category: 'TypeScript',
    tags: ['Tips', 'Productivity'],
    content: `TypeScript offers powerful utility types that can clean up your definitions significantly.

- **Pick<T, K>**: Constructs a type by picking the set of properties K from T.
- **Omit<T, K>**: The opposite of Pick.
- **Partial<T>**: Sets all properties of T to optional.
- **Record<K, T>**: Constructs an object type whose property keys are K and whose property values are T.

Mastering these prevents code duplication and makes your interfaces more flexible.`
  }
];