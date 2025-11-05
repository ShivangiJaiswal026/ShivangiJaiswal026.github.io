/* Shivangi Jaiswal – Android Developer Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = { animated: true };

const greeting = {
  username: "Shivangi Jaiswal",
  title: "Hi there 👋 I'm Shivangi",
  subTitle: emoji(
    "An Android Engineer skilled in Kotlin, Java, and Jetpack Compose. I build scalable, secure, and user-focused mobile apps using clean architecture and modern Android practices."
  ),
  resumeLink: "https://www.linkedin.com/in/shivangicodes/",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/ShivangiJaiswal026",
  linkedin: "https://www.linkedin.com/in/shivangicodes/",
  gmail: "shivangijaiswal26@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle:
    "Android Developer focused on performance, design, and scalable architecture",
  skills: [
    emoji("⚡ Develop modern Android apps using Kotlin, Jetpack Compose & MVVM"),
    emoji("⚡ Integrate REST, GraphQL & gRPC APIs with secure authentication"),
    emoji("⚡ Optimize app performance, caching, and CI/CD pipelines"),
    emoji("⚡ Mentor juniors and advocate modern Android practices")
  ],
  softwareSkills: [
    { skillName: "Kotlin", fontAwesomeClassname: "fab fa-android" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Jetpack Compose", fontAwesomeClassname: "fas fa-mobile-alt" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Retrofit", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Room DB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MVVM", fontAwesomeClassname: "fas fa-cubes" },
    { skillName: "CI/CD", fontAwesomeClassname: "fas fa-code-branch" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Madan Mohan Malaviya University of Technology",
      subHeader: "B.Tech in Electronics & Communication Engineering",
      duration: "2016 – 2020 | 82.2%",
      desc: "Active in IEEE, Robotics Club, and led multiple tech committees."
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Android Development", progressPercentage: "90%" },
    { Stack: "Architecture & APIs", progressPercentage: "80%" },
    { Stack: "UI/UX & Performance", progressPercentage: "85%" }
  ]
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Development Engineer 3",
      company: "Suki AI",
      date: "Sept 2022 – Present",
      desc: "Built AI-powered Android modules with Kotlin and Jetpack Compose, optimized gRPC audio streaming, improved security via Android Keystore, and automated CI/CD using Buildkite."
    },
    {
      role: "Software Development Engineer",
      company: "Hummingwave Technologies",
      date: "Sept 2020 – Sept 2022",
      desc: "Developed 20+ Android apps across FinTech, EdTech, and Retail using MVVM, Room, and Retrofit; delivered scalable modular architectures and improved efficiency by 40%."
    },
    {
      role: "Operations Intern",
      company: "Delhi Metro Rail Corporation (DMRC)",
      date: "May 2019 – July 2019",
      desc: "Worked with zone controllers to analyze operational circuits and optimize train scheduling and monitoring."
    }
  ]
};

// Big Projects
const bigProjects = {
  title: "Projects",
  subtitle: "Selected apps published on Play Store",
  projects: [
    {
      image: require("./assets/images/androidLogo.png"),
      projectName: "Suki – Digital Assistant for Doctors",
      projectDesc:
        "Voice-enabled AI assistant simplifying medical documentation with real-time transcription and EHR integration.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.suki.suki"
        }
      ]
    },
    {
      image: require("./assets/images/androidLogo.png"),
      projectName: "Yamaha LMS – Merchant & Customer Apps",
      projectDesc:
        "Reward and loyalty apps with QR scanning, ExoPlayer integration, and OTP auto-read.",
      footerLink: [
        {
          name: "Merchant App",
          url: "https://play.google.com/store/apps/details?id=com.yamaha_merchant.genblu"
        },
        {
          name: "Customer App",
          url: "https://play.google.com/store/apps/details?id=com.yamahamotors.genblu"
        }
      ]
    },
    {
      image: require("./assets/images/androidLogo.png"),
      projectName: "Quambio",
      projectDesc:
        "Gamified sustainability app tracking CO₂ reduction using Strava API integration.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=ch.quambio.co2"
        }
      ]
    }
  ],
  display: true
};

// Achievements
const achievementSection = {
  title: emoji("Achievements & Recognitions 🏆"),
  subtitle:
    "Awards, recognitions, and community contributions in Android development",
  achievementsCards: [
    {
      title: "Winner – Suki Internal Hackathon",
      subtitle: "People’s Choice Award for innovative Android solution."
    },
    {
      title: "LinkedIn Top Voice",
      subtitle:
        "Recognized for sharing insights on Android, software development, and tech community engagement."
    },
    {
      title: "UPCST Project Lead",
      subtitle:
        "Led a project funded by Uttar Pradesh Council of Science and Technology."
    },
    {
      title: "AICTE Merit Scholarship",
      subtitle: "Recipient for 4 consecutive years for academic excellence."
    }
  ],
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to collaborations, Android projects, or just a friendly chat about tech.",
  number: "+91 8004237128",
  email_address: "shivangijaiswal26@gmail.com"
};

// Twitter Section
const twitterDetails = { userName: "", display: false };
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
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable
};