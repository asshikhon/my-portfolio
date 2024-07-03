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
    <footer className='bg-[#000000] text-[#FFF] py-6'>
      <div className='container mx-auto text-center'>
        <div className='mb-4'>

          <a
            href='https://www.facebook.com/asshikhon'
            className='text-[#FFF] hover:text-primary mx-2'>
            <FontAwesomeIcon icon={faFacebookF} size='lg' />
          </a>
          <a
            href='https://www.linkedin.com/in/asshikhon'
            className='text-[#FFF] hover:text-primary mx-2'>
            <FontAwesomeIcon icon={faLinkedinIn} size='lg' />
          </a>
          <a
            href='https://github.com/asshikhon'
            className='text-[#FFF] hover:text-primary mx-2'>
            <FontAwesomeIcon icon={faGithub} size='lg' />
          </a>
        </div>
        <p className='text-[#FFF] hover:text-primary'>
          &copy; {currentYear} | All Rights Reserved by Shamim
        </p>
      </div>
    </footer>
  );
};

export default Footer;
