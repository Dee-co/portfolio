// Single source of truth for the whole site. Edit content here only.

export const profile = {
  name: "Deepak Malakar",
  firstName: "Deepak",
  initials: "DM",
  title: "Software Developer",
  company: "Delibo",
  roles: [
    "React Native Developer",
    "Frontend Engineer",
    "TypeScript Developer",
    "Real-time Systems Builder",
  ],
  location: "Chennai, Tamil Nadu, India",
  email: "dmalakar03@gmail.com",
  phone: "+91-9399909989",
  github: "https://github.com/Dee-co",
  linkedin: "https://linkedin.com/in/deepak-malakar-6b5110219",
  siteUrl: "https://deepakmalakar.vercel.app",
  resumeUrl: "/Deepak_Malakar_Resume.pdf",
  summary:
    "React Native developer with 4+ years of experience building cross-platform mobile and web apps. I ship Android and iOS apps to the Play Store and App Store, build real-time systems with Socket.io and MQTT, and integrate payments end to end.",
  intro:
    "I turn ideas into reliable, scalable products. Over four years I have shipped native mobile apps, WhatsApp-driven commerce platforms and device-connected systems, and I care about the details that make them feel fast and dependable.",
};

export const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "3", label: "Core products shipped at Delibo" },
  { value: "3", label: "Portals in the Wize platform" },
  { value: "30%", label: "Page load time reduced" },
];

export const whatIDo = [
  {
    title: "Mobile apps",
    text: "Native Android and iOS apps in React Native, published to Google Play Store and Apple App Store with real-time push notification workflows.",
    icon: "Smartphone",
  },
  {
    title: "Real-time systems",
    text: "Socket.io with automatic reconnection and MQTT device sync, so new orders and device status are never missed.",
    icon: "Zap",
  },
  {
    title: "Payments and integrations",
    text: "Razorpay with UPI intent redirection to GPay and PhonePe, automated verification and a polling fallback for reliable status.",
    icon: "CreditCard",
  },
  {
    title: "Web platforms",
    text: "React.js and Vue.js apps, micro-frontend architecture, GraphQL with Apollo Client, PWAs and CI/CD on AWS Amplify.",
    icon: "Layers",
  },
];

export const techMarquee = [
  "React Native",
  "TypeScript",
  "React.js",
  "Vue.js 3",
  "Redux Toolkit",
  "Socket.io",
  "MQTT",
  "GraphQL",
  "Apollo Client",
  "Razorpay",
  "Electron",
  "Firebase",
  "Node.js",
  "MongoDB",
  "Docker",
  "GitHub Actions",
  "AWS Amplify",
  "Tailwind CSS",
  "Quasar",
  "PWA",
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile",
    items: [
      "React Native",
      "Android Development",
      "iOS Development",
      "React Navigation",
      "Cross-Platform Development",
    ],
  },
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks and Libraries",
    items: ["React.js", "Vue.js 2/3", "Electron", "Quasar Framework", "Tailwind CSS"],
  },
  {
    title: "State Management",
    items: ["Redux Toolkit", "Zustand", "Context API", "Vuex", "Pinia"],
  },
  {
    title: "Real-time and APIs",
    items: [
      "WebSocket (Socket.io)",
      "MQTT",
      "REST APIs",
      "GraphQL (Apollo Client)",
      "Axios",
      "Polling",
      "Bluetooth Integration",
    ],
  },
  {
    title: "Payments",
    items: ["Razorpay Payment Gateway", "UPI Intent Redirection (GPay, PhonePe)"],
  },
  {
    title: "Backend and Data",
    items: ["Node.js", "MongoDB", "DynamoDB", "Firebase", "AWS Amplify"],
  },
  {
    title: "DevOps and Architecture",
    items: ["Micro-Frontend Architecture", "Docker", "CI/CD (GitHub Actions)"],
  },
  {
    title: "Other",
    items: ["Progressive Web Apps (PWA)", "Responsive Design", "Git", "GitHub", "Agile/Scrum"],
  },
];

