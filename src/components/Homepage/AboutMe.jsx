/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import 'animate.css';



const AboutMe = () => {
  // Assuming the profile image is located in the public/images directory
  const profileImagePath = '/images/banner.jpg';
  const sectionStyle = {
    background: 'linear-gradient(180deg, #000 0%, rgba(37, 37, 37, 1) 100%)',
    color: 'white', 
 
  };
  return (
<section id='about' style={sectionStyle} className="py-20">
      <div className='container mx-auto px-3 md:px-0 flex gap-10 flex-col-reverse  md:flex-row items-center'>
        {/* Profile Image */}
        <div className='w-full md:w-1/3 flex flex-col justify-center md:items-start items-center mb-8 md:mb-0'>
          {/* Dynamically import image */}
          <Image
        
            src={profileImagePath}
            alt="GitHub Profile"
            className='w-[330px] animate__animated animate__fadeInTopRight h-[330px] object-cover border-0 rounded-full'
            width={330}
          
            height={330}
          />

        </div>

        {/* About Me Details */}
        <div className='w-full md:w-2/3 animate__animated animate__slideInLeft'>
          <h2 className='text-4xl font-bold text-teal-500 mb-4'>ABOUT ME</h2>
          <p className='text-lg leading-relaxed'>
          Hello! I am a dedicated junior MERN Stack Developer currently pursuing a Bachelor's degree in Mathematics at Bhawal Badre Alam Government College. I have a strong foundation in HTML, CSS, JavaScript, and React JS, and I excel at creating responsive and user-friendly websites.

I am passionate about web development and eager to leverage my technical skills to contribute to innovative projects and dynamic teams. My ambition is to grow professionally in a forward-thinking company where I can continually develop my expertise and help achieve organizational goals.

I thrive in competitive environments that challenge me to push the boundaries of my capabilities. My ultimate aim is to become a valued contributor to the tech community, continuously learning and evolving while making significant impacts through my work.
          </p>
          <div className='mt-8 space-y-2'>
            <p>
              <span className='font-bold text-teal-500'>NAME:</span> Md. Shamim Al Mahmud Shikhon
            </p>
            <p>
              <span className='font-bold text-teal-500'>Age:</span> 24 years
              old
            </p>
            <p>
              <span className='font-bold text-teal-500'>NATIONALITY:</span>{" "}
              Bangladeshi
            </p>
            <p>
              <span className='font-bold text-teal-500'>ADDRESS: </span>
              Gazipur, Dhaka, Bangladesh
            </p>
            <p>
              <span className='font-bold text-teal-500'>PHONE:</span> 01631672973
            </p>
            <p>
              <span className='font-bold text-teal-500'>E-MAIL:</span>{" "}
              asshikhon@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* My Interests */}
      {/* <div className='container mx-auto mt-20'>
        <h3 className='text-3xl font-bold text-teal-500 mb-4 text-center'>
          MY INTERESTS
        </h3>
        <div className='flex justify-center space-x-8'>
          <div className='text-center'>
            <i className='fas fa-plane text-4xl text-teal-500 mb-2'></i>
            <p>Programming</p>
          </div>
          <div className='text-center'>
            <i className='fas fa-plane text-4xl text-teal-500 mb-2'></i>
            <p>Traveling</p>
          </div>
          <div className='text-center'>
            <i className='fas fa-coffee text-4xl text-teal-500 mb-2'></i>
            <p>Coffee</p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default AboutMe;
