import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            {/* Add social links here if needed */}
          </div>
          <p className="mt-8 text-center text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Bozorgi Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
