import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Findex"
          des="I developed a financial tracking application that is simple and effective in which users can seamlessly gain valuable financial insights into their spending patterns. Users can track income and expense variables and ensure financial wellness with interactive tools."
          src="https://media.istockphoto.com/id/1424757003/photo/budget-and-financial-planning-concept-including-a-management-or-executive-cfo-estimating-the.jpg?s=612x612&w=0&k=20&c=-qReHcxce_QnKsWlvV1x7jOndAAjPpiuFR7fZ7AUfQ0="
          gitlink="https://gitlab.com/jcornejo99/findex-financial-tracker-system"
          videoSrc="https://firebasestorage.googleapis.com/v0/b/my-first-project-portfol-6847b.appspot.com/o/recording-2023-10-02-14-23-06.webm?alt=media&token=aefd861a-ccfb-4999-8c2c-166d020d57d5&_gl=1*rqig36*_ga*Njk2NjUxNTMzLjE2OTUwNjY5OTI.*_ga_CW55HF8NVT*MTY5NjI4MTkzMC4xMy4xLjE2OTYyODE5OTIuNjAuMC4w"
        />
        <ProjectsCard
          title="Sorting Algorithm Visualizer"
          des="I developed a comprehensive sorting algorithm visualization tool that provides further insight into how the patterns and complexity of various sorting algorithms function. It was formulated for developers to debug their sorting implementations, insight into improving performance, accessibility and see how an algorithm behaves in real time."
          src="https://media.istockphoto.com/id/1987307560/photo/big-data-visualisation-abstract-digital-particles-cyber-network-background-technology-backdrop.jpg?s=612x612&w=0&k=20&c=Uom5jDGTgiO7UD32tZNDkCYPN1o6eEypMt0_ZhpArVQ="
          gitlink=""
          videoSrc="https://firebasestorage.googleapis.com/v0/b/my-first-project-portfol-6847b.appspot.com/o/recording-2023-09-30-00-08-00.webm?alt=media&token=7b5b8bfd-df75-40f9-bf9b-75f56a5b0bba&_gl=1*12huihg*_ga*Njk2NjUxNTMzLjE2OTUwNjY5OTI.*_ga_CW55HF8NVT*MTY5NjA1NzEwMS4xMS4xLjE2OTYwNTkzNTAuNjAuMC4w"
        />
        <ProjectsCard
          title="EngineRev"
          des="I created an automobile dealership management platform that takes control of sales and service department operations with real-time updates through pollers and an application broken into microservices. The app contains scheduling of appointments, service records and automobile history."
          src="https://static.vecteezy.com/system/resources/thumbnails/043/993/780/small/ai-generated-the-car-of-the-future-is-a-modern-technological-car-with-an-electric-motor-to-protect-the-environment-photo.jpg"
          gitlink="https://gitlab.com/jcornejo99/car-dealership-management-application"
          videoSrc=""
        />
        <ProjectsCard
          title="Unknown Project"
          des="Work in progress"
          src="https://firebasestorage.googleapis.com/v0/b/my-first-project-portfol-6847b.appspot.com/o/d-koi-jKZdHpGFpjc-unsplash.jpg?alt=media&token=702aa23a-c564-4c31-9e99-88668b6e67b1&_gl=1*g32lxn*_ga*Njk2NjUxNTMzLjE2OTUwNjY5OTI.*_ga_CW55HF8NVT*MTY5NTk2Nzc4MS4xMC4xLjE2OTU5NzA2NTIuNTMuMC4w"
          gitlink=""
          videoSrc=""
        />
        <ProjectsCard
          title="Unknown Project"
          des="Work in progress."
          src="https://firebasestorage.googleapis.com/v0/b/my-first-project-portfol-6847b.appspot.com/o/d-koi-jKZdHpGFpjc-unsplash.jpg?alt=media&token=702aa23a-c564-4c31-9e99-88668b6e67b1&_gl=1*g32lxn*_ga*Njk2NjUxNTMzLjE2OTUwNjY5OTI.*_ga_CW55HF8NVT*MTY5NTk2Nzc4MS4xMC4xLjE2OTU5NzA2NTIuNTMuMC4w"
          gitlink=""
          videoSrc=""
        />
        <ProjectsCard
          title="Unknown Project"
          des="Work in progress."
          src="https://firebasestorage.googleapis.com/v0/b/my-first-project-portfol-6847b.appspot.com/o/d-koi-jKZdHpGFpjc-unsplash.jpg?alt=media&token=702aa23a-c564-4c31-9e99-88668b6e67b1&_gl=1*g32lxn*_ga*Njk2NjUxNTMzLjE2OTUwNjY5OTI.*_ga_CW55HF8NVT*MTY5NTk2Nzc4MS4xMC4xLjE2OTU5NzA2NTIuNTMuMC4w"
          gitlink=""
          videoSrc=""
        />
      </div>
    </section>
  );
};

export default Projects;
