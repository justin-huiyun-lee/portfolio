import React from "react";
import cb from "../assets/choppingboard-bg.png";
import wt from "../assets/watchtower-bg.png";
import iprot from "../assets/imanprotector-bg.png";
import construction from "../assets/in-construction-bg.png";
import fox from "../assets/fox-painting-bg.png";
import amogus from "../assets/amongus-anim-bg.jpeg";
import earth from "../assets/save-earth-anim-bg.png";
import face from "../assets/soccer-player-face-bg.png";
import pose from "../assets/soccer-player-pose-bg.png";
import stillLife from "../assets/still-life-bg.png";

const ProjectsPage = () => {
  return (
    <div
      id="projects"
      className="h-fit py-8 border-b-8 border-gray-200 flex flex-col text-center"
    >
      <h1 className="py-12 md:text-6xl sm:text-5xl text-4xl font-bold text-black">
        PROJECTS
      </h1>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-gray-100 h-[80vh] md:ml-5 flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <img
            src={cb}
            className="md:max-w-xl sm:max-w-lg max-w-md h-auto my-auto"
            alt="choppingboard-showcase-img"
          ></img>
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            ChoppingBoard
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            A website that allowed users to easily make shorts by chopping
            longer videos and using our AI generated subtitles.
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:mr-5 flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <img
            src={wt}
            className="md:max-w-xl sm:max-w-lg max-w-md h-auto my-auto"
            alt="watchtower-showcase-img"
          ></img>

          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            WatchTower
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            A website and app that allows people to record only motion detected
            footage for their security cameras, saving bandwidth.
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:ml-5 flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <img
            src={iprot}
            className="md:max-w-2xl sm:max-w-xl max-w-lg h-auto my-auto"
            alt="imanprotector-showcase-img"
          ></img>
          <p className="md:text-3xl sm:text-2xl text-xl font-bold -mt-8">
            ImanProtector
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            An application for Muslims, that blocks phone activity at prayer
            times, forcing users to perform religious duties when necessary.
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:mr-5 flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <img
            src={fox}
            className="md:max-w-md max-w-sm h-auto border-gray-300 border-4 rounded-lg my-auto"
            alt="fox-painting-showcase-img"
          ></img>
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            Painting - Fox
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            Utilized oil painting to create this artwork in 2 - 3 days of work
            using knowledge of various color mixtures
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:ml-5 flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <img
            src={face}
            className="md:max-w-[17.5rem] max-w-[15rem] h-auto border-gray-300 border-4 rounded-lg my-auto"
            alt="fox-painting-showcase-img"
          ></img>
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            Charcoal Drawing - Face
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            Utilized Charcoal to create this artwork in 1&nbsp;- 2 days of work
            using knowledge of shading using black/white
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:mr-5 flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <img
            src={pose}
            className="md:max-w-[17.5rem] max-w-[15rem] h-auto border-gray-300 border-4 rounded-lg my-auto"
            alt="fox-painting-showcase-img"
          ></img>
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            Charcoal Drawing - Pose
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            Utilized Charcoal to create this artwork in 1&nbsp;- 2 days of work
            using knowledge of shading using black/white
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:ml-5 flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <img
            src={stillLife}
            className="md:max-w-sm max-w-xs h-auto border-gray-300 border-4 rounded-lg my-auto"
            alt="fox-painting-showcase-img"
          ></img>
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            Charcoal Drawing - Still Life
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            Utilized Charcoal to create this artwork in 1&nbsp;- 2 days of work
            using knowledge of shading using black/white
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:mr-5 flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <a
            className="md:max-w-md max-w-sm h-auto border-gray-300 border-4 rounded-lg my-auto"
            href="https://www.youtube.com/watch?v=o8Q-shhIpts&ab_channel=JustinHuiyunLee"
            target="_blank"
            rel="noreferrer"
          >
            <img src={earth} alt="earth-anim-showcase-img"></img>
          </a>
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            Environmental Animation
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            Utilized Procreate to make this animation in the span of 1 - 2 weeks
            to fight climate change, and is now on
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=o8Q-shhIpts&ab_channel=JustinHuiyunLee"
              className="text-[#FF0000]"
            >
              <u> youtube.</u>
            </a>
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:ml-5 flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <a
            className="md:max-w-md max-w-sm h-auto border-gray-300 border-4 rounded-lg my-auto"
            href="https://www.youtube.com/watch?v=iPuXXZ5KirM&ab_channel=JustinLee"
            target="_blank"
            rel="noreferrer"
          >
            <img src={amogus} alt="amongus-anim-showcase-img"></img>
          </a>
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            First Animation
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            Used Adobe Animate to make this animation based on a popular video
            game in 5 - 6 weeks, and is now on
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=iPuXXZ5KirM&ab_channel=JustinLee"
              className="text-[#FF0000]"
            >
              <u> youtube.</u>
            </a>
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:mr-5 flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <img
            src={construction}
            className="md:max-w-xl sm:max-w-lg max-w-md h-auto my-auto"
            alt="imanprotector-showcase-img"
          ></img>
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            In Construction...
          </p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            More apps, websites and artwork are being produced constantly.
            Please come back later and there may be more projects here!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4">
        <p className="text-xl text-black py-8">Wanna see my Experience?</p>
        <a
          href="#experience"
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

