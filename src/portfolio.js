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
  username: "Abhinav Arabelly",
  title: "Hi all, I'm Abhinav",
  subTitle: emoji(
    "Passionate about AI, ML, and LLMs 🚀 with hands-on experience designing scalable data/ML systems, building Retrieval-Augmented Generation (RAG) pipelines, and fine-tuning LLMs on high-performance GPU clusters."
  ),
  resumeLink: "/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Abhi-2809",
  linkedin: "https://www.linkedin.com/in/arabellyabhinav/",
  gmail: "arabellyabhinav28@gmail.com",
  medium: "https://medium.com/@arabellyabhinav28",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  // subTitle: "LLM Engineer | Data-Centric ML | MLOps",
  skills: [
    "Programming & ML: Python, SQL, R, C++, PyTorch, TensorFlow, Transformers, CNN, XGBoost, LightGBM, Pandas, Numpy, Tableau, Matplotlib, Regression, scikit-learn",
    "LLMs & NLP: LLMs, RAG, Agentic Frameworks, FAISS, ChromaDB, Hugging Face, SpeechBrain",
    "Cloud & MLOps: AWS, GCP, Spark, Kafka, Hadoop, BigQuery, Databricks, Docker, MLflow, FastAPI, Airbyte, Snowflake, DBT"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "pytorch", fontAwesomeClassname: "fas fa-fire"},
    {skillName: "tensorflow", fontAwesomeClassname: "fas fa-project-diagram"},
    {skillName: "transformers", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "sql-database", fontAwesomeClassname: "fas fa-database"},
    {skillName: "aws", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "gcp", fontAwesomeClassname: "fas fa-cloud"},
    {skillName: "spark", fontAwesomeClassname: "fas fa-bolt"},
    {skillName: "kafka", fontAwesomeClassname: "fas fa-stream"},
    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "mlflow", fontAwesomeClassname: "fas fa-chart-line"},
    {skillName: "fastapi", fontAwesomeClassname: "fas fa-paper-plane"},
    {skillName: "reactjs", fontAwesomeClassname: "fab fa-react"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Wisconsin - Madison",
      logo: require("./assets/images/uwm.jpeg"),
      subHeader: "Master of Science in Data Science",
      duration: "August 2023 - May 2025"
      // desc: "Graduate coursework and research in statistical modeling, big data systems, algorithms, and data visualization.",
      // descBullets: [
      //   "Courses: Statistical Models, Big Data Systems, Data Structures, Algorithms, Data Management, Data Visualization"
      // ]
    },
    {
      schoolName: "Birla Institute of Technology and Science (BITS), Pilani",
      logo: require("./assets/images/bits.jpeg"),
      subHeader:
        "Integrated MSc. Mathematics and B.E. Electronics and Communication",
      duration: "August 2018 - May 2023"
      //desc: "Interdisciplinary training across mathematics and embedded systems with a focus on ML fundamentals.",
      // descBullets: [
      //   "Courses:  Machine Learning, Artificial Intelligence, Object Oriented Programming, Optimisation, Operating Systems"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to false to hide Proficiency Section
  experience: [],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Engineer Intern",
      company: "Flywl - Cloud Marketplace Startup",
      companylogo: require("./assets/images/flywl.jpeg"),
      date: "June 2025 – Present",
      desc: "California, USA",
      descBullets: [
        "Designed a scalable system to normalize and assign unique IDs to 77K+ cloud products across marketplaces, enabling consistent cross-platform mapping.",
        "Engineered RAG pipeline using ChromaDB, OpenAI APIs to index 35K+ product documents, reducing internal query time by 90%.",
        "Built full-stack web app (React, Flask) with fuzzy search and autosuggest, boosting product matching accuracy by 40%."
      ]
    },
    {
      role: "AI Research Engineer",
      company: "Wisconsin Institute for Discovery",
      companylogo: require("./assets/images/wid.jpeg"),
      date: "Jan 2024 – June 2025",
      desc: "Wisconsin, USA",
      bannerColor: "#1d4ed8", // pick your blue
      companyTextColor: "#ffffff",
      descBullets: [
        "Developed task-specific data selection strategies (Uncertainty, Clustering) to identify most informative data points",
        "Performed Supervised fine-tuning of LLM- LLaMA-2 on 100K+ samples leveraging CUDA GPUs (HPC)",
        "Achieved significant reduction of 80% in training data requirement, cutting down on annotation and training costs",
        "Evaluated performance using AlpacaEval (LLM-based evaluation tool), outperforming baseline in 53% of test cases",
        "Conducted Hypothesis testing to validate task wise data selection substantially improves model performance"
      ]
    },
    {
      role: "AI/ML Engineer",
      company: "Asurion / Synechron Technologies",
      companylogo: require("./assets/images/synechron.jpeg"),
      date: "Jan 2023 – June 2023",
      desc: "Bangalore, India",
      descBullets: [
        "Fine-tuned LLMs on 30K+ customer support chats to build Gen-AI powered troubleshooting assistant for tech queries",
        "Streamlined preprocessing pipeline for transcripts, reducing formatting time by 33% through vectorized and regex ops",
        "Conducted Exploratory Data Analysis (EDA) on 500K+ mobile insurance records to uncover root causes behind declining conversion rates using SQL and Python.",
        "Collaborated with cross-functional teams to deliver data-driven actionable insights on afternoon peak-hour sales losses, where high call volume and customer propensity was combined with low-performing agents",
        "Designed agent allocation rebalancing strategy, forecasting ~$1.5M sales improvement via simulation testing"
      ]
    },
    {
      role: "AI/ML Intern",
      company: "Nanyang Technological University (NTU)",
      companylogo: require("./assets/images/ntu.png"),
      date: "Aug 2022 – Dec 2022",
      desc: "Singapore",
      bannerColor: "#1f2a44",
      descBullets: [
        "Developed a robust end-to-end Neural Speaker Diarization (EEND) system leveraging SpeechBrain and Python",
        "Integrated CNN-based feature encoder, and fine-tuned WavLM Transformer encoder, on speech dataset (20+ hours)",
        "Achieved 5% reduction in the Diarization Error Rate (DER) for above real life dataset"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Hide default pinned repos section
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "Select open-source and applied work",
  projects: [
    {
      image: require("./assets/images/data.png"),
      projectName: "ChatGPT Student Survey Analysis",
      projectDesc:
        "Data analysis exploring student perceptions of ChatGPT in education, skills, and workforce.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/Abhi-2809/ChatGPT_Impact_on_Education_Data_Analysis"
        }
      ]
    },
    {
      image: require("./assets/images/summarisation.jpeg"),
      projectName: "YAKE Extractive Summary",
      projectDesc:
        "Python implementation to generate extractive summaries using YAKE keywords.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/Abhi-2809/YAKE-Extractive-Summary"
        }
      ]
    },
    {
      image: require("./assets/images/llm.jpeg"),
      projectName: "Math Word Problem Generation",
      projectDesc:
        "Generation of Math Word Problems (MWP) based on difficulty level and topic",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/Abhi-2809/MWP-generation"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section -> repurposed as Publications

const achievementSection = {
  title: emoji("Publications 📝"),
  subtitle: "Peer-reviewed and preprint",

  achievementsCards: [
    {
      title:
        "Improving Task Diversity in Label Efficient Supervised Finetuning of LLMs",
      subtitle:
        "EMNLP 2025. Abhinav Arabelly*, Jagrut Nemade*, Jifan Zhang, Robert D. Nowak.",
      image: require("./assets/images/emnlp.png"),
      imageAlt: "Publication",
      footerLink: [
        {
          name: "arXiv",
          url: "https://arxiv.org/abs/2507.21482"
        }
      ]
    },
    {
      title:
        "Automatic Generation of Math Word Problems for Assessing Learner Skills in Adaptive Learning Systems",
      subtitle:
        "Proceedings of the International Conference on Best Innovative Teaching Strategies (ICON-BITS 2021).",
      image: require("./assets/images/ssrn.png"),
      imageAlt: "Publication",
      footerLink: [
        {
          name: "ssrn",
          url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4027405"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Writing on data-centric AI and education analytics",
  displayMediumBlogs: "false", // Display hardcoded blogs
  blogs: [
    {
      url: "https://medium.com/@arabellyabhinav28/what-students-really-think-about-chatgpt-a-data-driven-analysis-of-chatgpts-impact-in-education-2a13da7f64c9",
      title: "What Students Really Think About ChatGPT: A Data-Driven Analysis",
      description:
        "Exploring student perceptions of ChatGPT in education using survey data and statistical analysis."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [],
  display: false // Hide talks
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Hide podcast
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
  subtitle: "Discuss a project or just want to say hi? My inbox is open.",
  number: "+1 (608) 298-8385",
  email_address: "arabellyabhinav28@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false // Hide twitter section
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
