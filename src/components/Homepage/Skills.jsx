"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdOutlineAddReaction } from "react-icons/md";
import { SiSteamworks } from "react-icons/si";
import { GiSatelliteCommunication } from "react-icons/gi";
import { GiThink } from "react-icons/gi";
import { IoIosTime } from "react-icons/io";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const sectionStyle = {
    background: "linear-gradient(180deg, #000 0%, #252525 100%)",
    color: "white",
    padding: "20px 0", // Adjust padding as needed
  };

  return (
    <section id="skill" style={sectionStyle} className=''>
      <div className="container mx-auto pt-8 px-3 md:px-0 mb-[140px]">
        <h2 className="text-[40px] font-bold  text-center">My <span className='text-primary'>Skills</span></h2>

        <hr className='mb-10 w-[240px] text-center block mx-auto mt-2 h-[2px] font-semibold text-white' />
        <p className="text-center w-[70%] md:w-[40%] block mx-auto mb-10">
          We transform your ideas and desires into a distinctive web project
          that inspires both you and your customers
        </p>
        {/* Your content here */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       
            {/* 1st card */}
            <div data-aos="zoom-in" data-aos-duration="700" className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate">
              <div className="text-center text-wrap duration-300 group-hover:scale-125">
                <h1 data-aos="fade-up-right" data-aos-duration="1500" className="text-xl md:text-2xl group-hover:text-whiteColor">Project Management</h1>
                <p data-aos="fade-up-left" data-aos-duration="1500" className="text-md md:text-lg group-hover:text-whiteColor mt-3"  ><FaProjectDiagram className='text-3xl text-center block mx-auto' /></p>
              </div>
            </div>
             {/* 2nd card */}
            <div data-aos="zoom-in" data-aos-duration="700" className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate">
              <div className="text-center text-wrap duration-300 group-hover:scale-125">
                <h1 data-aos="fade-up-right" data-aos-duration="1500" className="text-xl md:text-2xl group-hover:text-whiteColor">Public Relations
                </h1>
                <p data-aos="fade-up-left" data-aos-duration="1500" className="text-md md:text-lg group-hover:text-whiteColor mt-3"  > <MdOutlineAddReaction className='text-3xl text-center block mx-auto' /></p>
              </div>
            </div>
             {/* 3rd card */}
            <div data-aos="zoom-in" data-aos-duration="700" className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate">
              <div className="text-center text-wrap duration-300 group-hover:scale-125">
                <h1 data-aos="fade-up-right" data-aos-duration="1500" className="text-xl md:text-2xl group-hover:text-whiteColor">TeamWork
                </h1>
                <p data-aos="fade-up-left" data-aos-duration="1500" className="text-md md:text-lg group-hover:text-whiteColor mt-3"  > <SiSteamworks className='text-4xl text-center block mx-auto' /></p>
              </div>
            </div>
             {/* 4th card */}
            <div data-aos="zoom-in" data-aos-duration="700" className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate">
              <div className="text-center text-wrap duration-300 group-hover:scale-125">
                <h1 data-aos="fade-up-right" data-aos-duration="1500" className="text-xl md:text-2xl group-hover:text-whiteColor">Effective Communication
                </h1>
                <p data-aos="fade-up-left" data-aos-duration="1500" className="text-md md:text-lg group-hover:text-whiteColor mt-3"  > <GiSatelliteCommunication className='text-3xl text-center block mx-auto' /></p>
              </div>
            </div>
             {/* 5th card */}
            <div data-aos="zoom-in" data-aos-duration="700" className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate">
              <div className="text-center text-wrap duration-300 group-hover:scale-125">
                <h1 data-aos="fade-up-right" data-aos-duration="1500" className="text-xl md:text-2xl group-hover:text-whiteColor">Critical Thinking
              </h1>
              <p data-aos="fade-up-left" data-aos-duration="1500" className="text-md md:text-lg group-hover:text-whiteColor mt-3"  > <GiThink className='text-3xl text-center block mx-auto' /></p>
              </div>
            </div>
             {/* 6th card */}
            <div data-aos="zoom-in" data-aos-duration="700" className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate">
              <div className="text-center text-wrap duration-300 group-hover:scale-125">
                <h1 data-aos="fade-up-right" data-aos-duration="1500" className="text-xl md:text-2xl group-hover:text-whiteColor">Time Management
              </h1>
              <p data-aos="fade-up-left" data-aos-duration="1500" className="text-md md:text-lg group-hover:text-whiteColor mt-3"  > <IoIosTime  className='text-3xl text-center block mx-auto' /></p>
              </div>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
