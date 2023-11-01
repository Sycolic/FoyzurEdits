"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "DON'T Make a Roblox Game Without Watching This First. ",
    description: "SmartyRBX",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://www.youtube.com/watch?v=vemqKJ-5yRE&t=1120s",
    previewUrl: "https://www.youtube.com/watch?v=vemqKJ-5yRE&t=1120s",
  },
  {
    id: 2,
    title: "WATCH THIS VIDEO BEFORE UPDATE 20 DROPS SOON!! [Blox Fruits]    ",
    description: "NKTBlast",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://www.youtube.com/embed/-6E713aJN74",
    previewUrl: "https://www.youtube.com/watch?v=-6E713aJN74",
  },
  {
    id: 3,
    title: "US Presidents Assassinate Xi Jinping In GTA 5    ",
    description: " POTUS Play",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://www.youtube.com/watch?v=kiCaIvuII3o&t=1s",
    previewUrl: "https://www.youtube.com/watch?v=kiCaIvuII3o&t=1s",
  },
  {
    id: 4,
    title: "Elden Ring but If I die I Do 10 Pushups",
    description: "EchoPlays711 - Dual Edit W/ thezombiegeneral"
  ,
    image: "/images/projects/4.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.youtube.com/watch?v=tGQ0voKD3Bs&t=210s",
    previewUrl: "https://www.youtube.com/watch?v=tGQ0voKD3Bs&t=210s",
  },
  {
    id: 5,
    title: "What We Expect From Rell Seas (ft. zReFocused)    ",
    description: "Personal Video",
    image: "/images/projects/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://www.youtube.com/watch?v=ZrEi4JrHOvc",
    previewUrl: "https://www.youtube.com/watch?v=ZrEi4JrHOvc",
  },
  {
    id: 6,
    title: "How to Use ChatGPT To Generate VIRAL Roblox Game Ideas…    ",
    description: "SmartyRBLX",
    image: "/images/projects/6.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://www.youtube.com/watch?v=CaJ5BPwQl6k",
    previewUrl: "https://www.youtube.com/watch?v=CaJ5BPwQl6k",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Some Of My Best Work
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name="Videos"
          isSelected={tag === "All"}
        />
     
      
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
