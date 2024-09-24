import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?africa')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-center">
          <h1 className="text-white text-5xl font-bold">About Us</h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Benta Safaris & Adventures Ltd is a premier travel company with a passion for providing unique, unforgettable safari experiences across Africa.
            Our journey started over a decade ago with a vision to offer personalized tours that connect travelers with the heart of Africa's wilderness and culture.
            Today, we are proud to be one of the leading travel companies offering authentic safaris, wildlife tours, and cultural experiences.
          </p>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            We believe in sustainable tourism, and our team of local guides ensures that every trip supports the conservation of wildlife and communities. Whether it's your first time in Africa or you're a seasoned traveler, our mission is to provide you with memories that last a lifetime.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
          <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
              <img
                src="https://source.unsplash.com/160x160/?person"
                alt="Team Member 1"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-xl">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
              <img
                src="https://source.unsplash.com/160x160/?person2"
                alt="Team Member 2"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-xl">Jane Smith</h3>
              <p className="text-gray-600">Tour Manager</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
              <img
                src="https://source.unsplash.com/160x160/?person3"
                alt="Team Member 3"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-xl">Alice Williams</h3>
              <p className="text-gray-600">Lead Safari Guide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us on an Adventure</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover the beauty of Africa with our expert guides and personalized safari tours. Whether you’re looking for a wildlife adventure, cultural immersion, or a relaxing retreat, we have something for everyone.
          </p>
          <Link
            to="/contact"
            className="bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
