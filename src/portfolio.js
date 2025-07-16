/* Portfolio Configuration File for Haider Ali */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Haider Ali",
  title: "Hi all, I'm Haider",
  subTitle: emoji(
    "Full Stack Application Developer | Flutter & Node.js | AI-Driven & Scalable App Integration | Native and Hybrid Application Development | MVVM and Clean Architecture | SOLID Principles and Design Patterns | API Integration | State Management (BloC and Provider) | Navigation and Routing Techniques | Animations | OOP and Functional Programming | Database (SQL, SQLite, Shared Preferences, Firebase) | CI/CD | Deployment"
  ),
  resumeLink: "",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/HaiderAli228",
  linkedin: "https://www.linkedin.com/in/haiderali228/",
  gmail: "flutter2830@gmail.com",
  medium: "https://medium.com/@haiderali228",
  stackoverflow: "https://stackoverflow.com/users/27008503/haider-ali",
  leetcode: "https://leetcode.com/u/Haider-228/",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "EXPERIENCED FLUTTER DEVELOPER FOCUSED ON BUILDING MODERN, SCALABLE MOBILE APPS",
  skills: [
    emoji("⚡ Cross-platform mobile app development using Flutter and Dart for Android and iOS"),
    emoji("⚡ MVVM architecture, RESTful APIs, Firebase integration, and robust debugging skills"),
    emoji("⚡ Deep understanding of state management (Provider, BloC), UI/UX design, and CI/CD"),
    emoji("⚡ Experience with AI APIs (Gemini, Claude, MidJourney) and LangChain-style optimization techniques"),
    emoji("⚡ Designed and deployed scalable apps using SOLID principles and modular OOP architecture")
  ],
  softwareSkills: [
    { skillName: "Flutter", fontAwesomeClassname: "fas fa-mobile-alt" },
    { skillName: "Dart", fontAwesomeClassname: "fab fa-code" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Kotlin", fontAwesomeClassname: "fab fa-android" },
    { skillName: "C", fontAwesomeClassname: "fas fa-copyright" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code-branch" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Supabase", fontAwesomeClassname: "fas fa-server" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "SQLite", fontAwesomeClassname: "fas fa-database" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Postman", fontAwesomeClassname: "fas fa-vial" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "Figma", fontAwesomeClassname: "fab fa-figma" },
    { skillName: "VS Code", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Android Studio", fontAwesomeClassname: "fas fa-laptop-code" }
  ],
  display: true
};


const educationInfo = {
  display: true,
  schools: [
   {
      schoolName: "Government College University Faisalabad",
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2021 – 2025",
      desc: "Gained a solid foundation in Data Structures, Algorithms, Object-Oriented Programming, Operating Systems, and Database Management Systems through academic coursework and hands-on projects.",
      descBullets: [
        "Completed a semester project integrating web development with artificial intelligence for intelligent content delivery.",
        "Led a team project in the 7th semester to build 'Library' – an educational mobile app using Flutter, which gained real-time student adoption and demonstrated full-stack app deployment skills.",
        "Developing a capstone Final Year Project (TripCompass) in the 8th semester – a cross-platform AI-powered travel planner with offline-first support, GeoFencing alerts, and voice-based itinerary assistance for tourists."
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Flutter & Dart", progressPercentage: "90%" },
    { Stack: "API Integration & Backend", progressPercentage: "80%" },
    { Stack: "UI/UX & Animation", progressPercentage: "85%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Flutter Trainer & Mentor",
      company: "NAVTTC",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Jan 2025 – Present",
      desc: "Mentoring students in mobile app development using Flutter, Dart, and Firebase. Responsible for planning and delivering hands-on sessions, designing practical projects, and guiding students through MVVM architecture, API integration, and deployment best practices."
    },
    {
      role: "Flutter Developer Intern",
      company: "TechloSet Solution",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Sep 2024 – Mar 2024",
      desc: "Worked on real-world client projects, integrating third-party APIs and optimizing mobile applications for better performance. Contributed to the UI/UX development of commercial apps, implemented state management using Provider and BloC, resolved major bugs through in-depth debugging, worked with RESTful services and Google APIs, participated in daily stand-ups and code reviews."
    },
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "My Projects",
  subtitle: "FEATURED APPLICATIONS I'VE DEVELOPED",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Library – Educational App",
      projectDesc: "Student study material app with Gemini AI, YouTube API, Google APIs, and state persistence using MVVM and Provider.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HaiderAli228/Library---Your-Study-Partner" },
        { name: "Download APK", url: "https://github.com/HaiderAli228/Library---Your-Study-Partner/releases/download/v1.0.0/LibraryYourStudyCompanion.apk" }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "MindMap – Thought Organizer",
      projectDesc: "Idea management platform using Flutter, MySQL, caching, and MVVM.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HaiderAli228/MindMap-Thought-Organizer" }
        { name: "Download APK", url: "https://github.com/HaiderAli228/MindMap---APK/releases/download/v1.1.0/MindMap-app-release.apk" }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "NueraTalk – AI Chatbot",
      projectDesc: "Chatbot app with Gemini API integration and MySQL for real-time chat.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HaiderAli228/NueraTalk--AI-Chatbot" }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "SnapSense – AI Image Generator",
      projectDesc: "Image generation app powered by MidJourney API and Bloc state management.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HaiderAli228/SnapSense--AI-Image-generator" }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "GiveHope – Donation App",
      projectDesc: "Flutter app for donation management with backend integration.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HaiderAli228/GiveHope-Donation-App" }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "OrderFood – Restaurant App",
      projectDesc: "Restaurant order management app using Flutter.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HaiderAli228/OrderFood---RestaurantApp" }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "News App",
      projectDesc: "News application built with Flutter and news APIs.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HaiderAli228/News-App" }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle: "Some notable accomplishments and recognitions in my journey so far:",
  achievementsCards: [
    {
      title: "Prompt Engineering",
      subtitle: "Successfully completed the Prompt Engineering course from Great Learning Academy in November 2024.",
      image: require("./assets/images/certification.png"),
      imageAlt: "Prompt Engineering",
      footerLink: []
    },
    {
      title: "Kotlin Programming",
      subtitle: "Completed Kotlin course on SoloLearn in February 2023, building a strong foundation in Android basics.",
      image: require("./assets/images/certification.png"),
      imageAlt: "Kotlin Course",
      footerLink: []
    },
    {
      title: "Course: Tech for Everyone",
      subtitle: "Completed foundational tech literacy training covering digital tools, programming basics, and future trends.",
      image: require("./assets/images/certification.png"),
      imageAlt: "Tech Course",
      footerLink: []
    },
    {
      title: "Meta Hacker Cup Participant",
      subtitle: "Participated in the Meta (Facebook) Hacker Cup Hackathon, solving algorithmic problems in competitive programming.",
      image: require("./assets/images/hackathon.png"),
      imageAlt: "Meta Hacker Cup",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "I share knowledge to empower developers and simplify complex concepts.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://medium.com/@haiderali228/five-standout-project-ideas-for-a-resume-e040fba3f7f5",
      title: "5 Standout Project Ideas for a Resume",
      description: "Explore creative and impactful project ideas tailored to impress employers and demonstrate real-world coding experience."
    },
    {
      url: "https://www.linkedin.com/pulse/alert-flutter-developers-fixing-gradle-conflict-issue-haider-ali-zl5jc/",
      title: "Fixing Gradle Conflict Issue in Flutter",
      description: "A detailed and beginner-friendly guide to resolving the Gradle plugin version issue in Flutter projects – a must-read for all new developers."
    }
  ],
  display: true
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE THROUGH TECH TALKS"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Guest and tech discussion episodes.",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my complete resume for more details",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to discuss a project or just say hi? My inbox is open!",
  number: "+92-349-6292972",
  email_address: "flutter2830@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
