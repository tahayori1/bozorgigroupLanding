import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              Who We Are
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Bozorgi Group is more than just a source of capital. We are a team of experienced operators, investors, and entrepreneurs dedicated to helping our portfolio companies achieve their full potential.
            </p>
            <p className="mt-4 text-lg text-gray-400">
              Our approach is built on a foundation of trust, transparency, and a shared commitment to long-term value creation. We believe in building strong relationships with our founders, providing not just financial backing, but also strategic guidance, operational support, and access to our extensive network.
            </p>
          </div>
          <div className="mt-10 lg:mt-0" aria-hidden="true">
            <img 
              className="rounded-lg shadow-xl" 
              src="https://picsum.photos/600/400?random=1" 
              alt="Team discussing strategy" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
