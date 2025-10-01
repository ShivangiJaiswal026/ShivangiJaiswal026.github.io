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
  username: "Asiana Holloway",
  title: "Hi, I'm Asiana",
  subTitle:
    "🎓 Graduate Student in Health Informatics at Michigan Tech\n📌 Passionate about AI in Healthcare | Data-Driven Decision Making | Health Information | Digital Health Innovation\n📍 Based in Houston, TX | 6+ years of experience in healthcare operations",
  resumeLink: "", // Add link later if desired
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AsianaHolloway",
  linkedin: "https://www.linkedin.com/in/asiana-holloway-053985196/",
  gmail: "holloway.asiana@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Technical Skillset",
  subTitle:
    "Equipping digital healthcare innovation with hands-on expertise in data science, intelligent systems, and cloud-powered tools.",
  skills: [
    emoji(
      "⚕️ Build intelligent healthcare apps using AI and machine learning models"
    ),
    emoji(
      "📊 Perform data analysis and visualization using Python, R, and SQL"
    ),
    emoji("📡 Work with IoMT, EHR systems, and healthcare data pipelines"),
    emoji(
      "⚡ Develop data-driven prototypes and APIs using Flask, AWS, and Postman"
    )
  ],
  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "R", fontAwesomeClassname: "fas fa-chart-line"},
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "PyTorch", fontAwesomeClassname: "fas fa-brain"},
    {skillName: "TensorFlow", fontAwesomeClassname: "fas fa-project-diagram"},
    {skillName: "Pandas", fontAwesomeClassname: "fas fa-table"},
    {skillName: "NumPy", fontAwesomeClassname: "fas fa-square-root-alt"},
    {skillName: "Scikit-learn", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "Flask", fontAwesomeClassname: "fas fa-flask"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Jupyter", fontAwesomeClassname: "fas fa-book"},
    {skillName: "Google Colab", fontAwesomeClassname: "fas fa-cloud"},
    {skillName: "AWS Lambda", fontAwesomeClassname: "fas fa-cloud"},
    {skillName: "DynamoDB", fontAwesomeClassname: "fas fa-server"},
    {skillName: "API Gateway", fontAwesomeClassname: "fas fa-plug"}
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Michigan Technological University",
      logo: require("./assets/images/michiganTechLogo.png"),
      subHeader: "Master's in Health Informatics",
      duration: "2023 – Present",
      desc: "College of Computing",
      descBullets: [
        "Specializing in AI in Healthcare and Digital Health Innovation",
        "Graduate coursework in applied computing and healthcare data science",
        "Dean’s List | Expected Graduation: Spring 2026"
      ]
    },
    {
      schoolName: "Tennessee State University",
      logo: require("./assets/images/Seal_transparent.png"),
      subHeader: "Bachelor’s in Business Administration",
      duration: "Graduated 2020",
      desc: "",
      descBullets: [
        "Completed core business courses and participated in student leadership and professional organizations",
        "Dean’s List honoree",
        "Member of National Honor Society",
        "Pledged and initiated into Alpha Kappa Psi (Business Fraternity)"
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
      progressPercentage: "80%"
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
      role: "Referral Services Assistant Senior Lead",
      company: "Carelon MBM",
      companylogo: require("./assets/images/carelon.png"),
      date: "2019 – Present",
      desc: "Carelon Medical Benefits Management (subsidiary of Elevance Health)",
      descBullets: [
        "Provide post-clinical review and utilization management support for healthcare prior authorizations. Verify correct CMS citations and physician rationale, process approvals/denials, and issue determination letters. Cross trained in Post-Acute Care (PAC Medicare) and Durable Medical Equipment (DME) denial processes",
        "6+ years experience in healthcare operations and utilization management",
        "Act as liaison between physicians, healthcare agencies, and insurance providers ensuring accurate and timely decision process",
        "Skilled in reviewing complex clinical documentation for medical necessity"
      ]
    },
    {
      role: "Graduate Course Project",
      company: "Internet of Medical Things",
      companylogo: require("./assets/images/Wellness Wave.png"),
      date: "2024",
      desc: "Graduate course at Michigan Technological University focused on IoT in healthcare. Designed and developed a mobile app called Wellness Wave to track mood and heart rate using Fitbit API and AWS integration.",
      descBullets: [
        "Implemented frontend using Flutter and backend using AWS Lambda, API Gateway, and DynamoDB",
        "Connected wearable IoT devices to cloud-based architecture",
        "Developed features for mood check-ins, heart rate data visualization, and data storage"
      ]
    },
    {
      role: "Graduate Course Project",
      company: "Applied AI in Healthcare",
      companylogo: require("./assets/images/AI_icon.png"),
      date: "2024",
      desc: "Graduate course at Michigan Technological University focused on advanced machine learning and medical imaging.",
      descBullets: [
        "Applied transfer learning and federated learning for medical image classification",
        "Built CNNs for ECG signal classification and chest X-ray analysis for breast cancer detection",
        "Performed preprocessing, model tuning, and evaluation using PyTorch, TensorFlow, and Scikit-learn"
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
  title: "Portfolio Projects",
  subtitle: "Academic and Applied Projects in AI, Healthcare, and Data Science",
  projects: [
    {
      projectName: "WellnessWave - IoMT Wearable Stress App",
      projectDesc:
        "Developed a full-stack mobile app for real-time stress tracking using wearable data.",
      footerLink: [
        {
          name: "View Details",
          url: "https://github.com/AsianaHolloway/WellnessWave-IoMT-App" // You can paste your GitHub link or leave empty
        }
      ]
    },
    {
      projectName: "Predicting Heart Disease Risk – ML Classifier Models",
      projectDesc:
        "Built and compared multiple models to predict heart disease based on patient data.",
      footerLink: [
        {
          name: "View Details",
          url: "https://github.com/AsianaHolloway/Exploring-Machine-Learning-Applications-in-Predicting-Heart-Disease-risk"
        }
      ]
    },
    {
      projectName: "Analyzing Employee Attrition Using Spark and Python",
      projectDesc:
        "Performed distributed data analysis to examine employee attrition trends.",
      footerLink: [
        {
          name: "View Details",
          url: "https://github.com/AsianaHolloway/Analyzing-Employee-Attrition-Using-Spark-and-Python"
        }
      ]
    },
    {
      projectName: "Primary Care Telehealth Visits – Research Collaboration",
      projectDesc:
        "Collaborated with classmates to investigate the use of telehealth in primary care settings.",
      footerLink: [
        {
          name: "View Details",
          url: "https://github.com/AsianaHolloway/Primary-Care-Telehealth-Visits"
        }
      ]
    },
    {
      projectName: "Low Level Differential Diagnostic System",
      projectDesc:
        "A rule-based decision support demo built with python, SQLAlchemy, and Juypter Notebook",
      footerLink: [
        {
          name: "View Details",
          url: "https://github.com/AsianaHolloway/AssignmentDifferentialDiagnostics"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
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
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
      slides_url: "https://bit.ly/saadpasta-slides",
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "holloway.asiana@gmail.com"
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
