import React from "react";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
  FaWhatsappSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-[#1B1B1B] py-16 px-4 text-center">
      <h1 className="pb-10 pt-12 md:text-6xl sm:text-5xl text-4xl font-bold text-white">
        CONTACT ME
      </h1>
      <div className="md:my-12">
        <p className="text-2xl font-bold text-center py-4 -mt-4 text-white md:block hidden">
          Shoot me an <span className="text-[#DB4437]">Email.</span>
        </p>
        <div className="w-fit mx-auto md:block hidden">
          <a
            href="mailto:justin.huiyun.lee@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineMail className="text-5xl w-fit mx-auto text-white hover:cursor-pointer bg-[--bg-white] hover:text-[#DB4437] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" />
          </a>
        </div>

        <p className="text-2xl font-bold text-center pt-14 text-white hidden md:block">
          Or contact me <span className="text-[#962fbf]">Here.</span>
        </p>
        <p className="text-2xl font-bold text-center text-white md:hidden">
          Contact me <span className="text-[#962fbf]">Here.</span>
        </p>
        <div className="text-5xl grid grid-cols-5 w-fit mx-auto gap-5 md:py-6 py-10 pb-10 text-white">
          <a
            href="https://www.instagram.com/justin_huiyun_lee/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare className="hover:cursor-pointer bg-[--bg-white] hover:text-[#d62976] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" />
          </a>
          <a
            href="https://github.com/justin-huiyun-lee"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare className="hover:cursor-pointer bg-[--bg-white] hover:text-[#c9510c] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/justin-huiyun-lee"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:cursor-pointer bg-[--bg-white] hover:text-[#00acee] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCNjMtuUevSddxRr0BwmsPtw"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutubeSquare className="hover:cursor-pointer bg-[--bg-white] hover:text-[#FF0000] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" />
          </a>
          <a href="https://wa.me/19256605548" target="_blank" rel="noreferrer">
            <FaWhatsappSquare className="hover:cursor-pointer bg-[--bg-white] hover:text-[#25D366] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" />
          </a>
        </div>
        <p className="text-2xl font-bold text-center py-4 -mt-4 text-white md:hidden block">
          Or shoot me an <span className="text-[#DB4437]">Email.</span>
        </p>
        <div className="w-fit mx-auto md:hidden block">
          <a
            href="mailto:justin.huiyun.lee@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineMail className="text-5xl w-fit mx-auto text-white hover:cursor-pointer bg-[--bg-white] hover:text-[#DB4437] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
