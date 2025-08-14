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
  username: "Maxwell Chaves",
  title: "Hi all, I'm Max",
  subTitle: emoji(
    "Android Software Developer 🚀 having +6 years of experience building Mobile applications with Kotlin, delivered more than 200 thousand in profit to companies"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/maxDevAndroid",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "maxwellbezerra112233@gmail.com",
  gitlab: "https://stackoverflow.com/users/14865889/maxdevandroid",
  medium: "https://medium.com/@maxwellbezerra112233",
  stackoverflow: "https://stackoverflow.com/users/10422806/maxDevAndroid",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ANDROID DEVELOPER WHO WANTS TO EXPLORE ANDROID WORLD",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your mobile applications"
    ),
    emoji("⚡ Delivering robust and scalable applications"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / GIT")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  /* Make Sure to include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fas fa-code" // não existe ícone oficial no FA, usando "code" como genérico
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "SQLite / SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Estacio",
      logo: require("./assets/images/estacioLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "July 2020 - December 2024",
      desc: "Participated in the research and creating local application to help thousand people.",
      descBullets: ["", ""]
    },
    {
      schoolName: "Udemy",
      logo: require("./assets/images/udemyLogo.png"),
      subHeader: "Mobile Penetration Testing of Android Applications",
      duration: "September 2022 - December 2022",
      desc: "Audit or perform penetration tests agains Android applications",
      descBullets: [
        "Real world attacks on Android Devices and Apps",
        "Certification Pinning bypass for most of Android Apps",
        "Explore OWASP Top Ten Mobile and Web most common vulnerabilities",
        "Android Malware Analysis"
      ]
    },

    {
      schoolName: "Udemy",
      logo: require("./assets/images/udemyLogo.png"),
      subHeader: "Android TDD Masterclass - Coroutines, Jetpack",
      duration: "January 2021 - February 2021",
      desc: "State-of-the-art Android development by building a real production app.",
      descBullets: [
        "Android 11 application: Kotlin, Coroutines, DI with Hilt, Jetpack Navigation Component, Kotlin Flow, MVVM",
        "Application purely with Outside-In Test Driven Development."
      ]
    },

    {
      schoolName: "Udemy",
      logo: require("./assets/images/udemyLogo.png"),
      subHeader: "Master CI/CD for Android Developers",
      duration: "July 2023 - August 2023",
      desc: "Focus on the development of features, leave the build and distribution to App Center.",
      descBullets: [
        "Track errors and crashes in your apps.",
        "Complete CI/CD flows in your app development process.",
        "App Center to automate checks and protect important branches.",
        "Automatically create builds on every merge.",
        "Automate the distribution of new releases to the Google app store.",
        "Improve teamwork with automatic builds and checks that improve the quality of your merges."
      ]
    },

    {
      schoolName: "Udemy",
      logo: require("./assets/images/udemyLogo.png"),
      subHeader: "Jetpack Compose Crash Course for Android with Kotlin",
      duration: "October 2023 - November 2023",
      desc: "Modern Android apps with Jetpack Compose and integrations.",
      descBullets: [
        "How to create Android UI and layouts directly in code with Kotlin",
        "Modern Declarative way of creating UI in Android",
        "Use Compose with other Jetpack libraries: ViewModel, Navigation, LiveData",
        "Use Compose with other popular libraries: Coroutines, Retrofit",
        "Integrate Compose in a MVVM architecture",
        "Create beautiful animations with Jetpack Compose"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
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
      role: "Software Engineer",
      company: "TriVisionTech",
      companylogo: require("./assets/images/trivisiontechLogo.png"),
      date: "December 2024 – Present",
      desc: "",
      descBullets: [
        "I work on developing scalable, modern, and user-centric solutions, focusing on the river transportation sector and digital ticket sales.",
        "I am responsible for the entire architecture of Android applications, leveraging Kotlin, Jetpack Compose, Kotlin Multiplatform (KMP), and patterns such as MVVM and Clean Architecture.",
        "My responsibilities include creating and maintaining features, implementing automated tests, ensuring end-to-end encryption, handling cross-platform error management, and integrating payment flows via Pix, bank slip, and credit card.",
        "Beyond the technical scope, I also lead daily stand-ups, organize tasks using agile methodologies (Scrum/Kanban), align deliveries with the company’s strategic goals, and contribute directly to the product’s growth and the enhancement of the user experience."
      ]
    },
    {
      role: "Software Engineer",
      company: "Instituto Atlantico",
      companylogo: require("./assets/images/iaLogo.png"),
      date: "May 2021 - November 2024",
      desc: "",
      descBullets: [
        "Developed and maintained scalable Android applications for the international market using Kotlin, Jetpack Compose, and the MVVM architectural pattern.",
        "Collaborated with global cross-functional teams, participated in code reviews, and led daily meetings using agile methodologies such as Scrum and Kanban.",
        "Conducted research and development of technical solutions tailored for international companies, contributing to innovation and competitive advantage.",
        "Implemented modular and reusable architectures, including Clean Architecture, to ensure long-term maintainability and code quality."
      ]
    },
    {
      role: "Software Engineer",
      company: "AtlasTech",
      companylogo: require("./assets/images/atlastechLogo.png"),
      date: "January 2020 - May 2021",
      desc: "",
      descBullets: [
        "Contributed to the maintenance and development of new features for e-commerce applications, enhancing performance and user experience.",
        "Utilized Firebase, Retrofit, and Room to manage data storage, synchronization, and server communication efficiently.",
        "Supported the development of Android applications across multiple sectors, including e-commerce and fintech, using Kotlin and the MVVM architectural pattern."
      ]
    },
    {
      role: "Support T.I",
      company: "I.E.N.S.F",
      companylogo: require("./assets/images/iensfLogo.png"),
      date: "February 2018 - January 2020",
      desc: "",
      descBullets: [
        "Performed preventive and corrective maintenance on systems and computers to ensure operational stability and minimize downtime.",
        "Administered local networks, managing configuration, monitoring performance, and resolving connectivity issues.",
        "Configured and secured machines, applying best practices for system protection and data integrity."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
      title: "Winner HackInRio",
      subtitle: "First tourism cluster winner .",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "HackInRio Code-In Logo",
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
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
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
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
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
      slides_url: "https://bit.ly/",
      event_url: "https://www.facebook.com/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
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
  number: "+55-97984449986",
  email_address: "maxwellbezerra112233@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
