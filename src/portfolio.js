/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shivangi Jaiswal",
  title: "Hi there! I am Shivangi",
  subTitle: emoji(
"An Android Engineer skilled in Kotlin, Java, and Jetpack Compose. I build scalable, secure, and user-focused mobile apps using clean architecture and modern Android practices."
),
  resumeLink:
    "https://drive.google.com/file/d/1y1dCB3hzuKByg8ETKbxClDNbS5I3VHnM/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ShivangiJaiswal026",
  linkedin: "https://www.linkedin.com/in/shivangicodes/",
  gmail: "shivangijaiswal26@gmail.com",
  medium: "https://medium.com/@shivangijaiswal_74663",
  stackoverflow: "https://stackoverflow.com/users/19903565/shivangi-jaiswal",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Android Developer focused on performance, design, and scalable architecture",
  skills: [
    emoji(
      "⚡Develop modern Android apps using Kotlin, Jetpack Compose & MVVM"
    ),
    emoji("⚡ Integrate REST, GraphQL & gRPC APIs with secure authentication"),
    emoji(
      "⚡ Optimize app performance, caching, and CI/CD pipelines"
    ),
    emoji("⚡ Mentor juniors and advocate modern Android practices")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "XML",
      fontAwesomeClassname: "fas fa-file"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "SQLite-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-infinity"
    },
    {
      skillName: "Jetpack Compose",
      fontAwesomeClassname: "far fa-hexagon"
    },
    {
      skillName: "JIRA",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "Dropbox",
      fontAwesomeClassname: "fab fa-dropbox"
    },
    {
      skillName: "Intercom",
      fontAwesomeClassname: "fab fa-intercom"
    },
    {
      skillName: "Play Console",
      fontAwesomeClassname: "fab fa-google-play"
    },
    {
      skillName: "Atlassian",
      fontAwesomeClassname: "fab fa-atlassian"
    },
    {
      skillName: "Strava",
      fontAwesomeClassname: "fab fa-strava"
    },
    {
      skillName: "buildkite",
      fontAwesomeClassname: "far fa-map"
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fas fa-circle-nodes"
    },
    {
      skillName: "Pendo",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "gRPC",
      fontAwesomeClassname: "fas fa-code-compare"
    },
    {
      skillName: "Umbraco CMS",
      fontAwesomeClassname: "fab fa-umbraco"
    },
    {
      skillName: "buildkite",
      fontAwesomeClassname: "far fa-map"
    },
    {
      skillName: "buildkite",
      fontAwesomeClassname: "far fa-map"
    },
    {
      skillName: "REST API",
      fontAwesomeClassname: "fas fa-cloud-arrow-up"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Madan Mohan Malaviya University of Technology",
      logo: require("./assets/images/mmmutLogo.png"),
      subHeader: "B.Tech in Electronics & Communication Engineering",
      duration: "2016 – 2020 | 82.2%",
      desc: "Active in IEEE, Robotics Club, and led multiple tech committees.",
      descBullets: [
        "Graduated with Distinction (Honors)"
      ]
    },
    {
      schoolName: "Maharshi Patanjali Vidya Mandir",
      logo: require("./assets/images/mpvmLogo.png"),
      subHeader: "Intermediate",
      duration: "2015",
      desc: "90%",
      descBullets: ["(C.B.S.E.)"]
    }
    ,
    {
      schoolName: "Maharshi Patanjali Vidya Mandir",
      logo: require("./assets/images/mpvmLogo.png"),
      subHeader: "High School",
      duration: "2013",
      desc: "10 C.G.P.A.",
      descBullets: ["(C.B.S.E.)"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Architecture & APIs",
      progressPercentage: "80%"
    },
    {
      Stack: "UI/UX & Performance",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer 3",
      company: "Suki AI",
      companylogo: require("./assets/images/sukiLogo.webp"),
      date: "September 2022 – Present",
      desc: "Built AI-powered Android modules with Kotlin and Jetpack Compose, optimized gRPC audio streaming, improved security via Android Keystore, and automated CI/CD using Buildkite."
    },
    {
      role: "Software Development Engineer",
      company: "Hummingwave Technologies",
      companylogo: require("./assets/images/hummingwaveLogo.png"),
      date: "September 2020 – September 2022",
      desc: "Developed 20+ Android apps across FinTech, EdTech, and Retail using MVVM, Room, and Retrofit; delivered scalable modular architectures and improved efficiency by 40%."
    },
    {
      role: "Operations Intern",
      company: "Delhi Metro Rail Corporation (DMRC)",
      companylogo: require("./assets/images/dmrcLogo.png"),
      date: "May 2019 – July 2019"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};
 
// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/sukiApp.webp"),
      projectName: "Suki",
      projectDesc: "Voice-enabled AI assistant simplifying medical documentation with seamless EHR integration.",
      footerLink: [
        {
          name: "Play Store Link",
          url: "https://play.google.com/store/apps/details?id=com.suki.suki&hl=en_IN"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/genbluMerchant.webp"),
      projectName: "Yamaha Genblu Merchant App",
      projectDesc: "Reward system for Yamaha merchants to manage campaigns and points",
      footerLink: [
        {
          name: "Play Store Link",
          url: "https://play.google.com/store/apps/details?id=com.yamaha_merchant.genblu"
        }
      ]
    },
    {
      image: require("./assets/images/quambio.webp"),
      projectName: "Quambio",
      projectDesc: "Gamified sustainability app that tracks CO₂ reduction through user activities using Strava API integration",
      footerLink: [
        {
          name: "Play Store Link",
          url: "https://play.google.com/store/apps/details?id=ch.quambio.co2"
        }
      ]
    },
    {
      image: require("./assets/images/genbluCustomer.webp"),
      projectName: "Yamaha Genblu Customer App",
      projectDesc: "Loyalty app for Yamaha customers to earn and redeem event points",
      footerLink: [
        {
          name: "Play Store Link",
          url: "https://play.google.com/store/apps/details?id=com.yamahamotors.genblu"
        }
      ]
    },
    {
      image: require("./assets/images/edmi.webp"),
      projectName: "EDMI Electric Meter Reading App",
      projectDesc: "Handheld app for RF-based electric meter readings. Tech: Java, Firebase, RF Communication, IEEE 754, Android SDK",
      footerLink: [
        {
          name: "Play Store Link",
          url: "https://play.google.com/store/apps/details?id=nz.co.edmi.storm.mobile.droid&hl=en_IN"
        }
      ]
    },
    {
      image: require("./assets/images/gusLogo.webp"),
      projectName: "Global University Systems Applications",
      projectDesc: "Multi-university applications (BSBI, Pearl Academy, UPES, MUA) for announcements, events, and webinars.",
      footerLink: [
        {
          name: "BSBI Play Store Link",
          url: "https://play.google.com/store/apps/details?id=com.berlinsbi.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AICTE Merit Scholarship",
      subtitle:
        "First to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/aicte.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Featured on #TheAndroidShow by Google for Gemini AI insights",
      subtitle:
        "Shared perspectives on integrating Gemini AI into Android development and building intelligent, context-aware mobile experiences.",
      image: require("./assets/images/tas.png"),
      footerLink: [
        {
          name: "Watch Video",
          url: "https://www.youtube.com/watch?v=iKTgKGeTRzg&t=1980s"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@SHIVANGIpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/SHIVANGIpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory--from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "shivangijaiswal26@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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