export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Developer",
    company: "Delibo, Unit of Pradeep Technology Products Pvt Ltd",
    location: "Chennai",
    period: "Feb 2024 - Present",
    current: true,
    bullets: [
      "Built and shipped 3 core products (a smart locker booking platform, a User Portal, and an HMI application) as native Android and iOS apps in React Native, published to Google Play Store and Apple App Store with real-time push notification workflows, and as responsive web apps in Vue.js 3.",
      "Built Wize, a WhatsApp-automated commerce solution: a Meta WhatsApp Business chatbot lists products, and product details open in the browser where users book products, giving an end-to-end booking flow that starts in chat.",
      "Delivered Wize as 3 portals in React.js: a user browser portal opened from the WhatsApp bot, a seller portal, and a super admin portal.",
      "Built Underbelly, a separate customer app offered as its own service, with an order flow based on counter location and time slot.",
      "Developed the order booking flow of the User Portal in TypeScript, defining typed models for order and booking data to keep the flow type-safe.",
      "Implemented real-time order handling in the seller admin of a SaaS e-commerce platform using Socket.io, with connection management and automatic reconnection so new-order events are not missed.",
      "Built an Electron-based desktop KOT agent that listens for new-order events and automatically prints KOT and bills on thermal printers, with a manual print option also available to sellers.",
      "Enabled location-based reservations and real-time status monitoring for the smart locker booking platform using MQTT for device synchronization.",
      "Integrated Razorpay Payment Gateway via REST APIs, including UPI intent-based redirection to GPay and PhonePe apps, with automated verification and payment status updates.",
      "Implemented real-time payment status tracking using Socket.io (WebSocket), with a polling mechanism as a fallback for reliable status updates.",
      "Adopted a micro-frontend architecture for the SaaS e-commerce platform and consumed GraphQL APIs via Apollo Client for product and order data; containerized the frontend with Docker.",
      "Implemented Progressive Web App (PWA) support in Quasar Framework, enabling offline access and cross-platform reach for the web portals.",
      "Set up CI/CD pipelines using GitHub Actions and deployed web applications on AWS Amplify.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Zithara Technology Private Limited",
    period: "Aug 2023 - Nov 2023",
    bullets: [
      "Built reusable UI components in React.js and Vue.js, improving maintainability and scalability across web applications.",
      "Converted wireframes and business requirements into responsive, mobile-friendly interfaces, collaborating with UI/UX designers.",
      "Integrated REST APIs and built client-side functionality, improving user engagement and application performance.",
      "Reduced page load time by 30% through web application performance optimization.",
      "Participated in Agile development processes, including sprint planning, code reviews, testing, and deployment.",
    ],
  },
  {
    role: "Software Developer Trainee",
    company: "Serial Experiment Emerging LLP",
    location: "Hyderabad",
    period: "Mar 2022 - Aug 2023",
    bullets: [
      "Built and maintained web application features using JavaScript, Vue.js, and React.js.",
      "Collaborated with senior developers to design, develop, test, and deploy software solutions.",
      "Improved application usability and user engagement by 20% by implementing new features and bug fixes.",
      "Improved system performance by 15% through performance and code quality optimization.",
      "Participated in Agile/Scrum ceremonies, including sprint planning, daily stand-ups, and retrospectives.",
      "Gained hands-on experience in the software development lifecycle, debugging, Git version control, and code review.",
    ],
  },
];

export const education = {
  degree: "B.Tech / B.E., Mechanical Engineering",
  school: "Chhattisgarh Swami Vivekanand Technical University, Bhilai",
  score: "73%",
};

export const interests = [
  { label: "Playing games", emoji: "🎮" },
  { label: "Writing tech blogs", emoji: "✍️" },
  { label: "Traveling and exploring new places", emoji: "🌍" },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: "work" | "personal";
  featured?: boolean;
  icon: string;
  accent: string; // tailwind gradient classes
  highlights?: string[];
  link?: string; // add a live demo URL here to show a "Live demo" button
};

