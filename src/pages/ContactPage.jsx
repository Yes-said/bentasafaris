import React from 'react';

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?nature')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-center">
          <h1 className="text-white text-5xl font-bold">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Have questions about our tours or need help with booking? Feel free to reach out to us anytime.
          </p>
          
          <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
            {/* Contact Details */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-4">Our Contact Details</h3>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Email:</span> info@bentasafaris.com
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Phone:</span> +254 712 345 678
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Location:</span> Nairobi, Kenya
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Working Hours:</span> Mon - Fri, 9 AM - 5 PM
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full md:w-2/3">
              <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 focus:outline-none"
                    placeholder="Your Email"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 focus:outline-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-yellow-500 text-gray-900 font-semibold px-8 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Find Us</h2>
          <div className="w-full h-96">
            <iframe
              title="Benta Safaris Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31891.738232055496!2d36.82194659002849!3d-1.2843082001026706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1726a8e77f1b%3A0xe9c00c84ab28b49a!2sNairobi!5e0!3m2!1sen!2ske!4v1634925937260!5m2!1sen!2ske"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
