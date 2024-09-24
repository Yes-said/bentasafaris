import React from 'react';
import { Link } from 'react-router-dom';
import mara4 from '../assets/mara4.jpg';
import kenya from "../assets/kenya.jpg"
import tanzania from "../assets/tanzania.jpeg"
import combo from "../assets/combo.jpeg"
const IndexPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${mara4})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 sm:px-8">
          <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4 hero-text">
            Discover the Wonders of Africa
          </h1>
          <p className="text-white text-base sm:text-lg mb-8 max-w-lg sm:max-w-xl hero-text">
            Explore breathtaking safaris, unforgettable wildlife adventures, and immerse yourself in the rich culture of Africa.
          </p>
          <Link
            to="/tours"
            className="bg-yellow-500 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 hero-button"
          >
            Explore Tours
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why Travel With Us</h2>
          <p className="text-gray-600 mb-8 sm:mb-12 max-w-lg sm:max-w-3xl mx-auto">
            At Benta Safaris & Adventures, we provide unforgettable experiences. With over a decade of experience, we offer tailor-made safari tours
            that cater to your needs. Our expert guides ensure you have the best experience in the heart of African wilderness.
          </p>
          <Link
            to="/about"
            className="bg-yellow-500 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Featured Tours</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Tour 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={kenya}
                alt="kenya"
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Kenya Safari Adventure</h3>
                <p className="text-gray-600 mb-4">
                  Experience the ultimate safari in Kenya with our 7-day tour across Maasai Mara, Amboseli, and Tsavo National Parks.
                </p>
                <Link
                  to="/tours/kenya-safari"
                  className="text-yellow-500 font-semibold hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Tour 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={tanzania}
                alt="Tanzania"
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Tanzania Wildlife Safari</h3>
                <p className="text-gray-600 mb-4">
                  Explore the Serengeti and Ngorongoro Crater on this 5-day tour filled with incredible wildlife sightings.
                </p>
                <Link
                  to="/tours/tanzania-wildlife"
                  className="text-yellow-500 font-semibold hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Tour 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={combo}
                alt="Combo"
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Beach and Safari Combo</h3>
                <p className="text-gray-600 mb-4">
                  Enjoy a unique combination of thrilling safari and relaxing beach experiences in Kenya's coastal regions.
                </p>
                <Link
                  to="/tours/beach-safari"
                  className="text-yellow-500 font-semibold hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">What Our Clients Say</h2>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center">
            {/* Testimonial 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md">
              <p className="text-gray-600 mb-4">
                "We had an amazing time on our Kenya Safari Adventure. The team was professional, and we saw the Big Five up close!"
              </p>
              <p className="font-bold">- Jane Doe</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md">
              <p className="text-gray-600 mb-4">
                "The Tanzania Wildlife Safari was breathtaking. The guides were knowledgeable, and the experience was unforgettable."
              </p>
              <p className="font-bold">- John Smith</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md">
              <p className="text-gray-600 mb-4">
                "The Beach and Safari Combo was the perfect blend of adventure and relaxation. Highly recommend!"
              </p>
              <p className="font-bold">- Alice Williams</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
