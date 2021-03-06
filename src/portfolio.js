
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Leon Lishenga",
  title: "Hi all, I'm Leon",
  subTitle: emoji("A passionate  Full Stack Developer 🚀 having an experience of building and deploying scalable applications in Spring Boot/ Django / Node Js and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1fExCac0rYixXIjFF_mDRYhzmCN7eFkl0/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/Lishenga",
  linkedin: "https://www.linkedin.com/in/leon-lishenga-881238172/",
  gmail: "lishengaleon@gmail.com",
  gitlab: "https://gitlab.com/lishenga_leon",
  facebook: "https://web.facebook.com/lishenga/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section
const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    // emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java (Spring Boot)",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python (Django)",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PHP (Laravel)",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "no-sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Digital Ocean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fab fa-cubes"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "70%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "99%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",  
      company: "Andela",
      companylogo: require("./assets/images/andela.png"),
      date: "March 2021 – Present",
      desc: "",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "IOT Lead Engineer",   
      company: "Omnivoltaic Energy Solutions",
      companylogo: require("./assets/images/omnivoltaic.png"),
      date: "December 2020 – Present",
      desc: ""
    },
    {
      role: "Technical Writer",   
      company: "Decoded / Africastalking",
      companylogo: require("./assets/images/decoded-logo.svg"),
      date: "December 2020 – Present",
      desc: ""
    },
    {
      role: "IOT Engineer",   
      company: "Omnivoltaic Energy Solutions",
      companylogo: require("./assets/images/omnivoltaic.png"),
      date: "September 2020 – Present",
      desc: ""
    },
    {
      role: "Backend Software Engineer",  
      company: "Dukani",
      companylogo: require("./assets/images/dukani.webp"),
      date: "June 2015 – August 2018",
      desc: ""
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "lishenga", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/expertwriters.png"),
      link: "https://expertsoffice.org/user/login"
    },
    {
      image: require("./assets/images/agrikenya.webp"),
      link: "https://play.google.com/store/apps/details?id=com.aik&hl=en_US"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

// const blogSection = {

//   title: "Blogs",
//   subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

//   blogs: [
//     {
//       url: "https://developers.decoded.africa/how-to-dockerize-django-application/",
//       title: "How to Dockerize a Django Application",
//       description: ""
//     },
//     {
//       url: "https://scotch.io/@adams_okode/building-a-restful-api-service-using-spring-boot",
//       title: "Building a RESTful API service using Spring-boot",
//       description: ""
//     },
//     {
//       url: "https://scotch.io/@adams_okode/spring-boot-on-vs-code444",
//       title: "Spring Boot on VS CODE",
//       description: ""
//     }
//   ]
// };

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "IoT In the Wild",
      subtitle: "ALU African Industrial Internet Programme 2019 - Guest Speaker Session",
      slides_url: "https://www.youtube.com/watch?v=ZWnzLzTk1EQ",
      event_url: "https://www.youtube.com/watch?v=ZWnzLzTk1EQ"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  // Please Provide with Your Podcast embeded Link
  podcast: [""]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+254791172530",
  email_address: "lishengaleon@gmail.com"
};

//Twitter Section

const twitterDetails = {
  userName : "lishenga_l"//Replace "twitter" with your twitter username without @
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, talkSection, podcastSection, contactInfo , twitterDetails};
