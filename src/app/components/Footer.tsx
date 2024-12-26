import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 p-6 text-black animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <p className="font-medium mb-2 text-lg animate-text-fade-in">
            &copy; 2024  | All rights Reserved
          </p>
          <p className="text-sm animate-text-fade-in">Client-side and Server-side Data Fetching</p>
        </div>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/afsheen-imran-b623a42a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300 flex items-center space-x-2"
          >
            <FaLinkedin className="text-xl" />
            <span className="hidden sm:inline text-lg">LinkedIn</span>
          </a>
        </div>
        <div className="mt-4 text-sm text-center">
          <p className="animate-text-fade-in">If you have any questions, feel free to reach out at:</p>
          <p>
            <a
              href="mailto:afsheen6441@gmail.com"
              className="text-black hover:text-blue-500 transition"
            >
              afsheen6441@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;