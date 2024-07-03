"use client"
import Image from "next/image";
import React from "react";
import { FaFileDownload } from "react-icons/fa";

const Banner = () => {
  const profileImagePath = "/images/banner.jpg";

  const handleDownload = () => {
    const fileUrl = "https://docs.google.com/document/d/1nqLDmti6vdEmoTKNTJ-2aXYX9svjPv25WthmxA5EJoI/export?format=pdf"; // Replace with actual export link

    fetch(fileUrl, {
      headers: {
        "Content-Type": "application/pdf", // Set appropriate content type if known
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "resume.pdf"); // Set desired file name here
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => console.error("Error downloading file:", error));
  };

  return (
    <div id="home" className="bg-[#000]">
      <div className="text-[#FFFFFF] px-3 md:px-0 flex justify-between flex-col md:flex-row gap-12 items-center container mx-auto py-28">
        <div className="mt-12">
          <h1 className="text-[32px] font-bold">Hello, It’s Me</h1>
          <h2 className="h-[58px] w-[2px] font-bold mt-4">|</h2>

          <p className="text-2xl leading-[38px]">
            I’m a Mathematics Student, Who is <br /> Passionate in Programming
          </p>

          <button
            onClick={handleDownload}
            className="px-4 py-2 flex items-center gap-3 bg-white text-black rounded shadow-lg hover:bg-teal-700 hover:text-white w-[130px] font-bold mt-[60px] text-center"
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
