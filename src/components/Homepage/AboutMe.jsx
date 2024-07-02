import Image from "next/image";

const AboutMe = () => {
  // Assuming the profile image is located in the public/images directory
  const profileImagePath = '/images/githubProfile.jpg';

  return (
    <section id='about' className='bg-gray-900 text-white py-20'>
      <div className='container mx-auto flex flex-col md:flex-row items-center gap-6'>
        {/* Profile Image */}
        <div className='w-full md:w-1/3 flex flex-col justify-center md:items-start items-center mb-8 md:mb-0'>
          {/* Dynamically import image */}
          <Image
            src={profileImagePath}
            alt="GitHub Profile"
            className='w-64 h-64 object-cover rounded-full border-4 border-teal-500'
            width={300}
          
            height={200}
          />
          <a
            href='/path/to/resume.pdf' // Replace with actual resume link
            className='mt-4 px-4 py-2 bg-teal-500 text-white rounded shadow-lg hover:bg-teal-700 w-48 text-center md:ml-[8%]'
            download
          >
            Download Resume
          </a>
        </div>

        {/* About Me Details */}
        <div className='w-full md:w-2/3'>
          <h2 className='text-4xl font-bold text-teal-500 mb-4'>ABOUT ME</h2>
          <p className='text-lg leading-relaxed'>
            Hello! I am a junior MERN Stack Developer currently studying B.Sc
            IN CSE at Uttara University. I specialize in HTML, CSS,
            JavaScript, and React JS, creating responsive, user-friendly
            websites. I aim to leverage my technical skills and passion for
            web development to contribute to a dynamic team and grow
            professionally in a forward-thinking company. My goal is to work
            in a competitive environment where I can develop as a professional
            and help achieve the organization&apos;s goals.
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
      <div className='container mx-auto mt-20'>
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
      </div>
    </section>
  );
};

export default AboutMe;