export const projects: Project[] = [
  {
    slug: "wize",
    title: "Wize",
    tagline: "WhatsApp-automated commerce platform",
    description:
      "A WhatsApp chatbot lists products, and product details open in the browser where users book. Delivered as three connected portals.",
    tags: ["React.js", "WhatsApp Business", "Micro-frontend", "GraphQL", "Socket.io", "Docker"],
    category: "work",
    featured: true,
    icon: "MessageCircle",
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    highlights: ["User browser portal", "Seller portal", "Super admin portal"],
  },
  {
    slug: "underbelly",
    title: "Underbelly",
    tagline: "Customer app with counter and slot based ordering",
    description:
      "A separate customer app offered as its own service. The order flow is built around counter location and time slot.",
    tags: ["Order flow", "Slot booking", "Location based"],
    category: "work",
    featured: true,
    icon: "CalendarClock",
    accent: "from-orange-500 via-amber-500 to-yellow-400",
  },
  {
    slug: "smart-locker",
    title: "Smart Locker Booking",
    tagline: "Location-based reservations with live device status",
    description:
      "Native Android and iOS apps plus a responsive web app. MQTT keeps lockers and bookings in sync in real time, with push notification workflows.",
    tags: ["React Native", "Vue.js 3", "MQTT", "Push Notifications", "Quasar PWA"],
    category: "work",
    featured: true,
    icon: "Lock",
    accent: "from-violet-500 via-purple-500 to-fuchsia-500",
  },
  {
    slug: "kot-agent",
    title: "KOT Desktop Agent",
    tagline: "Orders print themselves",
    description:
      "An Electron agent listens for new-order events and prints KOT and bills on thermal printers automatically. Sellers can also print manually.",
    tags: ["Electron", "Socket.io", "Thermal printing"],
    category: "work",
    icon: "Printer",
    accent: "from-rose-500 via-pink-500 to-fuchsia-500",
  },
  {
    slug: "payments",
    title: "Real-time Payments",
    tagline: "Razorpay with UPI intent and a safety net",
    description:
      "UPI intent redirection to GPay and PhonePe, automated verification, and live payment status over Socket.io with a polling fallback.",
    tags: ["Razorpay", "UPI", "Socket.io", "REST APIs"],
    category: "work",
    icon: "CreditCard",
    accent: "from-sky-500 via-blue-500 to-indigo-500",
  },
  {
    slug: "bhuyia",
    title: "Bhuyia",
    tagline: "Buy building, home, property",
    description:
      "A modern real estate platform for property discovery and management, with an intuitive interface, smooth performance and efficient data handling.",
    tags: ["Vue.js", "Vuetify", "Vuex", "Tailwind CSS", "Node.js"],
    category: "personal",
    icon: "Building2",
    accent: "from-indigo-500 via-blue-500 to-cyan-500",
  },
  {
    slug: "socal",
    title: "Socal",
    tagline: "Social networking app",
    description:
      "Share posts with images, like, comment and follow in real time. Built with secure authentication, Firebase push notifications and instant updates.",
    tags: ["React Native", "Redux Toolkit", "Firebase", "Node.js", "MongoDB", "Express"],
    category: "personal",
    icon: "Users",
    accent: "from-fuchsia-500 via-pink-500 to-rose-500",
  },
  {
    slug: "dinetime",
    title: "DineTime",
    tagline: "Restaurant table booking",
    description:
      "Reserve dining slots at favorite hotels and restaurants with real-time slot availability and confirmation.",
    tags: ["React Native", "Redux", "Firebase", "Tailwind CSS"],
    category: "personal",
    icon: "UtensilsCrossed",
    accent: "from-amber-500 via-orange-500 to-red-500",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];
