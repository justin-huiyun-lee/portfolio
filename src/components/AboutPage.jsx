import React from "react";

const AboutPage = () => {
  return (
    <div id="about" className="h-screen bg-gray-100 border-b-8">
      <div className="h-full flex flex-col items-center justify-center text-center">
        <h1 className="md:text-6xl  sm:text-5xl text-4xl font-bold text-black">
          I'm a UX/UI designer
        </h1>
        <h2 className="text-2xl mt-4 text-black">...primarily.</h2>
        <p className="mt-4 text-black md:max-w-6xl sm:max-w-4xl max-w-lg md:text-5xl sm:text-3xl text-xl">
          I also enjoy pursuing various fields of Art, such as Animation,
          Painting, Digital Art, Logo Design, etc. My skillsets in front-end
          programming mix beautifully with my skills in art, leading to websites
          like this one. One might say I’m a UX/UI designer, born in South Korea
          and currently in Cupertino, CA.
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-xl text-black py-8">Wanna see my Projects?</p>
          <a href = "#projects" className = "hover:opacity-50 ease-in-out duration-150">
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
    </div>
  );
};

export default AboutPage;
