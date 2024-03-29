/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abhinav's Portfolio",
  description:
    "I am a Frontend developer with 2 years of  industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with ReactJS.",
  og: {
    title: "Abhinav Portfolio",
    type: "website",
    url: "https://www.linkedin.com/in/abhinav-kumar-8b4355154/",
  },
};

//Home Page
const greeting = {
  title: "Abhinav kumar",
  logo_name: "Abhinav kumar",
  subTitle:
    "Full-Stack Web Developer & DevOps Enthusiast || Versatile Full-Stack Web Developer with DevOps Expertise - 3.5 Years of End-to-End Web Solutions || Proficient in React, Node.js, and Diverse JavaScript Frameworks",
  resumeLink:
    "https://drive.google.com/file/d/1SacrN0ie5dYaxhXl9jvbFk3RJie-IbRX/view?usp=sharing",
  portfolio_repository: "https://github.com/AbhinavK98",
  githubProfile: "https://github.com/AbhinavK98",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/AbhinavK98",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/abhinavshaindilya94/",
    fontAwesomeIcon: "fa-brands fa-free-code-camp", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#0A0A23", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "HackerRank",
    link: "https://www.hackerrank.com/abhinavshaindil1?hr_r=1",
    fontAwesomeIcon: "fa-brands fa-hackerrank", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#00EA64", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhinav-kumar-8b4355154/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Medium",
    link: "https://www.linkedin.com/in/abhinav-kumar-8b4355154/",
    fontAwesomeIcon: "fa-brands fa-medium", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:abhinavshaindilya94@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Abhinav95970320",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/__abhiandnow__/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Front-End Development",
      fileName: "FullStackImg",
      skills: [
        "➡️Worked as Front-end developer on custom MES application which helps user to manage the performance of entire manufacturing operation in real time.",

        "➡️ Worked on Planning and designing on the structure of new features in web application.Developed new features  which helped operator to manage label template and printer on front end with different functionality.",

        "➡️Worked on Optimization of web pages. Increased Performance by 20 % for maximum speed and boost their scalability using different React optimization techniques,JavaScript and Database indexing.",

        "➡️Integrated RESTful APIs to dynamically fetch and display content on web pages, enhancing user experience with real-time data and interactive features.",

        "➡️ Testing of websites during the development process for usability and fixing bugs.Implemented Jest for comprehensive testing, enhancing code quality and reliability, which contributed to a more robust and error-resistant MES application.",

        "➡️Handling Production,SIT,UAT Deployment of new feature and enhancement once in a week on DevOps.",

        "➡️ Supervision and Maintenance of production sites.",

        "➡️ Orchestrated the migration of our high-volume print server from on-premises to cloud infrastructure, handling over 5,000 daily print jobs, which led to a 50% reduction in system issues and a marked decrease in support tickets, thereby boosting the MES application’s operational efficiency and reliability",

        "➡️ Engineered and maintained robust AWS cloud infrastructure to support Manufacturing Execution System (MES) applications, ensuring high availability and scalability.",

        "➡️ Implemented Jenkins pipelines to facilitate continuous integration and delivery, streamlining code integration and deployment cycles.",

        "➡️ Integrated Kafka for real-time data streaming and processing, enabling efficient handling of MES data across distributed systems.",

        
        "➡️ Languages/Tools: Html,Css,BootStrap,Javascript,ES6,React.JS,Redux,My-Sql,VS code,Azure-DevOps.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "bi:bootstrap-fill",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          "skillName": "Node.js",
          "fontAwesomeClassname": "logos:nodejs-icon",
          "style": {
            "color": "#339933"
          }
        },
        {
          "skillName": "Express.js",
          "fontAwesomeClassname": "simple-icons:express",
          "style": {
            "color": "#000000"
          }
        } ,

        {
          skillName: "MySql",
          fontAwesomeClassname: "cib:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          "skillName": "MongoDB",
          "fontAwesomeClassname": "logos:mongodb",
          "style": {
            "color": "#47A248"
          }
        },
        {
          skillName: "VsCode",
          fontAwesomeClassname: "vscode-icons:file-type-vscode",
          style: {
            color: "#007ACC",
          },
        },
        
    
        {
          skillName: "AzureDevOps",
          fontAwesomeClassname: "codicon:azure-devops",
           style: {    
            color: "#0078D7",
          },
         
        },

    
        {
          "skillName": "AWS",
          "fontAwesomeClassname": "logos:aws",
          "style": {
            "color": "#FF9900"
          }
        },
        {
          "skillName": "Jenkins",
          "fontAwesomeClassname": "simple-icons:jenkins",
          "style": {
            "color": "#D24939"
          }
        },
        {
          "skillName": "Kafka",
          "fontAwesomeClassname": "logos:kafka-icon",
          "style": {
            "color": "#231F20"
          }
        },
        {
          "skillName": "Kubernetes",
          "fontAwesomeClassname": "logos:kubernetes",
          "style": {
            "color": "#326CE5"
          }
        }
        
            
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/abhinavshaindil1?hr_r=1",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/abhinavshaindilya94/",
    },
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#0056D2",
      },
      profileLink:
        "https://www.coursera.org/user/8de8458f4f900d1ec7e77c2df246ad5b",
    },
    {
      "siteName": "GeeksforGeeks",
      "iconifyClassname": "simple-icons:geeksforgeeks",
      "style": {
        "color": "#0F9D58"
      },
      "profileLink": "https://auth.geeksforgeeks.org/user/abhinav%20shaindilya"
    },
    {
      "siteName": "GitHub",
      "iconifyClassname": "simple-icons:github",
      "style": {
        "color": "#181717"
      },
      "profileLink": "https://github.com/AbhinavK98"
    }
       
  ],
};

