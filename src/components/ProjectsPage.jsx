import React from "react";
import cb from "../assets/choppingboard-bg.png";
import wt from "../assets/watchtower-bg.png";
import iprot from "../assets/imanprotector-bg.png";
import construction from "../assets/in-construction-bg.png";

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
            className="md:max-w-xl sm:max-w-lg max-w-md h-auto"
            alt="choppingboard-showcase-img"
          ></img>
          <p className="text-3xl font-bold">ChoppingBoard</p>
          <p className="text-2xl max-w-md">
            A website that allowed users to easily make shorts by chopping
            longer videos and using our AI generated subtitles.
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:mr-5 flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <img
            src={wt}
            className="md:max-w-xl sm:max-w-lg max-w-md h-auto"
            alt="watchtower-showcase-img"
          ></img>

          <p className="md:text-3xl sm:text-2xl text-xl font-bold">WatchTower</p>
          <p className="md:text-2xl sm:text-xl text-lg max-w-md">
            A website and app that allows people to record only motion detected
            footage for their security cameras, saving bandwidth.
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:ml-5 flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <img
            src={iprot}
            className="md:max-w-2xl sm:max-w-xl max-w-lg h-auto"
            alt="imanprotector-showcase-img"
          ></img>
          <p className="text-3xl font-bold -mt-8">ImanProtector</p>
          <p className="text-2xl max-w-xl">
            A religious application for struggling Muslims, that blocks phone
            activity every prayer time, forcing the users to perform religious
            duties.
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:mr-5 flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <img
            src={construction}
            className="md:max-w-xl sm:max-w-lg max-w-md h-auto"
            alt="imanprotector-showcase-img"
          ></img>
          <p className="text-3xl font-bold">In Construction...</p>
          <p className="text-2xl max-w-lg">
            More apps and websites are being produced constantly. Please come
            back later and maybe there will be more projects to show!
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:ml-5 flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <img
            src={iprot}
            className="md:max-w-2xl sm:max-w-xl max-w-lg h-auto"
            alt="imanprotector-showcase-img"
          ></img>
          <p className="text-3xl font-bold -mt-8">ImanProtector</p>
          <p className="text-2xl max-w-xl">
            A religious application for struggling Muslims, that blocks phone
            activity every prayer time, forcing the users to perform religious
            duties.
          </p>
        </div>
        <div className="bg-gray-100 h-[80vh] md:mr-5 flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100">
          <img
            src={construction}
            className="md:max-w-xl sm:max-w-lg max-w-md h-auto"
            alt="imanprotector-showcase-img"
          ></img>
          <p className="text-3xl font-bold">In Construction...</p>
          <p className="text-2xl max-w-lg">
            More apps and websites are being produced constantly. Please come
            back later and maybe there will be more projects to show!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4">
          <p className="text-xl text-black py-8">Wanna see my Experience?</p>
          <a href = "#experience" className = "hover:opacity-50 ease-in-out duration-150">
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
