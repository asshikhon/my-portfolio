"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Swal from "sweetalert2";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const sectionStyle = {
    background: "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)",
    color: "#f0f0f0",
    padding: "20px 0", // Adjust padding as needed
  };

  const inputStyle = {
    backgroundColor: "#2c2c2c",
    borderColor: "#4a90e2",
    color: "#f0f0f0",
    placeholderColor: "#a0a0a0",
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
        Swal.fire({
          
          icon: "success",
          title: "Email Sent Successfully!",
          text: "Thank you for reaching out. I will get back to you shortly.",
          showConfirmButton: false,
          timer: 2000,
          background: "#0A5C53",
          color: "#FFF",
        });

        setEmailSubmitted(true);
      } else {
        setError(resData.error);
      }
    } catch (error) {
      setError("Fetch error occurred");
    }
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div className="container mx-auto flex flex-col md:flex-row gap-16 px-3 md:px-0 justify-between items-start py-12 md:pb-28">
        <div className="md:w-1/2 w-full">
          <h5 className="text-4xl font-bold text-primary my-4">
            Let&apos;s Connect
          </h5>
          <p className="text-[#f0f0f0] mb-8">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/asshikhon">
              <FaGithub className="text-3xl mr-3 hover:text-primary rounded-full" />
            </Link>
            <Link href="https://www.linkedin.com/in/asshikhon">
              <FaLinkedin className="text-3xl hover:text-primary rounded-full" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          {emailSubmitted ? (
            <p className="text-green-500 text-4xl mt-12 ">
              Email sent successfully!
            </p>
          ) : (
            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
              <div className="mb-6 w-full">
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
                  style={inputStyle}
                  className="bg-[#2c2c2c] border border-primary placeholder-[#a0a0a0] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="jacob@gmail.com"
                />
              </div>
              <div className="mb-6 w-full">
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
                  style={inputStyle}
                  className="bg-[#2c2c2c] border border-primary placeholder-[#a0a0a0] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Please enter your Subject"
                />
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="message"
                  className="text-primary block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  style={inputStyle}
                  className="bg-[#2c2c2c] border border-primary placeholder-[#a0a0a0] text-gray-100 text-sm rounded-lg block w-full p-2.5"
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
