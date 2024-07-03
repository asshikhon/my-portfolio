"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const sectionStyle = {
    background: "linear-gradient(180deg, #252525 0%, #000 100%)",
    color: "white",
    padding: "20px 0", // Adjust padding as needed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send"; // Corrected endpoint

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      } else {
        console.error("Error sending email:", resData.error);
        setError(resData.error);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Fetch error occurred");
    }
  };

  return (
    <section id="contact" style={sectionStyle} className="">
      <div className="container mx-auto flex gap-16 flex-col md:flex-row justify-between items-start py-12">
        <div className="md:w-1/2">
          <h5 className="text-4xl font-bold text-primary my-4">
            Let&apos;s Connect
          </h5>
          <p className="text-[#FFF] mb-8">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/asshikhon">
              <FaGithub className="text-3xl mr-3 hover:bg-primary rounded-full" />
            </Link>
            <Link href="https://www.linkedin.com/in/asshikhon">
              <FaLinkedin className="text-3xl hover:bg-primary rounded-full" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          {emailSubmitted ? (
            <p className="text-green-500 text-4xl mt-12 ">
              Email sent successfully!
            </p>
          ) : (
            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-primary block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-primary placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="jacob@google.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-primary block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-primary placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-primary block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-primary placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-teal-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
              {error && (
                <p className="text-red-500 text-sm mt-2">
                  Error: {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
