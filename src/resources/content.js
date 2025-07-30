import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Aryan",
  lastName: "Techie",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Indie Creator & Product Developer",
  avatar: "/images/avatar.jpg",
  email: "aryan@aroice.in",
  timezone: "Asia/Kolkata",
  timezoneLabel: "India/Haryana",
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&rsquo;s Newsletter</>,
  description: (
    <>
      On The Insight Journal, I share ideas at the intersection of code, clarity, creativity, and systems.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "aroice.in",
    icon: "globe",
    link: "https://aroice.in",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: `https://instagram.com/aryantechie`,
  },
  {
    name: "YouTube",
    icon: "youtube",
    link: `https://youtube.com/@aroice`,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aryan-techie",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://ie.linkedin.com/in/aryantechie",
  },
  {
    name: "ProductHunt",
    icon: "producthunt",
    link: "https://www.producthunt.com/@aryantechie",
  },
  {
    name: "X (Twitter)",
    icon: "twitter",
    link: "https://www.x.com/realaroice",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting code and clarity.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Argon</strong></>,
    href: "https://argon.aroice.in",
  },
  subline: (
    <>I&rsquo;m Aryan, a CS student at IIT Patna and the creator of AROICE, where I build thoughtful tools, products,<br></br> and ideas that blend code and clarity.</>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.timezoneLabel}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com/aroice",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Aryan is a developer, writer, and indie creator from Haryana, currently studying Computer Science at IIT Patna. Through his brand AROICE, he builds thoughtful digital products and shares ideas on systems thinking, clarity, and creativity. His work includes Chrome extensions, minimal & creative websites, and personal tools built to simplify how we think, work, and create.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "AROICE",
        timeframe: "2024 - Present",
        role: "Founder & Creator",
        achievements: [
                  <>
                    Founded <strong><a href="https://aroice.in">AROICE</a></strong>, a personal brand where I build thoughtful digital tools, share ideas, and explore systems for intentional living.
                  </>,
                  <>
                    Built <strong><a href="https://ashes.aroice.in">Ashes</a></strong>, a new tab Chrome extension inspired by <em>memento mori</em> that offers a quiet reminder to reflect on time and use it with purpose.
                  </>,
                  <>
                    Created <strong><a href="https://github.com/aroice-hq/argon">ARGON</a></strong>, an open-source Chrome extension that helps you stay focused. It combines smart website blocking, screen time analytics, and tools to improve digital wellbeing.
                  </>,
                  <>
                    Developed <strong><a href="https://aroice.in/smartscroll">Smart Scroll</a></strong>, a simple desktop utility that turns your volume knob into a precision scroll wheel. It is available as open source.
                  </>,
                ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/work/projects.jpg",
            alt: "ARGON - ASHES - SMART SCROLL - Current Projects by Aryan Techie - AROICE",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "YouTube @ AROICE",
        timeframe: "July 2024 - Present",
        role: "Content Creator",
        achievements: [
          <>
            On <a href="https://youtube.com/@aroice" target="_blank">@aroice</a>, I share introspective videos on focus, philosophy, creativity, and the tools we use to shape our lives. 
    Each video is a quiet space to slow down, think clearly, and reconnect with what matters.
          </>,
        ],
        images: [
          {
            src: "/images/projects/work/youtube.jpg",
            alt: "AROICE YouTube Channel - Aryan Techie",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Indian Institute of Technology (IIT) Patna",
        description: <>Pursuing Computer Science, graduating in 2028.</>,
      },
      {
        name: "Self-Learning & Side Projects",
        description: <>Exploring product design, branding, and creative systems through hands-on projects and experimentation.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "JavaScript & TypeScript",
        description: <>Love building full-stack projects and tools using modern JS/TS.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Chrome Extension Development",
        description: <>Built extensions like <strong>ARGON</strong> and <strong>Ashes</strong>, focused on productivity, intentionality, and making everyday life better. Designing digital tools that simplify attention and strengthen intent.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Video Editing (Premiere Pro)",
        description: <>Written, shot, and edited dozens of thoughtful talking head and cinematic videos on <strong>YouTube</strong>, exploring topics like focus, books, self-awareness, and modern life. Combining clarity, pacing, and visuals to make ideas stick.</>,
        images: [],
        
      },
      {
        title: "AI-Augmented Workflows",
        description: <>Integrate tools like ChatGPT, Claude, and Grok to streamline thinking, accelerate creation, and build systems that scale with intention.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "The Insight Journal",
  subtitle: "Writing about code and clarity...",
  description: `Writing about code and clarity... | Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects & Case Studies`,
  subtitle: "Projects built with purpose, explained with clarity...",
  description: `Code and Creative projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    // {
    //   src: "",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
