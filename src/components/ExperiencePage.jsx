import React from "react";
import ssg from "../assets/stanford-ssg-bg.png";
import art from "../assets/art-teacher-bg.png";
import sb from "../assets/study-buddy-bg.png";
import construction from "../assets/in-construction-bg.png";

import ProjBoxes from "./projectBoxes";

const ProjectsPage = () => {
  return (
    <div
      id="experience"
      className="h-fit py-8 border-b-8 border-gray-200 flex flex-col text-center"
    >
      <h1 className="py-12 md:text-6xl sm:text-5xl text-4xl font-bold text-black">
        EXPERIENCE
      </h1>
      <div className="grid md:grid-cols-2 gap-5">
        <ProjBoxes
          title="Stanford Science Small Groups"
          content="Worked with Stanford Ph.D students on researching and presenting neural networks and AI research"
          side="left"
          image={ssg}
        />
        <ProjBoxes
          title="Art Teacher"
          content="Was a self-employed Art Teacher that taught various fields of art such as painting, animation, and logo design"
          side="right"
          image={art}
        />
        <ProjBoxes
          title="Study Buddy Tutor"
          content="Taught and mentored international and/or underperforming students from diverse backgrounds, subjects such as APCS and Math"
          side="left"
          image={sb}
        />
        <ProjBoxes
          title="Study Buddy Tutor"
          content="Taught and mentored international and/or underperforming students from diverse backgrounds, subjects such as APCS and Math"
          side="right"
          image={sb}
        />

        <div className="bg-gray-100 h-[80vh] md:mr-5 flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <img
            src={construction}
            className="md:max-w-xl sm:max-w-lg max-w-md h-auto my-auto"
            alt="imanprotector-showcase-img"
          ></img>
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            More to Come!
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            More experience will come and go, and it may even start with you!
            Let us build businesses and experiences together.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4">
        <p className="text-xl text-black py-8">Wanna Contact Me?</p>
        <a
          href="#contact"
          className="hover:opacity-50 ease-in-out duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;
