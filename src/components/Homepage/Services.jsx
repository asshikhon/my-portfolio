"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode } from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const sectionStyle = {
    background: " linear-gradient(180deg, #252525 0%, #000 100%)",
    color: "white",
    padding: "20px 0", // Adjust padding as needed
  };

  return (
    <section id="services" style={sectionStyle} className="">
      <div className="pt-20 px-3 md:px-0">
        <h2 className="text-[40px] font-semibold text-center">
          My <span>Services</span>
        </h2>
        <hr className="w-[240px] text-center block mx-auto mt-2 h-[2px] font-semibold text-white" />

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-auto md:w-[370px] h-auto md:h-[400px] border border-primary rounded-lg p-12 text-center block mx-auto mt-12"
        >
          <h5
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            className=" text-primary space-y-6"
          >
            <FaLaptopCode className="text-center text-7xl block mx-auto" />

            <span className="text-2xl font-bold ">Web Development</span>
          </h5>

          <p className="pt-4">
            Offering comprehensive web development services to transform
            concepts into dynamic websites and applications. Tailored solutions
            focus on user experience, functionality, and modern design,
            enhancing digital presence and business outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
