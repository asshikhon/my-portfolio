import Image from "next/image";
import React from "react";
import { FaFileDownload } from "react-icons/fa";

const Banner = () => {
  const profileImagePath = "/images/banner.jpg";

  return (
    <div className=" bg-[#000]">
      <div className="text-[#FFFFFF] px-3 md:px-0 flex justify-between flex-col md:flex-row gap-12 items-center container mx-auto py-28">
        <div className="mt-12"> 
          <h1 className="text-[32px] font-bold ">Hello, It’s Me</h1>
          <h2 className="h-[58px] w-[2px] font-bold mt-4">|</h2>

          <p className="text-2xl leading-[38px]">
            I’m a Mathematics Student, Who is <br /> Passionate in Programming
          </p>

          <a
            href='/path/to/resume.pdf' // Replace with actual resume link
            className=' px-4 py-2 flex items-center gap-3 bg-white text-black rounded shadow-lg hover:bg-teal-700 w-[130px] font-bold mt-[60px] text-center'
            download
          >
            <FaFileDownload />
            Resume
          </a>

        </div>

        <div>
          <Image
            src={profileImagePath}
            alt="GitHub Profile"
            className="w-[330px] h-[330px] mt-6 object-cover border-0 rounded-full"
            width={330}
            height={330}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
