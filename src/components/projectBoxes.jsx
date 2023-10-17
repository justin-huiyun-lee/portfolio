import React from "react";

const projectBoxes = (props) => {
  var title = props.title;
  var content = props.content;
  var side = props.side;
  var img = props.image;

  return (
    <div
      className={`${
        side === "left" ? "md:ml-5" : "md:mr-5"
      } bg-gray-100 h-[80vh] flex flex-col justify-end p-4 items-center rounded-3xl shadow-gray-200 shadow-md overflow-hidden border-8 border-gray-100`}
    >
      <img
        src={img}
        className="md:max-w-xl sm:max-w-lg max-w-md h-auto my-auto"
        alt="stanford-ssg-showcase-img"
      ></img>
      <p className="md:text-3xl sm:text-2xl text-xl font-bold">${title}</p>
      <p className="md:text-2xl sm:text-xl text-lg max-w-md">${content}</p>
    </div>
  );
};

export default projectBoxes;
