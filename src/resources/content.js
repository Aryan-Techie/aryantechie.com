import { Logo, Row, Line, Text } from "@once-ui-system/core";

const person = {
  firstName: "Aryan",
  lastName: "Techie",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "CS Student @ IIT-P & Indie Creator",
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
  title: `${person.name}`,
  description: `${person.name} is a ${person.role} who crafts digital experiences with code and clarity. Explore his portfolio featuring innovative web extensions, creative projects, and insights on technology and life.`,
  headline: <>Crafting code and clarity.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">ASHES</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "https://ashes.aroice.in",
  },
  subline: (
  <>I&rsquo;m Aryan, CS student at IIT Patna creating tools to quiet the noise, clear the mind,<br></br> and live with intent.</>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a ${person.role} from ${person.timezoneLabel}. Discover his journey through computer science at IIT Patna, indie development projects, and passion for creating meaningful digital experiences.`,
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
        Aryan is a Computer Science student at IIT Patna who crafts tools and distills ideas to quiet the noise, clear the mind, and live with intent. Through his brand AROICE, he builds thoughtful digital products including Chrome extensions, websites, and personal tools. His work spans from productivity tools like ARGON to philosophical projects like Ashes, all designed to help people think clearly and live intentionally.
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
        title: "Chrome Extension Development",
        description: (
          <>Built production extensions <strong>ARGON</strong> (focus & analytics) and <strong>Ashes</strong> (memento mori). Full manifest V3, storage APIs, content scripts.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Full-Stack Web Development",
        description: (
          <>React frontends, Node.js backends, 11ty static sites. Built this portfolio, AROICE website, and multiple production apps.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "HTML5",
            icon: "html5",
          },
          {
            name: "CSS3",
            icon: "css3",
          },
        ],
        images: [],
      },
      {
        title: "Content Creation & Video Production",
        description: (
          <>YouTube channel with scripted, shot, and edited videos. Premiere Pro workflows, Audacity audio editing, storytelling for tech content.</>
        ),
        tags: [
          {
            name: "YouTube",
            icon: "youtubetech",
          },
          {
            name: "Premiere Pro",
            icon: "premierepro",
          },
        ],
        images: [],
      },
      {
        title: "Automation & Scripting",
        description: (
          <>Python scripts, Bash automation, AutoHotkey for Windows productivity shortcuts, creative workflow systems. Real productivity gains through custom tooling.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "AutoHotkey",
            icon: "autohotkey",
          },
        ],
        images: [],
      },
      {
        title: "Systems & Development Environment",
        description: (
          <>Fedora Linux + GNOME, Git/GitHub mastery, terminal-first workflows. Personal knowledge systems with Obsidian.</>
        ),
        tags: [
          {
            name: "Linux",
            icon: "linux",
          },
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "Obsidian",
            icon: "obsidian",
          },
          {
            name: "Notion",
            icon: "notion",
          },
        ],
        images: [],
      },
      {
        title: "UI/UX & Design",
        description: (
          <>Chrome extension interfaces, website/blog UI design, user experience for productivity tools. Figma prototyping, Once UI design systems.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "Once UI",
            icon: "onceui",
          },
        ],
        images: [],
      },
      {
        title: "Additional Technologies",
        description: (
          <>TypeScript in Next.js projects, Firebase for backend services, Tailwind CSS styling, Git version control, Vercel deployments, GNOME desktop environment, SQL queries for basic data analytics.</>
        ),
        tags: [
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Firebase",
            icon: "firebase",
          },
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "Vercel",
            icon: "vercel",
          },
          {
            name: "GNOME",
            icon: "linux",
          },
        ],
        images: [],
      },
    ],
  },
  opensource: {
    display: true, // set to false to hide this section
    title: "Open Source Contributions",
    projects: [
      {
        name: "Weekly Commits",
        url: "https://github.com/funinkina/weekly-commits",
        timeframe: "September 2025",
        role: "Core Contributor & UI/UX Designer",
        achievements: [
          <>
            Built comprehensive <strong>theme system with 14 color themes</strong> and flexible coloring modes for enhanced commit visualization.
          </>,
          <>
            <strong>Redesigned project logo and visual identity</strong> - created new branding that captures the essence of weekly coding activity.
          </>,
          <>
            Implemented <strong>instant save functionality</strong> for all settings, removing manual save buttons and improving UX.
          </>,
          <>
            Enhanced documentation with comprehensive README rewrite and installation guides. <strong>4+ merged PRs</strong>.
          </>,
        ],
        images: [
          {
            src: "/images/projects/weekly-commits/weekly-commits-hero.jpg",
            alt: "Weekly Commits GNOME Extension - Open Source Contribution by Aryan Techie",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/weekly-commits/weeky-commits-logo-design.jpg",
            alt: "Weekly Commits GNOME Extension - Brand New Logo by Aryan Techie",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        name: "Magic Portfolio",
        url: "https://github.com/once-ui-system/magic-portfolio",
        timeframe: "September 2025",
        role: "Feature Developer",
        achievements: [
          <>
            Built <strong>configurable social sharing system</strong> for blog posts across 9 platforms (Twitter, LinkedIn, Reddit, etc.).
          </>,
          <>
            Enhanced content sharing capabilities and improved user engagement features for the portfolio framework.
          </>,
        ],
        images: [
          {
            src: "/images/projects/work/magic-portfolio.jpg",
            alt: "Magic Portfolio - Dopler - Open Source Contribution by Aryan Techie",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/work/magic-portfolio-social.jpg",
            alt: "Social Sharing buttons - Magic Portfolio Blog - Dopler - Open Source Contribution by Aryan Techie",
            width: 16,
            height: 9,
          },

        ],      },
      {
        name: "Quartz Static Site Generator",
        url: "https://github.com/jackyzha0/quartz",
        timeframe: "April 2025",
        role: "Developer",
        achievements: [
          <>
            Improved <strong>quartz sync to support any Git branch</strong> - expanded deployment options for content creators.
          </>,
          <>
            Enhanced workflow flexibility for static site generation and publishing.
          </>,
        ],
        images: [{
            src: "/images/projects/work/quartz.jpg",
            alt: "Quartz - Static Site Generator - Open Source Contribution by Aryan Techie",
            width: 16,
            height: 9,
          },],
      },
      {
        name: "libfprint-CS9711",
        url: "https://github.com/ddlsmurf/libfprint-CS9711",
        timeframe: "August 2025",
        role: "Documentation Contributor",
        achievements: [
          <>
            Authored <strong>comprehensive Fedora installation guide</strong> for Chipsailing CS9711 fingerprint reader.
          </>,
          <>
            Fixed GNOME PAM integration issues and solved hardware compatibility problems for Linux users.
          </>,
        ],
        images: [{
            src: "/images/projects/work/libfprint.jpg",
            alt: "Libfprint Module Fix - Open Source Contribution by Aryan Techie",
            width: 16,
            height: 9,
          },],
      },
      {
        name: "Howdy (Facial Recognition)",
        url: "https://github.com/freedy237/howdy-fedora-install",
        timeframe: "June 2025",
        role: "Security Fix Contributor",
        achievements: [
          <>
            Fixed <strong>SELinux GDM login block on Fedora 42</strong> by creating custom xdm_t policy module.
          </>,
          <>
            Enabled seamless facial recognition at login and resolved critical security policy conflicts.
          </>,
        ],
        images: [{
            src: "/images/projects/work/howdy.jpg",
            alt: "Howdy - Facial Recognition Fix - Open Source Contribution by Aryan Techie",
            width: 16,
            height: 9,
          },],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "The Insight Journal",
  subtitle: "Writing about Code & Clarity",
  description: `The Insight Journal by ${person.name} - Thoughtful writing about technology, personal growth, philosophy, and the intersection of code and clarity. Discover insights on building digital products, life as a CS student, and finding meaning in the modern world.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects & Case Studies`,
  subtitle: "Built with purpose, Explained with clarity",
  description: `Explore ${person.name}'s portfolio of innovative projects including browser extensions like Argon and Ashes, digital wellness tools, and creative coding experiments. Each project features detailed case studies and insights into the development process.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Visual Stories",
  subtitle: "Capturing Moments & Memories",
  description: `Photo gallery showcasing Aryan Techie's journey as a Computer Science student at IIT Patna, indie creator, and developer. Visual stories from campus life, coding sessions, travel, and creative projects. | See what ${person.name} has been capturing recently...`,
  images: [
    {
      src: "/images/gallery/pastery-cafe-iit.jpg",
      alt: "Pastry and coffee at IIT Patna cafe - Aryan Techie enjoying a coffee break",
      title: 'Pastry',
      year: '2025'
    },

    {
                src: '/images/gallery/aryan-techie-iit-patna-campus-standing-2025.webp',
                alt: 'Aryan Techie standing confidently at IIT Patna campus - Computer Science student portrait',
                title: 'Campus Portrait',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-formal-fit-mirror-portrait-2025.webp',
                alt: 'Professional mirror selfie of Aryan Techie in formal attire - indie creator lifestyle',
                title: 'On the Way',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-reading-in-library-2025.webp',
                alt: 'Aryan Techie reading books in library - CS student studying at IIT Patna',
                title: 'With My Books',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-laptop-setup-grind-late-night-2025.webp',
                alt: 'Aryan Techie late night coding session - indie developer workflow and productivity',
                title: 'Late Night Coding',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-airforce-plane-background-sitting-2025.webp',
                alt: 'Aryan Techie with friend ar IIT Patna - the friendship moments',
                title: 'With My Bro',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-plane-window-aesthetic-lookout-2025.webp',
                alt: 'Aryan Techie looking out airplane window during flight - travel lifestyle and perspective',
                title: 'Sky High View',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-airport-working-nomad-style-2025.webp',
                alt: 'Aryan Techie working on laptop at airport - digital nomad lifestyle and remote work',
                title: 'Digital Nomad Life',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-dual-color-portrait-editorial-2025.webp',
                alt: 'Editorial portrait of Aryan Techie with dual color lighting - creative photography and reflection',
                title: 'Is It Me?',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-shadow-wall-portrait-artistic.webp',
                alt: 'Artistic shadow portrait of Aryan Techie against wall - creative photography and lighting',
                title: 'Shadow Play',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-back-profile-edited-glow-effect-2025.webp',
                alt: 'Back profile portrait of Aryan Techie with artistic glow effect - creative photo editing',
                title: 'That\'s Me',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-mirror-selfie-blackwhite-2025.webp',
                alt: 'Black and white mirror selfie of Aryan Techie - monochrome photography style',
                title: 'Monochrome Reflection',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-cafe-glass-reflection-indoors.webp',
                alt: 'Aryan Techie at cafe with glass reflection - contemplative moment and coffee culture',
                title: 'Cafe Contemplation',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-near-window-indoor-light-portrait-2025.webp',
                alt: 'Aryan Techie portrait with natural window light - cinematic indoor photography',
                title: 'Isn\'t It Cinematic',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-group-selfie-smiling-2025.webp',
                alt: 'Aryan Techie group selfie with friends smiling - friendship and social moments',
                title: 'Trio',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-aroice-with-yash-iit-patna-2025.webp',
                alt: 'Aryan Techie with Yash at IIT Patna campus - college friendship and bonding',
                title: 'Always With You',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-friends-campus-iit.webp',
                alt: 'Aryan Techie with friends at IIT Patna campus - student life and friendship group',
                title: 'The Trio',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-speaking-on-stage-2025.webp',
                alt: 'Aryan Techie speaking on stage at event - public speaking and leadership presentation',
                title: 'On Stage',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-whiteboard-presentation-snap.webp',
                alt: 'Aryan Techie on stage - i can sing',
                title: 'Me on Stage',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-roadside-sunset-glasses-iitp-iit-2025.webp',
                alt: 'Aryan Techie golden hour portrait with glasses at IIT Patna roadside - sunset photography',
                title: 'Sunset Vibes',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-swimming-pool-fun-2025.webp',
                alt: 'Aryan Techie enjoying pool day - recreational activities and fun moments',
                title: 'Pool Day',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-winter-cap-campus-portrait-iit-patna-2025.webp',
                alt: 'Aryan Techie winter portrait with cap at IIT Patna gateway - college campus life in winter',
                title: 'Gateway',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-with-book-stack-headphones-2025.webp',
                alt: 'Aryan Techie holding stack of books with headphones - student life and learning passion',
                title: 'Just Books',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-airplane-sitting-wide-2025.webp',
                alt: 'Aryan Techie sitting in airplane with friend - travel lifestyle and adventure',
                title: 'Broski',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-below-shot-lightflare-moody-car-2025.webp',
                alt: 'Moody below angle portrait of Aryan Techie near car with light flare - artistic photography',
                title: 'Moody Car Shot',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-blindfold-risk-poster-style-2025.webp',
                alt: 'Artistic poster style portrait of Aryan Techie with blindfold - conceptual photography about expectations',
                title: 'Expectations',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-books-closeup-intense-read-2025.webp',
                alt: 'Close-up of Aryan Techie intensely reading books - focused studying and academic dedication',
                title: 'Staring at Books',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-candid-indoors-eyeglasses-airport.webp',
                alt: 'Candid indoor portrait of Aryan Techie with eyeglasses at airport - travel moments and style',
                title: 'Airport Candid',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-closeup-watch-side-glance-aeroplane.webp',
                alt: 'Close-up of Aryan Techie checking watch during airplane travel - time awareness and journey',
                title: 'Time to Fly',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-crowd-selfie-hyperreal-2025.webp',
                alt: 'Aryan Techie caffeinated moment selfie at IIT Patna - energetic student life',
                title: 'Caffeinated Moment',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-duo-plane-travel-look.webp',
                alt: 'Aryan Techie with travel companion on plane - friendship and travel adventures',
                title: 'Travel Duo',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-eyestore-shot.webp',
                alt: 'Aryan Techie at eyewear store trying glasses - fashion and style choices',
                title: 'Reflected Me',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-face-close-hand-cover-style.webp',
                alt: 'Artistic close-up of Aryan Techie with hand covering face - creative portrait photography',
                title: 'Why Not Sweat?',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-finger-candid-friends-aeroplane-flight-2025.webp',
                alt: 'Candid flight moment of Aryan Techie with friends during airplane journey - travel memories',
                title: 'Flight Candid',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-friends-iit-runway.webp',
                alt: 'Aryan Techie with friends at IIT Patna runway area - campus exploration and friendship',
                title: 'Double Vision',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-mirror-photo-eyewear-store.webp',
                alt: 'Mirror selfie of Aryan Techie at eyewear store - shopping and style documentation',
                title: 'Mirror Reflection',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-seated-iit-campus-2025.webp',
                alt: 'Aryan Techie seated portrait at IIT Patna campus - relaxed student life moment',
                title: 'At Campus',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-shirt-mirror-hallway-2025.webp',
                alt: 'Mirror shot of Aryan Techie in hallway - reflection photography and personal style',
                title: 'Captured in Reflection',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-side-light-dramatic-god-text.webp',
                alt: 'Dramatic side lighting portrait of Aryan Techie - cinematic photography and mood',
                title: 'Dramatic Lighting',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-side-mirror-drive-mood.webp',
                alt: 'Aryan Techie reflection in car side mirror during drive - road trip and travel mood',
                title: 'Drive Mode',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-sitting-chilled-indoor-shot.webp',
                alt: 'Relaxed indoor portrait of Aryan Techie sitting calmly - peaceful moments and introspection',
                title: 'IEM',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-sitting-yellow-barrier-iit-campus-2025.webp',
                alt: 'Aryan Techie sitting on yellow barrier at IIT Patna campus - student life and campus paths',
                title: 'Path Ahead',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-smiling-airforce.webp',
                alt: 'Smiling selfie of Aryan Techie with airforce background - positive moments and adventures',
                title: 'A Selfie',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-standing-iit-patna-signboard-2025.webp',
                alt: 'Aryan Techie standing proudly at IIT Patna signboard - academic achievement and institution pride',
                title: 'IIT Patna',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-sunset-walk-flyover-view.webp',
                alt: 'Aryan Techie sunset walk with flyover view - golden hour stroll and urban landscape',
                title: 'Sunset Walk',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-upward-look-palm-tree-vibe-iit.webp',
                alt: 'Aryan Techie looking upward at palm trees on IIT campus - contemplative moment and nature connection',
                title: 'Looking Up',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-white-shirt-mirror-cleanlook.webp',
                alt: 'Clean mirror selfie of Aryan Techie in white shirt - minimalist style and professional look',
                title: 'Clean Look',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-window-look-light-contrast-train.webp',
                alt: 'Aryan Techie looking out train window with dramatic lighting contrast - journey and reflection',
                title: 'Train Journey',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-with-friend-airforce-plane-2025.webp',
                alt: 'Aryan Techie with close friend near airforce plane - brotherhood and shared adventures',
                title: 'Broski',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-with-friend-winter-2024.jpg.webp',
                alt: 'Aryan Techie with friend Mr. Ninad during winter - friendship and seasonal moments',
                title: 'With Mr. Ninad',
                year: '2024'
            },
            // New 2025 Photos
            {
                src: '/images/gallery/aryan-jangra-aroice-portrait-2025.webp',
                alt: 'Professional portrait of Aryan Jangra (Aroice) at cafe - indie creator and developer lifestyle',
                title: 'At Cafe',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-jangra-iit-patna-gate-2025.webp',
                alt: 'Aryan Jangra at IIT Patna main entrance gate - proud student moment at prestigious institution',
                title: 'IIT Patna Gateway',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-airport-window-travel-2025.webp',
                alt: 'Aryan Techie gazing through airport window during travel - wanderlust and journey anticipation',
                title: 'Travel Time',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-bonfire-warm-tones-2025.webp',
                alt: 'Aryan Techie enjoying warm bonfire evening - cozy moments and outdoor gathering',
                title: 'Bonfire Nights',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-campus-lawn-portrait-2025.webp',
                alt: 'Aryan Techie lost in thought on IIT Patna campus lawn - contemplative student life',
                title: 'Lost in Thought',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-colorful-selfie-2025.webp',
                alt: 'Vibrant colorful selfie of Aryan Techie - creative photography and artistic expression',
                title: 'Colorful Vibes',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-creative-edit-double-exposure-2025.webp',
                alt: 'Creative double exposure artistic edit of Aryan Techie - experimental photography and design',
                title: 'Artcover',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-dev-terminal-notes-2025.webp',
                alt: 'Aryan Techie developer terminal with memento mori philosophy - coding life and mortality reflection',
                title: 'Memento Mori',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-developer-gym-mirror-2025.webp',
                alt: 'Aryan Techie developer lifestyle gym mirror shot - fitness and coding balance',
                title: 'GYM Time',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-developer-vibes-gym-2025.webp',
                alt: 'Aryan Techie at gym maintaining developer fitness routine - healthy lifestyle and wellness',
                title: 'At GYM',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-empty-road-night-aesthetic-2025.webp',
                alt: 'Aesthetic night view of empty road captured by Aryan Techie - solitude and peaceful moments',
                title: 'Night Road',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-evening-light-2025.webp',
                alt: 'Beautiful evening light portrait of Aryan Techie during handshake moment - golden hour networking',
                title: 'The Handshake',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-hand-holding-rose-2025.webp',
                alt: 'Cinematic shot of Aryan Techie hand holding red rose - romantic and artistic photography',
                title: 'Cinematic Rose',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-headshot-glasses-2025.webp',
                alt: 'Professional headshot of Aryan Techie with glasses - weather or me contemplation and introspection',
                title: 'Weather or Me?',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-mirror-selfie-aroice-2025.webp',
                alt: 'Mirror selfie by Aryan Techie showcasing Aroice brand - personal branding and reflection',
                title: 'Mirror Reflection',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-monochrome-portrait-art-2025.webp',
                alt: 'Artistic monochrome portrait of Aryan Techie - black and white photography and mood',
                title: 'Monochrome Art',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-moody-road-trees-2025.webp',
                alt: 'Moody atmospheric road surrounded by trees captured by Aryan Techie - nature and solitude',
                title: 'Moody Path',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-phone-screenshot-notes-2025.webp',
                alt: 'Aryan Techie phone screenshot capturing weather notes from July - daily life documentation',
                title: 'A Day in July',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-plane-wing-flight-above-clouds-2025.webp',
                alt: 'Airplane wing view above clouds captured by Aryan Techie during flight - travel and perspective',
                title: 'Above the Clouds',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-quote-moment-1-2025.webp',
                alt: 'Aryan Techie inspirational quote moment - philosophical reflection and life questioning',
                title: 'Really??',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-shadow-walking-topdown-2025.webp',
                alt: 'Top-down view of Aryan Techie walking shadow with shoes visible - artistic perspective and movement',
                title: 'Shoes & Shadow',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-silhouette-campus-2025.webp',
                alt: 'Silhouette of Aryan Techie on IIT Patna campus - dramatic lighting and student life',
                title: 'Campus Silhouette',
                year: '2025'
            },
            {
                src: '/images/gallery/aryan-techie-sunset-shadow-art-2025.webp',
                alt: 'Artistic sunset shadow composition of Aryan Techie during evening walk - golden hour photography',
                title: 'Sunset Walk',
                year: '2024'
            },
            {
                src: '/images/gallery/aryan-techie-video-editing-workflow-2025.webp',
                alt: 'Aryan Techie video editing workflow setup for creative content production - digital creativity process',
                title: 'Creative Workflow',
                year: '2025'
            },
            {
                src: '/images/gallery/memento-mori-aryantechie-cal.webp',
                alt: 'Memento mori calendar philosophy reflection by Aryan Techie - existential moment and time awareness',
                title: 'The Quote',
                year: '2025'
            },
            {
                src: '/images/gallery/memory-in-motion-1-2025.webp',
                alt: 'Memory in motion series part 1 by Aryan Techie - abstract photography and temporal art',
                title: 'Memory in Motion I',
                year: '2025'
            },
            {
                src: '/images/gallery/memory-in-motion-2-2025.webp',
                alt: 'Memory in motion series part 2 by Aryan Techie - experimental photography and movement',
                title: 'Memory in Motion II',
                year: '2025'
            },
            {
                src: '/images/gallery/memory-in-motion-3-2025.webp',
                alt: 'Memory in motion series part 3 by Aryan Techie - artistic expression and time capture',
                title: 'Memory in Motion III',
                year: '2025'
            },
            {
                src: '/images/gallery/memory-in-motion-4-2025.webp',
                alt: 'Memory in motion series part 4 by Aryan Techie - final piece of temporal photography series',
                title: 'Memory in Motion IV',
                year: '2025'
            },

            {
                src: '/images/gallery/me-into-the-book.webp',
                alt: 'Aryan Techie completely absorbed reading book - deep focus and intellectual pursuit',
                title: 'Me Into the Book',
                year: '2024'
            },

            {
                src: '/images/gallery/white-nights.png',
                alt: 'White nights during flight captured by Aryan Techie - ethereal travel moments and sky views',
                title: 'White Nights',
                year: '2025'
            },

            {
                src: '/images/gallery/high-in-the-sky.png',
                alt: 'High altitude sky view above clouds by Aryan Techie - aerial perspective and freedom',
                title: 'Above the Clouds',
                year: '2025'
            },

            {
                src: '/images/gallery/at-cafe-zero-to-one-tea.jpg',
                alt: 'Aryan Techie at IIT Patna cafe enjoying zero to one tea - student life and caffeine culture',
                title: 'Zero To Tea',
                year: '2025'
            },
            
            {
                src: '/images/gallery/pastery-cafe-iit.jpg',
                alt: 'Delicious pastry at IIT Patna cafe enjoyed by Aryan Techie - campus food culture and study breaks',
                title: 'Pastry',
                year: '2025'
            },




  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
