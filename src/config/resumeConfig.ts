import { ref } from 'vue'
import {
  IconVue,
  IconTS,
  IconTailwind,
  IconAccessibility,
  IconDesign,
  IconNode,
  IconCloud,
  IconAndroid,
} from './resumeIcons'

export const profileImage = {
  src: '/images/michal-wronski.jpg',
  alt: 'Michał Wroński',
}

const Tech = (id: string, name: string, years: string, icon: any) => ({ id, name, years, icon })

export const education = ref([
  {
    degree: 'M.Sc. in Computer Science',
    institution: 'University X',
    years: '2010 – 2015',
    details: 'Focus on software engineering and distributed systems.',
    langs: [
      { name: 'Polish', level: 'Native' },
      { name: 'English', level: 'Fluent' },
    ],
  },
])

export const techGroups = ref([
  {
    id: 'frontend',
    name: 'Frontend',
    items: [
      Tech('vue', 'Vue.js', '8+', IconVue),
      Tech('ts', 'TypeScript', '6+', IconTS),
      Tech('tailwind', 'Tailwind CSS', '5+', IconTailwind),
      Tech('design', 'Design Systems', '5+', IconDesign),
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    items: [
      Tech('node', 'Node.js', '6+', IconNode),
      Tech('supabase', 'Supabase', '3+', IconNode),
      Tech('sql', 'Postgres', '5+', IconNode),
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    items: [
      Tech('docker', 'Docker', '4+', IconCloud),
      Tech('k8s', 'Kubernetes', '2+', IconCloud),
      Tech('ci', 'CI/CD', '5+', IconCloud),
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile',
    items: [Tech('android', 'Android / Kotlin', '3+', IconAndroid)],
  },
  {
    id: 'testing',
    name: 'Testing & QA',
    items: [Tech('vitest', 'Vitest / Jest', '4+', IconDesign)],
  },
])



export const recommendations = ref([
  {
    name: 'Błazej Budzyński',
    title: 'Software Architect & Technical Leader',
    text: 'I know Michał for years and I collaborated with him on multiple projects while working at NSN and REC and have been always amazed with his work ethics and design ideas. He is a strategic, creative thinker that brings true diversity and a wealth of problem solving know-how to every project he participates. He has a true gift for engaging clients and quickly ascertaining their expectations in order to surpass their needs based on his technical background and analytical abilities. Really, the student surpassed the master.',
    image:
      'https://media.licdn.com/dms/image/v2/C4E03AQF3uB87qHou7g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1531665346571?e=1764806400&v=beta&t=jxz5JbTOka1Mg8SfZ26wm6PR5H0BMfVZPoAdGRRm_P0',
  },
  {
    name: 'Petra Crhák',
    title: 'Project Manager',
    text: 'I really want to share my impression of the cooperation with Michał. We used to cooperate more than a year on one important development project across the globe. I was really surprised how Michał has clear customer understanding not only of the project. He has focused customer approach, self-management and always can see even troubles on the way as challenge which can be solved. Michal has great and unique technical knowledge. Thanks a lot! I have learnt from you a lot and was my pleasure to be with you in one team. Thanks!',
    image:
      'https://media.licdn.com/dms/image/v2/D4E03AQEDbmRBw3qWAQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1721319094475?e=1764806400&v=beta&t=skZDqHhs83k_0ZlZwBPj-mglXS9k5C0XDNJ7-uSK7oU',
  },
])

export const companies = ref([
  {
    id: 'big',
    name: 'BigMikeSolutions',
    url: '/',
    icon: IconDesign,
    role: 'Founder / Lead',
    years: '2018 – Present',
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/m-wrona',
    icon: IconTS,
    role: 'Open-source contributor',
    years: '2016 – Present',
  },
  {
    id: 'past',
    name: 'Past Company',
    url: '#',
    icon: IconTailwind,
    role: 'Frontend Engineer',
    years: '2016 – 2018',
  },
])

export const projects = ref([
  {
    id: 'proj1',
    title: 'Marketing Platform Revamp',
    dates: '2023',
    tech: ['Vue.js', 'TypeScript', 'Tailwind', 'Supabase'],
    description:
      'Led frontend rebuild of a marketing platform improving performance and accessibility.',
    responsibilities: ['Frontend architecture', 'Performance tuning', 'Accessibility audits'],
  },
  {
    id: 'proj2',
    title: 'E‑learning Platform',
    dates: '2021 – 2022',
    tech: ['Vue.js', 'Nuxt', 'Tailwind', 'Stripe'],
    description: 'Built an e‑learning platform with secure payments and course management.',
    responsibilities: ['Feature development', 'Payments integration', 'Testing & CI'],
  },
  {
    id: 'proj3',
    title: 'Design System & Component Library',
    dates: '2019 – 2021',
    tech: ['Vue.js', 'Storybook', 'TypeScript'],
    description: 'Created a design system used across multiple products to ensure consistency.',
    responsibilities: ['Design tokens', 'Component library', 'Documentation'],
  },
])

export const certificates = ref([
  {
    id: 'cert1',
    title: 'Frontend Performance Optimization',
    issuer: 'Google',
    year: '2022',
    url: '#',
  },
  {
    id: 'cert2',
    title: 'Accessibility Fundamentals',
    issuer: 'Deque University',
    year: '2021',
    url: '#',
  },
])

