"use client";
import Image from "next/image";
import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  const profileImagePath = "/images/banner.jpg";
  const fileUrl = "https://drive.google.com/uc?export=download&id=1l68gfRjtm82-0fUd7uFjJ79muG64qE2q"; // Direct download link

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "resume.pdf"); // Set desired filename
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div id="home" className="bg-[#000]">
      <div className="text-[#FFFFFF] px-3 md:px-0 flex justify-between flex-col md:flex-row gap-12 items-center container mx-auto py-28">
        <div className="mt-12">
          <div className="font-semibold text-[#FFFFFF] text-[30px]">
            <Typewriter
              words={['Hello It’s Me']}
              loop={true}
              cursor
              cursorStyle="~~~"
              typeSpeed={170}
              deleteSpeed={80}
              delaySpeed={1200}
              style={{ fontSize: '24px' }}
            />
          </div>

          <h2 className="h-[58px] w-[2px] font-bold mt-4">|</h2>

          <div className="text-2xl leading-[38px]">
            I’m a Mathematics Student, Who is <br /> Passionate in
            <div className="font-semibold text-primary text-2xl">
              <Typewriter
                words={['Programming']}
                loop={true}
                cursor
                cursorStyle="~~~"
                typeSpeed={170}
                deleteSpeed={80}
                delaySpeed={1200}
                style={{ fontSize: '24px' }}
              />
            </div>
          </div>

          <button
            onClick={handleDownload}
            className="px-4 py-2 animate__animated animate__backInRight flex items-center gap-3 bg-white text-black rounded shadow-lg hover:bg-teal-700 hover:text-white w-[130px] font-bold mt-[60px] text-center"
          >
            <FaFileDownload />
            Resume
          </button>
        </div>

        <div>
          <Image
            src={profileImagePath}
            alt="GitHub Profile"
            className="w-[330px] h-[330px] animate__animated animate__fadeInTopLeft mt-6 object-cover border-0 rounded-full"
            width={330}
            height={330}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
