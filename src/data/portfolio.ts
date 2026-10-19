/**
 * Central portfolio data — customized for Vikrant Singh Chouhan.
 * Full Stack Java Developer portfolio.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Vikrant Singh Chouhan',
  displayName: 'Vikrant Singh Chouhan',
  firstName: 'VIKRANT',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A CHOUHAN ORIGINAL',
  role: 'Full Stack Java Developer',
  tagline: ['Full Stack Java Developer', 'Spring Boot', 'Problem Solver'],
  intro:
    'Motivated and passionate developer with hands-on experience in Java, Spring Boot, HTML, CSS, JavaScript, Python, and MySQL — building scalable, efficient, and user-friendly web applications.',
  location: 'Jaipur, Rajasthan, India',
  email: 'vikrantsinghchouhan99@gmail.com',
  phone: '+91 8824899843',
  links: {
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/vikrantsinghchouhan99-svg',
  },
  resumePdf: '/assets/resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Vikrant Singh Chouhan',
  },
  interests: ['Full Stack Java Architecture', 'Spring Microservices & APIs', 'Database Optimization & SQL'],
};

export const education = [
  {
    school: 'University of Rajasthan',
    place: 'Jaipur, Rajasthan',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2023 – 2026',
    score: 'Final Year',
  },
  {
    school: 'CBSE Board',
    place: 'Jaipur, Rajasthan',
    degree: 'Higher Secondary (12th) — Science & Mathematics',
    period: '2022 – 2023',
    score: '80%',
  },
  {
    school: 'CBSE Board',
    place: 'Jaipur, Rajasthan',
    degree: 'Secondary School (10th)',
    period: '2020 – 2021',
    score: '60%',
  },
];

export const experience = [
  {
    company: 'AU Academy',
    role: 'Full Stack Java Developer Trainee',
    place: 'Jaipur, Rajasthan',
    period: 'Intensive Training',
    points: [
      'Completed intensive Full Stack Java Development training covering Core Java, HTML, CSS, JavaScript, SQL, and Full Stack concepts.',
      'Developed responsive and functional web applications with interactive frontends and robust backend integration.',
      'Built practical projects and strengthened software development, debugging, and database connectivity skills.',
    ],
  },
  {
    company: 'Infotact Solutions',
    role: 'Python Development Trainee',
    place: 'Remote',
    period: '2-Month Training',
    points: [
      'Completed 2-month remote Python Development training focusing on programming fundamentals and practical implementations.',
      'Developed practical Python projects and automated file management workflows.',
      'Enhanced computational logic and object-oriented problem-solving skills.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'amazon-clone',
    title: 'Amazon Clone Website',
    year: '2025',
    genre: 'Web Development • E-Commerce • UI',
    logline: 'Fully responsive Amazon Clone replicating the user interface, shopping navigation, and product showcase with modern UI components.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    build: [
      'Built a fully responsive Amazon Clone replicating the iconic e-commerce layout, including multi-tier header, category sliders, and product showcases.',
      'Implemented fluid grid layouts, interactive navigation bars, and mobile hamburger navigation for seamless cross-device browsing.',
      'Designed responsive UI cards with price labels, ratings, and cart preview components with optimized paint times.',
    ],
    features: [
      'Fully Responsive Cross-Device Design',
      'Amazon-inspired Homepage & Hero Banners',
      'Product Listings & Interactive Grid Layouts',
      'Multi-tiered Navigation Bar with Search UI',
    ],
    metrics: [
      { value: '100%', label: 'responsive design' },
      { value: '3+', label: 'breakpoints supported' },
      { value: '0', label: 'external UI dependencies' },
      { value: 'Fast', label: 'initial load time' },
    ],
    github: 'https://github.com/vikrantsinghchouhan99-svg',
    live: 'https://amazon-clone-website-14.netlify.app',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    year: '2025',
    genre: 'Web Application • Finance • Utility',
    logline: 'Expense tracking application that helps users manage daily expenses, log transactions, and monitor financial balances in real time.',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
    build: [
      'Developed a dynamic expense tracking tool allowing users to log, categorize, and delete financial transactions effortlessly.',
      'Implemented real-time mathematical calculations for current balance, total income, and total expenses with instant UI re-rendering.',
      'Integrated browser LocalStorage for persistent transaction records across browser reloads with rigorous validation.',
    ],
    features: [
      'Add & Delete Financial Transactions',
      'Real-Time Balance & Expense Calculation',
      'Expense Categorization & History Tracking',
      'Financial Summary Dashboard with Clean UI',
    ],
    metrics: [
      { value: 'Real-Time', label: 'balance calculation' },
      { value: '100%', label: 'offline capability' },
      { value: 'Persistent', label: 'local storage tracking' },
      { value: 'Zero', label: 'calculation latency' },
    ],
    github: 'https://github.com/vikrantsinghchouhan99-svg',
    live: 'https://expensetracker123456789.netlify.app',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'calculator-app',
    title: 'Calculator Application',
    year: '2024',
    genre: 'Utility App • JavaScript • Interaction',
    logline: 'Responsive calculator performing standard mathematical operations with dynamic updates and a clean, user-friendly interface.',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    build: [
      'Created a tactile, responsive calculator handling standard mathematical operations, chained inputs, and decimal precision.',
      'Engineered an interactive user interface with key-press animations, dynamic display updates, and error prevention.',
      'Optimized layout for both touchscreen mobile devices and desktop keyboard inputs, hosted live on Vercel.',
    ],
    features: [
      'Basic & Chained Arithmetic Operations',
      'Dynamic Display Updates & Clear State',
      'Responsive Mobile-First Interface',
      'Interactive Tactile User Experience',
    ],
    metrics: [
      { value: 'Instant', label: 'response speed' },
      { value: '100%', label: 'accurate decimal logic' },
      { value: 'Cross-Device', label: 'touch & click support' },
      { value: 'Vercel', label: 'live cloud deployment' },
    ],
    github: 'https://github.com/vikrantsinghchouhan99-svg',
    live: 'https://calculator-seven-lemon-20.vercel.app',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'au-academy-java',
    title: 'Full Stack Java Trainee',
    org: 'AU Academy',
    detail: 'Completed comprehensive Full Stack Java Development training covering Core Java, JDBC, Servlets, Spring Boot, and SQL.',
    laurel: 'Full Stack Java',
  },
  {
    id: 'infotact-python',
    title: 'Python Development Certification',
    org: 'Infotact Solutions',
    detail: 'Completed 2-month intensive Python training covering fundamentals, automation, and project development.',
    laurel: 'Python Developer',
    link: '/assets/python-training-certificate.png',
  },
  {
    id: 'rscit-distinction',
    title: 'RSCIT 87% Distinction',
    org: 'VMOU',
    detail: 'Achieved an outstanding 87% score in Rajasthan State Certificate course in Information Technology from Vardhman Mahaveer Open University.',
    laurel: 'State Distinction',
    link: '/assets/rscit-certificate.jpg',
  },
  {
    id: 'cbse-12th-merit',
    title: '80% Science & Math',
    org: 'CBSE Board',
    detail: 'Higher Secondary education completed with 80% marks in Science & Mathematics discipline.',
    laurel: 'Academic Merit',
  },
  {
    id: 'deployed-projects',
    title: '3+ Live Web Projects',
    org: 'Netlify • Vercel',
    detail: 'Successfully built and deployed multiple real-world web applications and utilities with responsive design.',
    laurel: 'Web Projects',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'AU Academy', name: 'Full Stack Java Development Training', link: 'https://github.com/vikrantsinghchouhan99-svg' },
  { issuer: 'Infotact Solutions', name: 'Python Development Training', link: '/assets/python-training-certificate.png' },
  { issuer: 'VMOU', name: 'RSCIT – Vardhman Mahaveer Open University (87%)', link: '/assets/rscit-certificate.jpg' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java is the primary programming language',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic & APIs',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Core & Adv' },
      { name: 'Spring Boot', mono: 'Sb', note: 'Framework' },
      { name: 'JDBC', mono: 'Jd' },
      { name: 'Servlets & JSP', mono: 'Sj' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Responsive user interfaces & layout',
    skills: [
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'Bootstrap', mono: 'Bs' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational data modeling & queries',
    skills: [
      { name: 'MySQL', mono: 'My', note: 'Primary DB' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'soft-skills',
    title: 'Professional Skills',
    subtitle: 'Communication & problem solving',
    skills: [
      { name: 'Problem Solving', mono: 'Ps' },
      { name: 'Communication', mono: 'Cm' },
      { name: 'Teamwork', mono: 'Tw' },
      { name: 'Time Management', mono: 'Tm' },
      { name: 'Adaptability', mono: 'Ad' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Java: ['AU Academy Full Stack Java Training', 'Core Java, JDBC, Servlets & Spring Boot'],
  'Spring Boot': ['Full Stack Java Development Trainee', 'Enterprise Backend Architecture'],
  JDBC: ['AU Academy Database Integration Training'],
  'Servlets & JSP': ['AU Academy Java Web Development Module'],
  Python: ['Infotact Solutions 2-Month Training', 'Python Automation & File Handling'],
  JavaScript: ['Amazon Clone Website', 'Expense Tracker', 'Calculator App'],
  HTML5: ['Amazon Clone Website', 'Expense Tracker', 'Calculator App'],
  CSS3: ['Amazon Clone Website', 'Expense Tracker', 'Calculator App'],
  Bootstrap: ['Full Stack Java Web Applications'],
  MySQL: ['AU Academy Relational Database Training', 'Full Stack Project Schemas'],
  SQL: ['AU Academy SQL Module', 'Table Queries & Optimization'],
  'Problem Solving': ['AU Academy Project Building', 'Expense Tracker & Calculator App Logic'],
  Communication: ['University of Rajasthan BCA', 'AU Academy Collaboration'],
  Teamwork: ['AU Academy Trainee Cohort', 'Collaborative Coding'],
  'Time Management': ['Simultaneous BCA Academics & Full Stack Training'],
  Adaptability: ['Transitioning across Java, Python, and Web Stacks'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2020 – 2023',
    synopsis: 'Secondary and Higher Secondary education from CBSE Board with Science & Mathematics.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Science & Mathematics (12th)',
        description: 'Higher Secondary (12th) from CBSE Board in Science & Mathematics — finishing with a distinguished 80%.',
        tags: ['CBSE', '12th Science', '80% Score'],
        runtime: '2022 – 2023',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Secondary School (10th)',
        description: 'Completed Secondary School (10th) from CBSE Board with strong fundamentals in mathematics and science.',
        tags: ['CBSE', '10th', 'Foundation'],
        runtime: '2020 – 2021',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'The Tech Degree',
    period: '2023 – 2026',
    synopsis: 'Pursuing Bachelor of Computer Applications (BCA) at the University of Rajasthan, Jaipur.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'BCA Journey',
        description: 'Undergraduate degree in Computer Applications at University of Rajasthan, Jaipur — focusing on programming and software engineering.',
        tags: ['BCA', 'Rajasthan University', 'Final Year'],
        runtime: '2023 – 2026',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'State IT Credential',
        description: 'Completed RSCIT from Vardhman Mahaveer Open University (VMOU) with an outstanding 87% score.',
        tags: ['RSCIT', 'VMOU', '87% Score'],
        runtime: 'VMOU Rajasthan',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Training Arc',
    period: '2024 – 2025',
    synopsis: 'Intensive Full Stack Java Development training at AU Academy and Python training at Infotact Solutions.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Full Stack Java Trainee',
        description: 'Intensive Full Stack Java Development training covering Core Java, JDBC, Servlets, Spring Boot, and MySQL.',
        tags: ['AU Academy', 'Full Stack Java', 'Spring Boot'],
        runtime: 'AU Academy',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Python Development Trainee',
        description: 'Completed 2-month Python Development training with Infotact Solutions — working on automation and application projects.',
        tags: ['Infotact Solutions', 'Python', 'Remote'],
        runtime: 'Infotact Solutions',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Live Products',
    period: '2025',
    synopsis: 'Three live deployed applications — an E-Commerce storefront, a real-time Expense Tracker, and a responsive Calculator.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Storefront',
        description: 'Amazon Clone Website — responsive e-commerce interface with product grids, carousels, and shopping navigation.',
        tags: ['Amazon Clone', 'E-Commerce', 'Live Demo'],
        runtime: 'Netlify Deployed',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'The Budgeter',
        description: 'Expense Tracker — real-time expense calculations, local storage persistence, and financial dashboard.',
        tags: ['Expense Tracker', 'FinTech', 'Local Storage'],
        runtime: 'Netlify Deployed',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'The Calculator',
        description: 'Calculator Application — clean arithmetic engine with dynamic feedback and mobile-optimized design.',
        tags: ['Calculator', 'Vercel', 'JavaScript'],
        runtime: 'Vercel Deployed',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Diving deep into Spring Boot Microservices, RESTful APIs, and scalable enterprise web systems.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Enterprise Frontier',
        description: 'Exploring Spring Boot Microservices, Cloud Integrations, and high-performance Java web applications.',
        tags: ['Spring Boot', 'Microservices', 'Enterprise Java'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Java', detail: 'Hands-on training • OOP & Core Java', palette: amber },
  { label: 'Backend Framework', title: 'Spring Boot', detail: 'REST APIs & Enterprise Web Apps', palette: crimson },
  { label: 'Primary Database', title: 'MySQL', detail: 'Relational Schemas & SQL Queries', palette: ocean },
  { label: 'The Training Arc', title: 'AU Academy', detail: 'Full Stack Java Developer Training', palette: violet },
  { label: 'Remote Training', title: 'Infotact Solutions', detail: '2-Month Python Development', palette: jade },
  { label: 'State Credential', title: 'RSCIT (87%)', detail: 'VMOU High Distinction', palette: amber },
  { label: 'Featured Original', title: 'Amazon Clone', detail: 'Live on Netlify • Responsive E-Commerce', palette: crimson },
  { label: 'Featured Original', title: 'Expense Tracker', detail: 'Live on Netlify • Real-Time Finance', palette: ocean },
  { label: 'Academic High', title: '80% 12th CBSE', detail: 'Science & Mathematics Stream', palette: jade },
  { label: 'Degree Track', title: 'BCA Final Year', detail: 'University of Rajasthan, Jaipur', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'BCA · Rajasthan University',
    lines: ['University of Rajasthan, Jaipur', 'Final Year Student (2023 – 2026)'],
    chips: ['BCA', 'Jaipur'],
  },
  {
    kicker: 'Primary Stack',
    title: 'Java & Spring Boot.',
    lines: ['Java, Spring Boot, JDBC, Servlets & JSP', 'MySQL, SQL, JavaScript, HTML5, CSS3'],
    chips: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    kicker: 'Training',
    title: 'Two Training Arcs',
    lines: ['Full Stack Java Development Trainee · AU Academy', 'Python Development Trainee · Infotact Solutions (2 Months)'],
  },
  {
    kicker: 'Projects',
    title: 'Three Live Originals',
    lines: ['Amazon Clone — Responsive E-Commerce Platform', 'Expense Tracker — Real-Time Financial Management', 'Calculator App — Tactile Precision Arithmetic Utility'],
  },
  {
    kicker: 'Achievements',
    title: 'Certifications & Honors',
    lines: ['AU Academy Full Stack Java Certification', 'Infotact Solutions Python Training Certification', 'RSCIT VMOU State Distinction — 87% Score'],
  },
  {
    kicker: 'Current Mission',
    title: 'Now Building',
    lines: ['Enterprise Java Architectures · Spring Boot Microservices · Scalable Web Applications'],
  },
];

export type ProfileId = 'vikrant' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'vikrant',
    name: 'Vikrant',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Live Demos`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 Highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
