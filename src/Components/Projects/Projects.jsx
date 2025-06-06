import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap justify-center gap-5">
        <ProjectCard
          title="Harshal Portfolio"
          main="A personal portfolio website built with React to showcase my projects and experience."
          demoLink="https://harshal-portfolio-mu.vercel.app"
          sourceLink="https://github.com/Harshal-55/Harshal_Portfolio"
        />
        <ProjectCard
          title="FirstStore Frontend"
          main="Frontend for a business listing platform built using Reactjs and Tailwind CSS."
          demoLink="https://firststore.io/"
          sourceLink="https://github.com/Harshal-55/FirstStore"
        />
        <ProjectCard
          title="Movie App"
          main="A React-based app that fetches and displays movie data using the TVMaze API."
          demoLink="https://movie-test-pi.vercel.app"
          sourceLink="https://github.com/Harshal-55/Movie_Test"
        />
        <ProjectCard
          title="Lung Cancer Detection"
          main="A Streamlit-based ML app that detects lung cancer using DenseNet169 model."
          demoLink="https://a-lung-detection-09.streamlit.app/"
          sourceLink="https://github.com/Harshal-55/Lung-Cancer-Detection-using-DenseNet169"
        />
        <ProjectCard
          title="Mental Health Chatbot"
          main="A Python-based chatbot for providing mental health support using NLP techniques."
          demoLink=""
          sourceLink="https://github.com/Harshal-55/Mental-Health-Chatbot"
        />
        <ProjectCard
          title="Context TodoList App"
          main="A simple React to-do list app using context API for state management."
          demoLink="https://context-todo-murex.vercel.app/"
          sourceLink="https://github.com/Harshal-55/Context_Todo"
        />
      </div>
    </div>
  );
};

export default Projects;
