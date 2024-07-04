import Link from "next/link";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  const sectionStyle = {
    background: " linear-gradient(180deg, #000 3.76%, #252525 100%)",
    color: "white",
    padding: "20px 0", // Adjust padding as needed
  };

  return (
    <section id="projects" style={sectionStyle} className="">
      <div className="container mx-auto px-3 md:px-0 py-10 md:pt-20">
        <h2 className="text-[40px] font-semibold text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <hr className="w-[240px] text-center block mx-auto mt-2 h-[2px] font-semibold text-white mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {/* 1st card */}
          <div className="group relative border border-primary rounded-xl p-8 overflow-hidden">
            <p className="text-center text-2xl mb-4">
              <span className="font-bold text-teal-500">PROJECT NAME:</span>{" "}
              SurveySeeker
            </p>
            <p className="pb-3">
              <span className="font-bold text-teal-500 uppercase">
                Description:
              </span>{" "}
              Create, distribute, and analyze surveys effortlessly. Features
              include custom templates, real-time analytics, and user-friendly
              interface.
            </p>

            <p className="pb-3">
              <span className="font-bold text-teal-500 uppercase">
                Features:
              </span>{" "}
              <br />
              <span className="border-b-[1px] border-primary">
                1. User-friendly Interface:
              </span>{" "}
              Navigate our website effortlessly with a sleek and intuitive
              design. <br />
              <span className="border-b-[1px] border-primary">
                2. Interactive Dashboards:
              </span>{" "}
              Create interactive dashboards to visualize survey data in
              real-time. <br />
              <span className="border-b-[1px] border-primary">
                3. Multi-User Roles:
              </span>{" "}
              <span className="border-b-[1px] border-primary"></span> Assign
              different roles and permissions to team members (admin, surveyor,
              pro-user, user).
            </p>

            <p className="pb-5">
              <span className="font-bold text-teal-500 uppercase">
                Used technology:
              </span>{" "}
              <br /> nodejs, javascript, firebase ,mongodb, react.js, firebase-,
              stripe-payments, react-router-dom, tailwindCss.
            </p>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center flex">
                <Link
                  href={`https://github.com/asshikhon/b9a12-surveyseeker-client`}
                  target="black"
                >
                  <button className="btn flex items-center gap-2 text-white bg-primary hover:bg-teal-800 border-0 text-base font-semibold mx-2 mb-2">
                  <FaGithub />   Github Link
                  </button>
                </Link>
                <Link href={`https://survey-seeker.web.app`} target="black">
                <button className="btn flex items-center gap-2 text-white bg-primary hover:bg-teal-800 border-0 text-base font-semibold mx-2">
                  <FaLink /> Live Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* 2nd card */}
          <div className="group relative border border-primary rounded-xl p-8 overflow-hidden">
            <p className="text-center text-2xl mb-4">
              <span className="font-bold text-teal-500">PROJECT NAME:</span>{" "}
              RestaurantRealm
            </p>
            <p className="pb-3">
              <span className="font-bold text-teal-500 uppercase">
                Description:
              </span>{" "}
              Efficiently manage reservations, menus, staff, orders, best food
              gallery, top dishes, and view your order list.
            </p>

            <p className="pb-3">
              <span className="font-bold text-teal-500 uppercase">
                Features:
              </span>{" "}
              <br />
              <span className="border-b-[1px] border-primary">
                1. Responsive Design:
              </span>{" "}
              Enjoy seamless browsing on any device, whether desktop, tablet, or
              smartphone. <br />
              <span className="border-b-[1px] border-primary">
                2. Real-time Updates:
              </span>{" "}
              Receive instant updates on new listings, price changes, and
              property availability. <br />
              <span className="border-b-[1px] border-primary">
                3. User Authentication:
              </span>{" "}
              <span className="border-b-[1px] border-primary"></span> Implement
              user authentication to allow users to create accounts, log in, and
              save their favorite properties or preferences.
            </p>

            <p className="pb-5">
              <span className="font-bold text-teal-500 uppercase">
                Used technology:
              </span>{" "}
              <br /> nodejs, javascript, firebase ,mongodb, react.js, firebase-,
              react-router-dom, tailwindCss, DaisyUi & MambaUi.
            </p>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center flex">
                <Link
                  href={`https://github.com/asshikhon/b9a11-restaurant-management-client`}
                  target="black"
                >
                          <button className="btn flex items-center gap-2 text-white bg-primary hover:bg-teal-800 border-0 text-base font-semibold mx-2 mb-2">
                  <FaGithub />   Github Link
                  </button>
                </Link>
                <Link
                  href={`https://b9a11-restaurant-management.web.app`}
                  target="black"
                >
                          <button className="btn flex items-center gap-2 text-white bg-primary hover:bg-teal-800 border-0 text-base font-semibold mx-2">
                  <FaLink /> Live Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* 3rd card */}
          <div className="group relative border border-primary rounded-xl p-8 overflow-hidden">
            <p className="text-center text-2xl mb-4">
              <span className="font-bold text-teal-500">PROJECT NAME:</span>{" "}
              TourismTrek
            </p>
            <p className="pb-3">
              <span className="font-bold text-teal-500 uppercase">
                Description:
              </span>{" "}
              Organize bookings, itineraries, and customer info. Add tourist spots and showcase your curated destination list seamlessly.
            </p>

            <p className="pb-3">
              <span className="font-bold text-teal-500 uppercase">
                Features:
              </span>{" "}
              <br />
              <span className="border-b-[1px] border-primary">
                1. Property Alerts:
              </span>{" "}
              Set up alerts to be notified when properties matching your criteria become available. <br />
              <span className="border-b-[1px] border-primary">
                2. Social Media Integration:
              </span>{" "}
              Stay connected and updated on the latest news and listings through seamless integration with popular social media platforms. <br />
              <span className="border-b-[1px] border-primary">
                3. Third-party Sign-in:
              </span>{" "}
              <span className="border-b-[1px] border-primary"></span> Implement
              Sign in with Google or GitHub for added convenience.
            </p>

            <p className="pb-5">
              <span className="font-bold text-teal-500 uppercase">
                Used technology:
              </span>{" "}
              <br /> nodejs, javascript, firebase ,mongodb, react.js, firebase-,
              react-router-dom, tailwindCss, DaisyUi & MambaUi.
            </p>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center flex ">
                <Link
                  href={`https://github.com/asshikhon/b9a10-tourism-management-client`}
                  target="black"
                >
                  <button className="btn flex items-center gap-2 text-white bg-primary hover:bg-teal-800 border-0 text-base font-semibold mx-2 mb-2">
                  <FaGithub />   Github Link
                  </button>
                </Link>
                <Link
                  href={`https://tourism-management-ce48d.web.app`}
                  target="black"
                >
                  <button className="btn flex items-center gap-2 text-white bg-primary hover:bg-teal-800 border-0 text-base font-semibold mx-2">
                  <FaLink /> Live Link
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
