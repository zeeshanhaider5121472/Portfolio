import Heading from "@/components/Heading";
import Link from "next/link";
import React from "react";
import Projectcard from "./Projectcard";

const Project = (): React.JSX.Element => {
  const projects = [
    {
      id: "01",
      title: "Puter Chat AI",
      desc: "A better ChatGPT clone built with Next.js and Node.js server.",
      img: "/images/puter-chatai.jpg",
      link: "https://puterchatai.vercel.app/",
      tags: [""],
      github: "https://github.com/zeeshanhaider5121472/puterchatai",
      readme: "https://github.com/zeeshanhaider5121472/puterchatai#readme",
    },
    {
      id: "02",
      title: "Zephyrus AI WebScrapper",
      desc: "A web scrapper that scrapes data from a website and user can talk with the AI based on the scraped data.",
      img: "/images/Zephyrus-ai.jpg",
      link: "https://webchatai-rose.vercel.app/",
      tags: [""],
      github: "https://github.com/zeeshanhaider5121472/webchatai",
      readme: "https://github.com/zeeshanhaider5121472/webchatai#readme",
    },
    {
      id: "03",
      title: "School LMS System",
      desc: "A School LMS System for student, teacher and admin dashboards.",
      img: "/images/school-lms.jpg",
      link: "https://unilife-learning.vercel.app/",
      tags: [""],
      github: "https://github.com/zeeshanhaider5121472/UnilifeLearning",
      readme: "https://github.com/zeeshanhaider5121472/UnilifeLearning#readme",
    },
    {
      id: "04",
      title: "Ludo Classic",
      desc: "A classic Ludo game built with Next.js and Node.js server",
      img: "/images/ludo-classic1.jpg",
      link: "https://ludo-game-three-phi.vercel.app/",
      //   tags: ["ReactJs", "NodeJs", "Express", "Postgres", "SabPaisa"],
      tags: [""],
      github: "https://github.com/zeeshanhaider5121472/ludo-game",
      readme: "https://github.com/zeeshanhaider5121472/ludo-game#readme",
    },
    {
      id: "05",
      title: "Compressor Troubleshooting",
      desc: "A tool for troubleshooting compressor issues.",
      img: "/images/compressor-troubleshooting.jpg",
      link: "https://haider-web-app.vercel.app/",
      //   tags: ["ReactJs", "NodeJs", "Express", "Postgres", "SabPaisa"],
      tags: [""],
      github: "https://github.com/zeeshanhaider5121472/haiderwebapp",
      readme: "https://github.com/zeeshanhaider5121472/haiderwebapp#readme",
    },
  ];

  return (
    <div>
      <Heading
        heading="Yeah, I work hard"
        emoji="💼"
        desc="Each project is unique. Here are some of my works."
      />

      <div className="flex my-16 flex-col items-center justify-center gap-16">
        {projects.map((project) => (
          <Projectcard key={project.id} {...project} />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Link href="/projects">
          <button className="custom-button m-auto">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
