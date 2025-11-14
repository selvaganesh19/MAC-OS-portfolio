import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "MY Links",
    sites: [
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:selvavelayutham395@gmail.com",
      },
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/selvaganesh19",
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/selvaganesh19/",
      },
      {
        id: "my-twitter",
        title: "HuggingFace",
        img: "img/sites/huggingface.svg",
        link: "https://www.huggingface.co/selva1909",
      },
      {
        id: "leetcode",
        title: "Instagram",
        img: "img/sites/instagram.svg",
        link: "https://www.instagram.com/_selvxsh.__/",
      },
      {
        id: "GeeksforGeeks",
        title: "GeeksforGeeks",
        img: "img/sites/gfg.png",
        link: "https://www.geeksforgeeks.org/",
      },
    ],
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "hacker-news",
        title: "HuggingFace",
        img: "img/sites/huggingface.svg",
        link: "https://www.huggingface.co/",
      },
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/",
      },
      {
        id: "twitter",
        title: "ArXiv",
        img: "img/sites/arxiv.svg",
        link: "https://www.arxiv.org/",
      },
      {
        id: "leetcode",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/selvaganesh19/",
      },
      {
        id: "GeeksforGeeks",
        title: "GeeksforGeeks",
        img: "img/sites/gfg.png",
        link: "https://www.geeksforgeeks.org/",
      },
    ],
  },
};

export default websites;