const degrees = {
  degrees: [
    {
      title: "St. Thomas' College of Engineering and Technology,Kolkata",
      subtitle: "B.Tech. in Information Technology -[8.4 DGPA] ",
      logo_path: "stcet_logo.png",
      alt_name: "Stcet",
      duration: "2016 - 2020",

      descriptions: [
        "➡️ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "➡️ Apart from this, I have done courses on Machine Learning, Front-End Development,BootCamp on Android and Full Stack Development.",
      ],
      website_link: "https://stcet.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "JavaScript",
      subtitle: "University of Michigan",
      logo_path: "Michigan_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/G3GZHES8AFLH",
      alt_name: "University of Michigan",
      color_code: "#8B8000",
    },
    {
      title: "CSS3",
      subtitle: "University of Michigan",
      logo_path: "Michigan_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/J6BM6GLJG2HU",
      alt_name: "CSS3",
      color_code: "#8B8000",
    },
    {
      title: "Machine Learning",
      subtitle: "NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link: "http://nptel.ac.in/noc",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Programming,Data structures and algorithms using python",
      subtitle: "NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link: "http://nptel.ac.in/noc",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "C++ - Advanced",
      subtitle: "Cutshort",
      logo_path: "Cutshort_logo.png",
      certificate_link: "https://cutshort.io/certificate/67250",
      alt_name: "https://cutshort.io/certificate/67250",
      color_code: "#A9A9A9",
    },
    {
      title: " HTML5",
      subtitle: "University of Michigan | Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/9R7AVC8LEDJU?utm_product=course",
      alt_name: "University of Michigan | Coursera",
      color_code: "#000000",
    },
    {
      title: "introduction to programming in c",
      subtitle: "NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link: "http://nptel.ac.in/noc",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Javascript - Advanced",
      subtitle: "Cutshort",
      logo_path: "Cutshort_logo.png",
      certificate_link: "https://cutshort.io/certificate/67254",
      alt_name: "deeplearning.ai",
      color_code: "#A9A9A9",
    },
    {
      title: "Modern React with Redux",
      subtitle: "Udemy",
      logo_path: "Udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/course/react-redux/learn/lecture/12531044?start=15#announcements",
      alt_name: "Udemy",
      color_code: "#231F20",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "Dynamic Full Stack Web Developer with 3.5 years of experience in JavaScript, ReactJS, and Node.js. Proficient in HTML5, CSS3, ES6, C++, OOPS, Data Structures, and Azure DevOps. Skilled in RESTful API integration, Jest testing, and DevOps practices. Expert in CI/CD pipeline automation and cloud migrations, ensuring efficient and reliable web applications. Committed to operational excellence and continuous improvement through Jenkins and deployment management.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work(Nov 2020 - Mar 2023)",
      experiences: [
        {
          title: "Associate IT Consultant ",
          company: "ITC INFOTECH",
          company_url: "https://www.itcinfotech.com/",
          logo_path: "itc_logo.png",
          duration: "Nov 2020 - Mar 2023",
          location: "Kolkata",
          description:
            "Worked as Front-end developer on Manufacturing Application which helps user to manage the performance of entire manufacturing operation in real time. using HTML,CSS,JavaScript(ES6),React JS,Bootstrap,API. Worked on Planning and designing on the structure of new features in web application.Developed new features which helped operator to manage label template and printer on front end with different functionality.Developed a Feedback form for internal project team using React Js and Firebase.Worked on Optimization of web pages. Increased Performance by 20 Percent for maximum speed and boost their scalability using different React optimization techniques,JavaScript and Database indexing.Testing of websites during the development process for usability and fixing bugs. Handling Production,SIT,UAT Deployment of new feature and enhancement once in a week on AzureDevOps. Supervision and Maintenance of production sites",
          color: "#FFFFFF",
        },
      ],
    },

    {
      title: "Work (Mar 2023-Present)",
      experiences: [
        {
          title: "Technical Analyst",
          company: "Koch",
          company_url: "https://www.itcinfotech.com/",
          logo_path: "KOCH.png",
          duration: "Mar 2023-Present",
          location: " Bengaluru",
          description:
            "I contributed to a custom MES application that enables real-time management of manufacturing operations. My role involved planning and designing the structure of new web application features, such as label template and printer management functionalities. I improved web page performance by 20% through React optimization techniques, JavaScript enhancements, and database indexing. Additionally, I integrated RESTful APIs to fetch and display content dynamically, which improved the user experience with real-time data and interactive features.I was responsible for testing websites for usability, implementing Jest for comprehensive testing, and handling weekly Production, SIT, and UAT deployments on DevOps. My duties also included the supervision and maintenance of production sites. A key project I led was the migration of a high-volume print server to the cloud infrastructure, which handled over 5,000 daily print jobs and resulted in a 50% reduction in system issues and support tickets. This significantly boosted the operational efficiency and reliability of the MES application. Furthermore, I automated deployment processes using CI/CD pipelines and implemented Jenkins pipelines to facilitate continuous integration and delivery, streamlining code integration and deployment cycles",
          color: "#FFFFFF",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    // ],
    // },
  ],
};
 
// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My professional journey has been marked by a diverse array of cutting-edge technological tools, with a particular affinity for crafting Full-Stack projects. My technical repertoire encompasses HTML, CSS, SCSS, JavaScript, and ReactJS, complemented by Firebase and various APIs for dynamic and responsive web applications. Expanding my expertise, I’ve embraced back-end technologies like Node.js and MongoDB, and have honed my skills in DevOps practices using Jenkins and AWS. This holistic approach to full-stack development allows me to deliver comprehensive solutions that are both innovative and efficient..",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Abh_logo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Android, JavaScript, front-End Web Development and Opensource Development.",
  },
  blogSection: {
    title: "Requests and Suggestions",
    subtitle:
      " If you have other request or question,don't hesitate Write it here, we are open for any kind of feedback or suggestions if you have.You can click below and get a contact form, you can drop your love ❤️.",
    link: "https://contact-abhinav.netlify.app/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: " Abhinav lives here, come over for a cup of coffee :",
    subtitle:
      "House No-93, New Balbhadrapur Benta, Laheriasarai Darbhanga, Bihar 846003",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/New+Balbhadrapur,+Benta,+Laheriasarai,+Darbhanga,+Bihar+846003/@26.1246201,85.8971612,15z/data=!3m1!4b1!4m5!3m4!1s0x39edb8f58b26ba43:0x8a92eb406579c4c!8m2!3d26.124859!4d85.9060162",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8240169006",
  },
};
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  //publicationsHeader,
  contactPageData,
};
