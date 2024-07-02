import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-6 '>
      <div className='container mx-auto text-center'>
        <div className='mb-4'>
          <a
            href='https://twitter.com'
            className='text-gray-400 hover:text-white mx-2'>
            <FontAwesomeIcon icon={faTwitter} size='lg' />
          </a>
          <a
            href='https://facebook.com'
            className='text-gray-400 hover:text-white mx-2'>
            <FontAwesomeIcon icon={faFacebookF} size='lg' />
          </a>
          <a
            href='https://linkedin.com'
            className='text-gray-400 hover:text-white mx-2'>
            <FontAwesomeIcon icon={faLinkedinIn} size='lg' />
          </a>
          <a
            href='https://github.com'
            className='text-gray-400 hover:text-white mx-2'>
            <FontAwesomeIcon icon={faGithub} size='lg' />
          </a>
        </div>
        <p className='text-gray-500'>
          &copy; 2024 Oliver Queen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
