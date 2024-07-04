"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineAddReaction } from "react-icons/md";
import { SiSteamworks } from "react-icons/si";
import { GiSatelliteCommunication } from "react-icons/gi";
import { GiThink } from "react-icons/gi";
import { IoIosTime } from "react-icons/io";
import Image from "next/image";

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
    <section id="skill" style={sectionStyle} className="">
      <div className="container mx-auto pt-8 px-3 md:px-0 mb-[140px]">
        <h2 className="text-[40px] font-bold  text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <hr className="mb-10 w-[240px] text-center block mx-auto mt-2 h-[2px] font-semibold text-white" />
        <p className="text-center w-[70%] md:w-[40%] block mx-auto mb-10">
          We transform your ideas and desires into a distinctive web project
          that inspires both you and your customers
        </p>
        {/* Your content here */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1st card */}
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate"
          >
            <div className="text-center text-wrap duration-300 group-hover:scale-125">
              <h1
                data-aos="fade-up-right"
                data-aos-duration="1500"
                className="text-xl md:text-2xl group-hover:text-whiteColor"
              >
                Html
              </h1>
              <p
                data-aos="fade-up-left"
                data-aos-duration="1500"
                className="text-md md:text-lg group-hover:text-whiteColor mt-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 120 120"
                  fill="none"
                >
                  <path
                    d="M22.1325 102.004L13.7063 7.5H106.294L97.8563 101.989L59.9438 112.5L22.1325 102.004Z"
                    fill="#E44F26"
                  />
                  <path
                    d="M60 104.467L90.6375 95.9737L97.845 15.2287H60V104.467Z"
                    fill="#F1662A"
                  />
                  <path
                    d="M60 50.2763H44.6625L43.605 38.4075H60V26.8163H30.9375L31.215 29.9288L34.0613 61.8675H60V50.2763ZM60 80.3775L59.9475 80.3925L47.04 76.9088L46.215 67.665H34.5787L36.2025 85.86L59.9475 92.4525L60 92.4375V80.3775Z"
                    fill="#EBEBEB"
                  />
                  <path
                    d="M59.9587 50.2763V61.8675H74.2312L72.8887 76.9013L59.9587 80.3888V92.4488L83.7225 85.86L83.895 83.9025L86.6175 53.3888L86.9025 50.2763H59.9587ZM59.9587 26.8163V38.4075H87.9562L88.1887 35.805L88.7175 29.9288L88.995 26.8163H59.9587Z"
                    fill="white"
                  />
                </svg>
              </p>
            </div>
          </div>
          {/* 2nd card */}
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate"
          >
            <div className="text-center text-wrap duration-300 group-hover:scale-125">
              <h1
                data-aos="fade-up-right"
                data-aos-duration="1500"
                className="text-xl md:text-2xl group-hover:text-whiteColor"
              >
                Css
              </h1>
              <p
                data-aos="fade-up-left"
                data-aos-duration="1500"
                className="text-md md:text-lg group-hover:text-whiteColor mt-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 120 119"
                  fill="none"
                >
                  <path
                    d="M22.1325 101.154L13.71 7.4375H106.29L97.8562 101.139L59.9437 111.562L22.1325 101.154Z"
                    fill="#1572B6"
                  />
                  <path
                    d="M60 103.597L90.6375 95.174L97.845 15.1018H60V103.597Z"
                    fill="#33A9DC"
                  />
                  <path
                    d="M60 49.054H75.3375L76.395 37.2842H60V25.7895H89.0625L88.785 28.8724L85.9387 60.5487H60V49.054Z"
                    fill="white"
                  />
                  <path
                    d="M60.0713 78.9044L60.0188 78.9193L47.1113 75.4609L46.2863 66.2942H34.65L36.2738 84.3413L60.015 90.8788L60.0713 90.8639V78.9044Z"
                    fill="#EBEBEB"
                  />
                  <path
                    d="M74.3513 60.0615L72.9563 75.4534L60.03 78.9119V90.8714L83.79 84.3412L83.9663 82.4001L85.98 60.0615H74.3513Z"
                    fill="white"
                  />
                  <path
                    d="M60.0413 25.7895V37.2842H32.0438L31.8113 34.6996L31.2825 28.8724L31.005 25.7895H60.0413ZM60 49.054V60.5487H47.2538L47.0213 57.9641L46.4963 52.1369L46.2188 49.054H60Z"
                    fill="#EBEBEB"
                  />
                </svg>
              </p>
            </div>
          </div>

          {/* 3th card */}
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate"
          >
            <div className="text-center text-wrap duration-300 group-hover:scale-125">
              <h1
                data-aos="fade-up-right"
                data-aos-duration="1500"
                className="text-xl md:text-2xl group-hover:text-whiteColor"
              >
                Bootstrap
              </h1>
              <p
                data-aos="fade-up-left"
                data-aos-duration="1500"
                className="text-md md:text-lg group-hover:text-whiteColor mt-3 ml-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="90"
                  viewBox="0 0 88 87"
                  fill="none"
                >
                  <g clip-path="url(#clip0_14_49)">
                    <path
                      d="M0 75.7821C0 81.9781 5.08028 87 11.3468 87H76.6528C82.9204 87 88 81.9774 88 75.7821V11.2182C88 5.02187 82.9197 0 76.6532 0H11.3472C5.07959 0 0 5.02255 0 11.2179V75.7818V75.7821Z"
                      fill="#563D7C"
                    />
                    <path
                      d="M36.4919 38.4832V26.1629H47.4613C48.5063 26.1629 49.5135 26.2489 50.4836 26.4212C51.4536 26.5931 52.312 26.9003 53.0583 27.3431C53.8042 27.786 54.4013 28.4007 54.8492 29.1875C55.2968 29.9746 55.5209 30.9829 55.5209 32.2121C55.5209 34.4255 54.8492 36.0241 53.5058 37.0076C52.1628 37.9915 50.4464 38.4832 48.3568 38.4832H36.4919ZM24.7759 17.1621V69.8379H50.5956C52.9837 69.8379 55.3095 69.5429 57.5731 68.9526C59.8367 68.3623 61.8514 67.4525 63.6176 66.223C65.3834 64.9934 66.789 63.407 67.8337 61.4645C68.8787 59.5216 69.4008 57.2222 69.4008 54.5663C69.4008 51.2709 68.5923 48.4553 66.9757 46.1192C65.3587 43.7828 62.9084 42.1474 59.6249 41.2129C62.0129 40.0819 63.8166 38.6307 65.0355 36.8601C66.2541 35.0895 66.8636 32.8765 66.8636 30.2203C66.8636 27.7612 66.4532 25.6956 65.6323 24.0232C64.8114 22.3512 63.6547 21.0108 62.1621 20.0025C60.6699 18.9942 58.879 18.2686 56.7893 17.8262C54.7 17.3833 52.3866 17.1621 49.8493 17.1621H24.7759ZM36.4919 60.8371V46.3771H49.2523C51.7895 46.3771 53.8293 46.9548 55.3717 48.111C56.9138 49.2668 57.6851 51.1971 57.6851 53.9023C57.6851 55.2797 57.4486 56.4107 56.976 57.296C56.5033 58.1813 55.8691 58.8823 55.073 59.3986C54.2772 59.9151 53.3566 60.2839 52.312 60.5054C51.267 60.7263 50.1728 60.8371 49.0285 60.8371H36.4919Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14_49">
                      <rect width="88" height="87" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </p>
            </div>
          </div>
          {/* 4th card */}
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate"
          >
            <div className="text-center text-wrap duration-300 group-hover:scale-125">
              <h1
                data-aos="fade-up-right"
                data-aos-duration="1500"
                className="text-xl md:text-2xl group-hover:text-whiteColor"
              >
                Tailwind Css
              </h1>
              <p
                data-aos="fade-up-left"
                data-aos-duration="1500"
                className="text-md md:text-lg group-hover:text-whiteColor ml-2 mt-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="131"
                  height="131"
                  viewBox="0 0 131 131"
                  fill="none"
                >
                  <path
                    d="M36.8438 56.0844C40.6646 40.801 50.2167 33.1594 65.5 33.1594C88.425 33.1594 91.2906 50.3531 102.753 53.2187C110.395 55.1292 117.081 52.2635 122.812 44.6219C118.992 59.9052 109.44 67.5469 94.1562 67.5469C71.2313 67.5469 68.3656 50.3531 56.9031 47.4875C49.2615 45.5771 42.575 48.4427 36.8438 56.0844ZM8.1875 90.4719C12.0083 75.1885 21.5604 67.5469 36.8438 67.5469C59.7687 67.5469 62.6344 84.7406 74.0969 87.6062C81.7385 89.5167 88.425 86.651 94.1562 79.0094C90.3354 94.2927 80.7833 101.934 65.5 101.934C42.575 101.934 39.7094 84.7406 28.2469 81.875C20.6052 79.9646 13.9187 82.8302 8.1875 90.4719Z"
                    fill="#44A8B3"
                  />
                </svg>
              </p>
            </div>
          </div>

          {/* 5rd card */}
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate"
          >
            <div className="text-center text-wrap duration-300 group-hover:scale-125">
              <h1
                data-aos="fade-up-right"
                data-aos-duration="1500"
                className="text-xl md:text-2xl group-hover:text-whiteColor"
              >
                Javascript
              </h1>
              <p
                data-aos="fade-up-left"
                data-aos-duration="1500"
                className="text-md md:text-lg group-hover:text-whiteColor mt-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 120 120"
                  fill="none"
                >
                  <path d="M7.5 7.5H112.5V112.5H7.5V7.5Z" fill="#F5DE19" />
                  <path
                    d="M78.0338 89.5312C78.9284 91.3485 80.3183 92.8759 82.0434 93.9375C83.7684 94.9991 85.7584 95.5515 87.7838 95.5313C91.8713 95.5313 94.485 93.4875 94.485 90.6562C94.485 87.2812 91.8 86.0738 87.3 84.105L84.8325 83.0475C77.7075 80.0138 72.9825 76.215 72.9825 68.1825C72.9825 60.7838 78.6075 55.1475 87.4313 55.1475C90.2877 54.9412 93.1416 55.5805 95.637 56.9856C98.1324 58.3907 100.159 60.4994 101.464 63.0488L93.75 67.98C93.2476 66.716 92.3728 65.6345 91.2416 64.879C90.1105 64.1236 88.7764 63.7298 87.4163 63.75C86.8229 63.6906 86.2236 63.7555 85.6567 63.9404C85.0897 64.1254 84.5675 64.4265 84.1234 64.8244C83.6792 65.2224 83.3228 65.7085 83.0769 66.2518C82.831 66.7951 82.7009 67.3837 82.695 67.98C82.695 70.9388 84.5288 72.1388 88.7625 73.98L91.23 75.0375C99.615 78.6338 104.355 82.2975 104.355 90.5363C104.355 99.42 97.3763 104.287 88.005 104.287C84.3537 104.52 80.713 103.691 77.5223 101.901C74.3317 100.11 71.7274 97.4342 70.0238 94.1963L78.0338 89.5312ZM43.1775 90.3863C44.7263 93.135 46.1363 95.46 49.5263 95.46C52.7663 95.46 54.8138 94.1925 54.8138 89.2612V55.71H64.68V89.3925C64.68 99.6075 58.68 104.257 49.9463 104.257C46.8591 104.426 43.7931 103.657 41.1513 102.051C38.5096 100.444 36.4157 98.0761 35.145 95.2575L43.1775 90.3863Z"
                    fill="black"
                  />
                </svg>
              </p>
            </div>
          </div>
          {/* 6th card */}
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate"
          >
            <div className="text-center text-wrap duration-300 group-hover:scale-125">
              <h1
                data-aos="fade-up-right"
                data-aos-duration="1500"
                className="text-xl md:text-2xl group-hover:text-whiteColor"
              >
                React
              </h1>
              <p
                data-aos="fade-up-left"
                data-aos-duration="1500"
                className="text-md md:text-lg group-hover:text-whiteColor mt-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 113 101"
                  fill="none"
                >
                  <g clip-path="url(#clip0_14_43)">
                    <path
                      d="M92.9055 32.7027C91.703 32.2887 90.4903 31.9051 89.2686 31.5523C89.4738 30.7106 89.6627 29.8792 89.8304 29.0623C92.5837 15.6484 90.7838 4.8418 84.6359 1.28376C78.7415 -2.1272 69.1015 1.4295 59.3658 9.93344C58.4063 10.773 57.4681 11.6368 56.552 12.524C55.9388 11.9341 55.3148 11.3556 54.6802 10.7888C44.4766 1.69618 34.2492 -2.13606 28.108 1.43216C22.2188 4.85376 20.4749 15.0127 22.9537 27.7254C23.2003 28.9844 23.4787 30.237 23.7887 31.4819C22.341 31.8947 20.9441 32.3342 19.6072 32.802C7.64431 36.9881 0.00463867 43.5483 0.00463867 50.3529C0.00463867 57.3808 8.20617 64.43 20.666 68.7044C21.6762 69.0495 22.6947 69.3692 23.7208 69.6634C23.3875 71.0042 23.0917 72.354 22.8336 73.7114C20.4705 86.2035 22.3159 96.1223 28.1892 99.5222C34.2554 103.033 44.4369 99.4248 54.3505 90.7268C55.1544 90.0197 55.9406 89.2925 56.7083 88.546C57.7003 89.5066 58.7188 90.4393 59.7626 91.343C69.3659 99.6365 78.85 102.985 84.7176 99.5762C90.7781 96.055 92.7479 85.3995 90.1906 72.4356C89.9891 71.42 89.7632 70.4094 89.5131 69.4047C90.2281 69.1921 90.9299 68.9733 91.614 68.7456C104.567 64.4384 112.995 57.4748 112.995 50.3529C112.995 43.5235 105.109 36.919 92.9055 32.7027ZM90.0961 64.1474C89.4782 64.3525 88.8444 64.5505 88.1982 64.7432C86.7682 60.1995 84.8385 55.3684 82.4768 50.3764C84.7304 45.5036 86.5859 40.734 87.9758 36.22C89.1317 36.5558 90.2533 36.9097 91.3346 37.2832C101.791 40.8961 108.168 46.2372 108.168 50.3529C108.168 54.7367 101.28 60.4277 90.0961 64.1474ZM85.4556 73.3765C86.5864 79.1087 86.7475 84.2916 85.9985 88.3435C85.3258 91.9844 83.9726 94.4115 82.2989 95.3839C78.7384 97.4526 71.1234 94.7637 62.9109 87.6707C61.94 86.8305 60.9926 85.9634 60.0698 85.0703C63.2538 81.5757 66.4356 77.5131 69.5411 73.0009C75.0035 72.5145 80.164 71.7189 84.8438 70.6331C85.0693 71.5426 85.2732 72.4573 85.4556 73.3765ZM38.5256 95.0264C35.0467 96.2592 32.2758 96.2946 30.6008 95.3254C27.0368 93.2624 25.5551 85.298 27.5761 74.6151C27.8164 73.3527 28.0914 72.0972 28.401 70.8502C33.0292 71.8779 38.1522 72.6168 43.6274 73.0624C46.7541 77.4776 50.0277 81.5358 53.327 85.0894C52.6258 85.7703 51.9081 86.4338 51.1744 87.0793C46.7903 90.9252 42.3973 93.654 38.5256 95.0264ZM22.2276 64.1204C16.718 62.2302 12.1679 59.7738 9.04919 57.0933C6.24649 54.6849 4.8319 52.2932 4.8319 50.3529C4.8319 46.2234 10.9656 40.9564 21.1961 37.3766C22.4377 36.9425 23.7371 36.5328 25.0855 36.1483C26.4996 40.7641 28.3543 45.5904 30.5924 50.4708C28.3251 55.4233 26.444 60.3267 25.0162 64.997C24.0796 64.7278 23.1498 64.4355 22.2276 64.1204ZM27.6909 26.7947C25.5674 15.9031 26.9776 7.68707 30.5267 5.62499C34.3066 3.42868 42.6652 6.56013 51.4754 14.4115C52.0499 14.9247 52.6151 15.4482 53.1707 15.9819C49.8878 19.52 46.6442 23.5481 43.5453 27.9371C38.2312 28.4315 33.1444 29.2253 28.4677 30.2889C28.1795 29.1311 27.9205 27.9661 27.6909 26.7951V26.7947ZM76.43 38.8739C75.3254 36.9589 74.1797 35.0679 72.9939 33.2024C76.599 33.66 80.0532 34.2673 83.2968 35.0098C82.3232 38.1426 81.1094 41.4175 79.6807 44.7753C78.6364 42.7867 77.5526 40.8191 76.43 38.8739ZM56.5542 19.4443C58.7805 21.8652 61.0103 24.5678 63.2035 27.5003C58.7545 27.2895 54.298 27.2886 49.849 27.4977C52.0443 24.5922 54.2931 21.8931 56.5542 19.4443ZM36.5509 38.9071C35.4424 40.8367 34.3788 42.792 33.3612 44.7713C31.9558 41.4255 30.7531 38.1355 29.7711 34.9584C32.9948 34.2346 36.4326 33.6427 40.0148 33.1936C38.8158 35.0705 37.6608 36.9754 36.5509 38.9067V38.9071ZM40.1176 67.8569C36.4168 67.4423 32.9273 66.8811 29.7044 66.1767C30.7019 62.9429 31.9311 59.5829 33.3669 56.1653C34.3886 58.1461 35.4566 60.1026 36.5699 62.0331C37.7148 64.0176 38.9003 65.9614 40.1176 67.8569ZM56.6875 81.6027C54.3995 79.1255 52.1176 76.3848 49.8891 73.4372C52.0527 73.5222 54.2582 73.5657 56.5 73.5657C58.803 73.5657 61.0796 73.5138 63.3204 73.4137C61.1202 76.4145 58.8988 79.1592 56.6875 81.6027ZM79.7262 55.9908C81.2365 59.446 82.5094 62.7883 83.5202 65.9667C80.2443 66.7171 76.7072 67.3214 72.9803 67.7701C74.1745 65.87 75.331 63.9462 76.449 61.9998C77.5857 60.0215 78.6783 58.0179 79.7262 55.9908ZM72.2679 59.5794C70.5563 62.5635 68.7486 65.4909 66.8474 68.3571C63.4037 68.6019 59.9523 68.7235 56.5 68.7216C52.9836 68.7216 49.5634 68.6118 46.2699 68.3974C44.3191 65.5378 42.4769 62.6053 40.747 59.6059H40.7475C39.0258 56.6225 37.4176 53.5745 35.9264 50.4685C37.4138 47.3619 39.0171 44.3124 40.7329 41.3267L40.7325 41.3272C42.4476 38.3407 44.2752 35.4206 46.2112 32.5734C49.5713 32.3182 53.0171 32.1853 56.4995 32.1853H56.5C59.9983 32.1853 63.4484 32.3196 66.8077 32.5765C68.7242 35.4195 70.5401 38.3295 72.252 41.301C73.9735 44.2802 75.598 47.3147 77.123 50.3999C75.6137 53.5166 73.9943 56.5784 72.2679 59.5794ZM82.2252 5.48058C86.0086 7.67068 87.4801 16.5024 85.1029 28.0842C84.9511 28.8231 84.7807 29.5757 84.5953 30.339C79.9071 29.2528 74.8168 28.4452 69.4873 27.9433C66.3827 23.506 63.1655 19.4717 59.936 15.9793C60.7824 15.1604 61.6489 14.3628 62.5348 13.5872C70.8767 6.30142 78.673 3.4247 82.2252 5.48058ZM56.5 40.2263C62.0723 40.2263 66.5897 44.7603 66.5897 50.3529C66.5897 55.9456 62.0723 60.4795 56.5 60.4795C50.9277 60.4795 46.4102 55.9456 46.4102 50.3529C46.4102 44.7603 50.9277 40.2263 56.5 40.2263Z"
                      fill="#00D8FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14_43">
                      <rect width="113" height="101" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </p>
            </div>
          </div>

          {/* 7th card */}
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate"
          >
            <div className="text-center text-wrap duration-300 group-hover:scale-125">
              <h1
                data-aos="fade-up-right"
                data-aos-duration="1500"
                className="text-xl md:text-2xl group-hover:text-whiteColor"
              >
                NodeJS
              </h1>
              <p
                data-aos="fade-up-left"
                data-aos-duration="1500"
                className="text-md md:text-lg group-hover:text-whiteColor ml-2 mt-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 128 128"
                  fill="none"
                >
                  <path
                    d="M112.771 30.334L68.674 4.72902C65.893 3.14502 62.272 3.14502 59.469 4.72902L14.901 30.334C12.031 31.985 10 35.088 10 38.407V89.549C10 92.868 12.084 95.972 14.954 97.632L26.729 104.32C32.357 107.092 34.346 107.092 36.907 107.092C45.24 107.092 50 102.053 50 93.264V42.774C50 42.061 49.629 41 48.929 41H43.306C42.594 41 41 42.061 41 42.773V93.263C41 97.159 37.476 101.036 30.89 97.743L18.723 90.73C18.299 90.5 18 90.037 18 89.549V38.407C18 37.925 18.555 37.441 18.982 37.194L63.406 11.633C63.821 11.398 64.431 11.398 64.845 11.633L108.727 37.188C109.147 37.441 108.999 37.91 108.999 38.407V89.549C108.999 90.037 109.182 90.512 108.767 90.747L64.681 116.323C64.303 116.55 63.834 116.55 63.42 116.323L52.113 109.574C51.772 109.376 51.367 109.305 51.04 109.488C47.894 111.271 47.314 111.508 44.363 112.531C43.637 112.784 42.566 113.223 44.773 114.46L59.571 123.214C60.9838 124.03 62.5865 124.46 64.218 124.46C65.86 124.46 67.468 124.034 68.885 123.214L112.77 97.632C115.64 95.96 117 92.868 117 89.549V38.407C117 35.088 115.64 31.993 112.771 30.334ZM77.91 81.445C66.184 81.445 63.601 78.21 62.74 72.379C62.64 71.751 62.107 71 61.468 71H55.737C55.028 71 54.458 71.86 54.458 72.566C54.458 80.032 58.517 89.078 77.911 89.078C91.95 89.078 99.999 83.623 99.999 73.969C99.999 64.397 93.532 61.885 79.917 60.083C66.155 58.264 64.757 57.345 64.757 54.121C64.757 51.463 65.941 47.918 76.131 47.918C85.236 47.918 88.592 49.872 89.973 56.009C90.091 56.586 90.618 57 91.213 57H96.967C97.321 57 97.659 56.857 97.907 56.604C98.147 56.332 98.274 55.991 98.242 55.625C97.351 45.057 90.33 40.132 76.13 40.132C63.499 40.132 55.964 45.466 55.964 54.407C55.964 64.105 63.461 66.785 75.586 67.984C90.091 69.406 91.219 71.526 91.219 74.379C91.219 79.334 87.241 81.445 77.91 81.445Z"
                    fill="#83CD29"
                  />
                </svg>
              </p>
            </div>
          </div>
          {/* 8th card */}
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate"
          >
            <div className="text-center text-wrap duration-300 group-hover:scale-125">
              <h1
                data-aos="fade-up-right"
                data-aos-duration="1500"
                className="text-xl md:text-2xl group-hover:text-whiteColor"
              >
                NextJS
              </h1>
              <p
                data-aos="fade-up-left"
                data-aos-duration="1500"
                className="text-md md:text-lg group-hover:text-whiteColor ml-2 mt-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="90"
                  viewBox="0 0 128 128"
                  fill="none"
                >
                  <g clip-path="url(#clip0_207_917)">
                    <path
                      d="M64 0C28.7 0 0 28.7 0 64C0 99.3 28.7 128 64 128C75.2 128 85.7 125.1 94.8 120.1L48.4 55.3V91.9H41.6V41.8H48.4L98.9 117.6C116.4 106.2 128 86.5 128 64C128 28.7 99.3 0 64 0ZM86.1 84.6L78.6 73.3V41.8H86.1V84.6Z"
                      fill="#DDDBDB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_207_917">
                      <rect width="128" height="128" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </p>
            </div>
          </div>
          {/* 9th card */}
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate"
          >
            <div className="text-center text-wrap duration-300 group-hover:scale-125">
              <h1
                data-aos="fade-up-right"
                data-aos-duration="1500"
                className="text-xl md:text-2xl group-hover:text-whiteColor"
              >
                MongoDB
              </h1>
              <p
                data-aos="fade-up-left"
                data-aos-duration="1500"
                className="text-md md:text-lg group-hover:text-whiteColor ml-2 mt-3"
              >
                <Image
                  src={`https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg`}
                  alt="mongoDb"
                  width={100}
                  height={100}
                />
              </p>
            </div>
          </div>
          {/* 10th card */}
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate"
          >
            <div className="text-center text-wrap duration-300 group-hover:scale-125">
              <h1
                data-aos="fade-up-right"
                data-aos-duration="1500"
                className="text-xl md:text-2xl group-hover:text-whiteColor"
              >
                Firebase
              </h1>
              <p
                data-aos="fade-up-left"
                data-aos-duration="1500"
                className="text-md md:text-lg group-hover:text-whiteColor ml-5 mt-3"
              >
                <Image
                  src={`https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg`}
                  alt="mongoDb"
                  width={100}
                  height={100}
                />
              </p>
            </div>
          </div>
          {/* 11th card */}
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate"
          >
            <div className="text-center text-wrap duration-300 group-hover:scale-125">
              <h1
                data-aos="fade-up-right"
                data-aos-duration="1500"
                className="text-xl md:text-2xl group-hover:text-whiteColor"
              >
                Vs Code Studio
              </h1>
              <p
                data-aos="fade-up-left"
                data-aos-duration="1500"
                className="text-md md:text-lg group-hover:text-whiteColor ml-10 mt-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="95"
                  height="100"
                  viewBox="0 0 112 112"
                  fill="none"
                >
                  <path
                    d="M101.535 17.605L81.3541 7.88899C80.2144 7.33948 78.932 7.15814 77.6847 7.37011C76.4373 7.58208 75.2868 8.17686 74.3926 9.07199L8.3301 69.3C7.52857 70.0273 7.04878 71.0432 6.99627 72.1243C6.94376 73.2053 7.32283 74.2629 8.0501 75.0645C8.1376 75.159 8.2251 75.25 8.3196 75.334L13.7131 80.234C14.4179 80.8754 15.325 81.2497 16.2771 81.2919C17.2291 81.3341 18.1658 81.0416 18.9246 80.465L98.4971 20.125C99.0981 19.6689 99.8145 19.3897 100.566 19.3186C101.317 19.2476 102.073 19.3877 102.749 19.7231C103.425 20.0585 103.993 20.5758 104.391 21.217C104.789 21.8581 105 22.5975 105 23.352V23.1175C105 21.9656 104.675 20.8372 104.062 19.862C103.449 18.8868 102.573 18.1045 101.535 17.605Z"
                    fill="#0065A9"
                  />
                  <path
                    d="M101.535 94.395L81.3541 104.115C80.2141 104.662 78.9321 104.843 77.6851 104.631C76.4381 104.419 75.2876 103.825 74.3926 102.932L8.3301 42.7C7.52857 41.9727 7.04878 40.9568 6.99627 39.8758C6.94376 38.7947 7.32283 37.7371 8.0501 36.9355C8.1376 36.841 8.2251 36.75 8.3196 36.666L13.7131 31.766C14.4186 31.1219 15.3278 30.7459 16.2822 30.7037C17.2366 30.6615 18.1755 30.9557 18.9351 31.535L98.4971 91.875C99.0981 92.3311 99.8145 92.6104 100.566 92.6814C101.317 92.7524 102.073 92.6123 102.749 92.2769C103.425 91.9415 103.993 91.4242 104.391 90.783C104.789 90.1419 105 89.4025 105 88.648V88.9C104.996 90.0488 104.669 91.1733 104.057 92.1451C103.444 93.1168 102.57 93.8965 101.535 94.395Z"
                    fill="#007ACC"
                  />
                  <path
                    d="M81.3539 104.115C80.2139 104.662 78.9319 104.843 77.6849 104.631C76.4379 104.419 75.2874 103.825 74.3924 102.932C74.895 103.428 75.5329 103.764 76.226 103.899C76.9192 104.034 77.6368 103.962 78.2889 103.691C78.941 103.42 79.4987 102.963 79.892 102.376C80.2853 101.79 80.4968 101.1 80.4999 100.394V11.606C80.5005 10.8965 80.2905 10.2028 79.8965 9.61277C79.5025 9.02274 78.9423 8.56291 78.2867 8.29155C77.6312 8.02019 76.9098 7.9495 76.2141 8.08843C75.5183 8.22737 74.8795 8.56968 74.3784 9.072C75.2728 8.1772 76.423 7.58239 77.6702 7.36983C78.9173 7.15727 80.1997 7.33747 81.3399 7.8855L101.517 17.5875C102.559 18.0845 103.438 18.8658 104.054 19.8412C104.67 20.8165 104.998 21.9463 105 23.1V88.9C105 90.0528 104.675 91.1823 104.061 92.1582C103.447 93.1341 102.571 93.9168 101.531 94.416L81.3539 104.115Z"
                    fill="#1F9CF0"
                  />
                </svg>
              </p>
            </div>
          </div>
          {/* 12th card */}
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="bg-sectionColor p-4 rounded-xl w-full h-52 grid place-content-center border overflow-hidden duration-300 group hover:bg-[#0b5f55] hover:border-0 dark:hover:border-primaryColorLight aos-init aos-animate"
          >
            <div className="text-center text-wrap duration-300 group-hover:scale-125">
              <h1
                data-aos="fade-up-right"
                data-aos-duration="1500"
                className="text-xl md:text-2xl group-hover:text-whiteColor"
              >
                GitHub
              </h1>
              <p
                data-aos="fade-up-left"
                data-aos-duration="1500"
                className="text-md md:text-lg group-hover:text-whiteColor ml-2 mt-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="88"
                  height="88"
                  viewBox="0 0 88 88"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M44 0C19.69 0 0 19.69 0 44C0 63.47 12.595 79.915 30.085 85.745C32.285 86.13 33.11 84.81 33.11 83.655C33.11 82.61 33.055 79.145 33.055 75.46C22 77.495 19.14 72.765 18.26 70.29C17.765 69.025 15.62 65.12 13.75 64.075C12.21 63.25 10.01 61.215 13.695 61.16C17.16 61.105 19.635 64.35 20.46 65.67C24.42 72.325 30.745 70.455 33.275 69.3C33.66 66.44 34.815 64.515 36.08 63.415C26.29 62.315 16.06 58.52 16.06 41.69C16.06 36.905 17.765 32.945 20.57 29.865C20.13 28.765 18.59 24.255 21.01 18.205C21.01 18.205 24.695 17.05 33.11 22.715C36.63 21.725 40.37 21.23 44.11 21.23C47.85 21.23 51.59 21.725 55.11 22.715C63.525 16.995 67.21 18.205 67.21 18.205C69.63 24.255 68.09 28.765 67.65 29.865C70.455 32.945 72.16 36.85 72.16 41.69C72.16 58.575 61.875 62.315 52.085 63.415C53.68 64.79 55.055 67.43 55.055 71.555C55.055 77.44 55 82.17 55 83.655C55 84.81 55.825 86.185 58.025 85.745C66.7597 82.796 74.3497 77.1822 79.7268 69.6937C85.1039 62.2052 87.9974 53.219 88 44C88 19.69 68.31 0 44 0Z"
                    fill="#FFFEFE"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
