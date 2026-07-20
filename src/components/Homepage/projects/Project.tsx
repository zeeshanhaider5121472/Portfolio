import { projects } from "@/app/projects/page";
import Heading from "@/components/Heading";
import Link from "next/link";
import React from "react";
import Projectcard from "./Projectcard";

const Project = (): React.JSX.Element => {
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
