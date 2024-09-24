import React from 'react';
import { Link } from 'react-router-dom';
import mara2 from '../assets/mara2.jpg';
import mara3 from '../assets/mara3.jpg';
import mara4 from '../assets/mara4.jpg';

const ToursPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${mara2})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-5xl font-bold mb-4">Our Exciting Tours</h1>
          <p className="text-white text-lg mb-8 max-w-xl">
            Discover the best tours across Africa, crafted to create unforgettable memories. 
          </p>
        </div>
      </section>

      {/* Tours List Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tour 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={mara4} alt="mara4" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">7-Day Maasai Mara Safari</h3>
                <p className="text-gray-600 mb-4">
                  Experience the rich wildlife of Maasai Mara, one of Kenya's most famous reserves.
                </p>
                <Link to="/tours/maasai-mara" className="text-yellow-500 font-semibold hover:underline">
                  View Details
                </Link>
              </div>
            </div>

            {/* Tour 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={mara3} alt="mara3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">4-Day Serengeti Safari</h3>
                <p className="text-gray-600 mb-4">
                  Explore the Serengeti's wildlife and witness the Great Migration in this 4-day adventure.
                </p>
                <Link to="/tours/serengeti" className="text-yellow-500 font-semibold hover:underline">
                  View Details
                </Link>
              </div>
            </div>

            {/* Tour 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={mara2} alt="mara2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">3-Day Beach & Safari Combo</h3>
                <p className="text-gray-600 mb-4">
                  Enjoy the best of both worlds with a relaxing beach escape and thrilling safari adventure.
                </p>
                <Link to="/tours/beach-safari" className="text-yellow-500 font-semibold hover:underline">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Adventure?</h2>
          <Link
            to="/book"
            className="bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default ToursPage;
