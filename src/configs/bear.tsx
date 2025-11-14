import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm the one who is building his own universe..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
            {
        id: "aero-pay",
        title: "LinkedInPost Gen",
        file: "https://raw.githubusercontent.com/selvaganesh19/Linkedin-Post-HF-Generator/main/README.md",
        icon: "i-heroicons:face-smile",
        excerpt: "An AI-powered LinkedIn post generator...",
        link: "https://github.com/selvaganesh19/Linkedin-Post-HF-Generator"
      },
      {
        id: "portfolio-macos",
        title: "Portfolio",
        file: "https://raw.githubusercontent.com/selvaganesh19/HTML-Portfolio/main/README.md",
        icon: "i-heroicons:computer-desktop",
        excerpt: "My portfolio website",
        link: "https://selvaprofile19.vercel.app"
      },
      {
        id: "medium-2.0",
        title: "Emotion Detection",
        file: "https://raw.githubusercontent.com/selvaganesh19/Emotion-Detection-in-Text-Hugging-Face/main/README.md",
        icon: "i-mdi:web",
        excerpt: "An NLP model using BERT, TensorFlow, and NLTK for emotion classification...",
        link: "https://github.com/selvaganesh19/Emotion-Detection-in-Text-Hugging-Face"
      },
      {
        id: "attendance-web",
        title: "EV BMS (DL)",
        file: "https://raw.githubusercontent.com//selvaganesh19/EV-Battery-Management-System-using-Deep-Learning/main/README.md",
        icon: "i-heroicons:document-text",
        excerpt: "LSTM-based SoC and SoH prediction system with TensorFlow & Keras...",
        link: "https://github.com//selvaganesh19/EV-Battery-Management-System-using-Deep-Learning"
      },
            {
        id: "rasl",
        title: "AI-StudyVibe App",
        file: "https://raw.githubusercontent.com/selvaganesh19/AI-study-planner/main/readme.md",
        icon: "i-heroicons:document-magnifying-glass",
        excerpt: "A clean productivity-focused music study application...",
        link: "https://github.com/selvaganesh19/AI-study-planner"
      },
      {
        id: "paytm-web",
        title: "Movie Emotional Connect",
        file: "https://raw.githubusercontent.com/selvaganesh19/Movie-Emotional-connect-recommendation/main/README.md",
        icon: "i-carbon:face-neutral",
        excerpt: "A mood-based movie recommendation project...",
        link: "https://github.com/selvaganesh19/Movie-Emotional-connect-recommendation"
      }
    ]
  }
];

export default bear;