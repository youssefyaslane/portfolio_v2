import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Youssef Yaslane",
  initials: "DS",
  url: "https://dillion.io",
  location: "Casablanca, MR",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "I am a Data scientist",
  summary:
    "A 5th-year Computer Engineering student specializing in Big Data and Data Science, passionate about solving complex challenges and driving technological innovation. Currently seeking a final-year internship to apply my skills in data science, machine learning, and data engineering.",
  avatarUrl: "/me.png",
  skills: [
    "Machine Learning",
    "Deep Learning",
    "Python",
    "Pandas",
    "Numpy",
    "scikit-learn",
    "TensorFlow",
    "Hadoop",
    "Spark",
    "Kafka",
    "Superset",
    "SQL",
    "MongoDB",
    "MySql",
    "Java",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "yaslaney@gmail.com",
    tel: "0663199244",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/youssefyaslane",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/youssef-yaslane-ab6716239/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Inwi",
      href: "https://inwi.ma",
      badges: [],
      location: "Casablanca",
      title: "Data Engineer intern",
      logoUrl: "/inwi.png",
      start: "08/2024",
      end: "09/2024",
      description:
        "Implementation of a real-time data pipeline using Apache Kafka for ingesting CSV files and storing them in HDFS via Hadoop. Data cleaning and preparation using Apache Spark before re-saving them in HDFS for optimal processing. Creation of an interactive dashboard with Superset for data visualization and providing real-time insights.",
    },
    {
      company: "3D Smart Factory",
      badges: [],
      href: "https://3dsmartfactory.csit.mas",
      location: "Remote",
      title: "data scientist intern",
      logoUrl: "/3D-SMART-FACTORY.jpg",
      start: " 07/2024",
      end: "09/2021",
      description:
        "Carried out 3D image segmentation of lumbar spines using UNet3D and deep learning techniques. Developed a web application with Flask to visualize and interact with the segmentation results .",
    },
    {
      company: "TIMAR",
      href: "https://www.timar.ma",
      badges: [],
      location: "Casablanca",
      title: "data scientist intern",
      logoUrl: "/timar.png",
      start: "07/2024",
      end: "08/2024",
      description:
        "Fine-tuning a BERT model for the automatic classification of client questions in the logistics sector. Developed a data structure in Excel to associate classified questions with relevant answers, facilitating the automation of customer support. Designed an interactive web interface with Flask, enabling users to ask questions and receive real-time answers.",
    },
    {
      company: "Attijariwafa Bank",
      href: "https://AttijariwafaBank.ma",
      badges: [],
      location: "Casablanca",
      title: "Functional database administrator intern",
      logoUrl: "/atti.png",
      start: "08/2023",
      end: "09/2023",
      description:
        "Developed a Python script to automate the simultaneous reading of all database dictionaries. Automated data management processes to optimize the efficiency of repetitive tasks.",
    },
    {
      company: "Marsa Maroc",
      href: "https://www.marsamaroc.co.ma",
      badges: [],
      location: "Casablanca",
      title: "data scientist intern",
      logoUrl: "/marsamaroc.png",
      start: "07/2023",
      end: "08/2023",
      description:
        "Cleaning and preprocessing raw data to make it ready for analysis. Modeling machine learning models using Pandas, NumPy, and Scikit-Learn. Developing a user interface with Flask to visualize and interact with the results.",
    },
    {
      company: "Sophatel",
      href: "https://www.sophatel.com",
      badges: [],
      location: "Casablanca",
      title: "web developer intern",
      logoUrl: "/sophatel.png",
      start: "07/2022",
      end: "08/2022",
      description:
        "Development of smooth front-end interfaces using HTML and CSS, providing an optimal user experience. Back-end development with JavaScript to make the site interactive and responsive.",
    },
  ],
  education: [
    {
      school: "University International of Casablanca",
      href: "https://www.uic.ac.ma",
      degree:
        "Engineering degree in Computer Engineering with a specialization in Big Data and Data Science",
      logoUrl: "/uic.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "University International of Casablanca",
      href: "https://www.uic.ac.ma",
      degree: "Preparatory Classes",
      logoUrl: "/uic.png",
      start: "2020",
      end: "2022",
    },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
   {
      title:
        "Pipeline de Traitement , Analyse et prédiction d'Incidents en Temps Réel",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Développement d’un système de prédiction d’incidents de vol en temps réel en utilisant des données de trafic, météo et démographie. Mise en place d’un pipeline Kafka et BigQuery pour l’ingestion et le stockage des données, avec entraînement de modèles de Machine Learning pour classifier les risques par quartier. Visualisation des prédictions en temps réel via Grafana.",
      technologies: [
        "Python",
        "HDFS",
        "hadoop",
        "Bigquery",
        "Spark",
        "Kafka",
        "Machine Learning",
        "Gerafana",
      ],
      links: [
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/grafana.png",
      video: "",
    },
    {
      title: "Segmentation 3D ",
      href: "",
      dates: "2024",
      active: true,
      description:
        "3D image segmentation of lumbar spines using UNet3D and deep learning techniques and Development of a web application with Flask to visualize and interact with the segmentation results",
      technologies: [
        "Python",
        "Google colab",
        "flask",
        "pandas",
        "Numpy",
        "Deep Learning",
        "Unet3D",
        "html",
        "css",
        "JavaScript",
      ],
      links: [
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/segmentation.mp4",
    },
    {
      title: "Chatbot Universitaire",
      href: "",
      dates: "2024",
      active: true,
      description:
        "Developed a chatbot using Google BERT to answer university students' questions, with data collection and evaluation through realistic scenarios.",
      technologies: [
        "Python",
        "pandas",
        "Google colab",
        "React",
        "flask",
        "Azure machine learning",
        "NLP",
        "Deep Learning",
        "Azure machine learning",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/youssefyaslane/chatbot_uic",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chatbot.png",
      video: "",
    },
    {
      title: "Classification de Pneus",
      href: "",
      dates: "2023",
      active: true,
      description:
        "Implemented a deep learning model to classify tire images as either defective or in good condition using a convolutional neural network (CNN).",
      technologies: [
        "Python",
        "Jupyter",
        "CNN",
        "TensorFlow",
        "Deep Learning",
        "Neural networks",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/youssefyaslane/deep_learning_cnn",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cnn.png",
      video: "",
    },
  ],
} as const;
