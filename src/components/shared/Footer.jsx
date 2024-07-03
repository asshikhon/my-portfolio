import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#000000] text-[#FFFFFF] py-6'>
      <div  className='container mx-auto text-center animate__animated animate__fadeInDown'>
        <div className='mb-4 flex items-center gap-2 justify-center'>

          <a
            href='https://www.facebook.com/asshikhon'
            className='text-[#FFF] hover:text-primary mx-2 h-5 w-[18px]'>
            <FontAwesomeIcon icon={faFacebookF} size='lg' className='h-6 w-[28px]' />
          </a>
          <a
            href='https://www.linkedin.com/in/asshikhon'
            className='text-[#FFF] hover:text-primary mx-2 h-5 w-[18px]'>
            <FontAwesomeIcon icon={faLinkedinIn} size='lg' className='h-6 w-[28px]' />
          </a>
          <a
            href='https://github.com/asshikhon'
            className='text-[#FFF] hover:text-primary mx-2 '>
            <FontAwesomeIcon icon={faGithub} size='lg' className='h-6 w-[28px]' />
          </a>
        </div>
        <p className='text-[#FFF] hover:text-primary '>
          &copy; {currentYear} | All Rights Reserved by Shamim
        </p>
      </div>
    </footer>
  );
};

export default Footer;
