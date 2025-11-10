import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          We are always interested in connecting with innovative entrepreneurs and potential partners.
        </p>
        <div className="mt-8">
          <a
            href="mailto:contact@bozorgigroup.com"
            className="inline-block bg-amber-500 text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-amber-400 transition duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
        <div className="mt-12 text-gray-500">
          <p>123 Innovation Drive, Suite 100</p>
          <p>San Francisco, CA 94105</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
