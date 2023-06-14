import React from "react";

const HomePage = () => {
  return (
    <div
      id="home"
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center bg-background-image-forest border-b-8 border-black"
    >
      <h1 className="md:text-6xl sm:text-5xl text-4xl -mt-10 font-bold text-white">
        HELLO
      </h1>
      <h2 className="md:text-3xl sm:text-2xl text-xl text-white p-4">
        MY NAME IS
      </h2>
      <h1 className="md:text-8xl sm:text-7xl text-6xl font-bold text-white">
        JUSTIN LEE
      </h1>

      <div className="flex flex-col items-center mt-4">
        <p className="text-xl text-white py-8 font-thin">About Me</p>
        <a
          href="#about"
          className="hover:opacity-50 ease-in-out duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
