import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Company Info Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Real Estate Agency
          </h2>
          <p className="text-gray-400">
            Providing top-tier real estate services, helping you find your dream
            home or sell your property efficiently.
          </p>
          <p className="mt-4 text-gray-400">
            © 2024 Real Estate Agency. All Rights Reserved.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/buy" className="hover:text-yellow-400 duration-200">
                Buy a Property
              </a>
            </li>
            <li>
              <a href="/sell" className="hover:text-yellow-400 duration-200">
                Sell a Property
              </a>
            </li>
            <li>
              <a href="/rent" className="hover:text-yellow-400 duration-200">
                Rent a Property
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 duration-200">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400">1234 Realty Street, Suite 100</p>
          <p className="text-gray-400">City, State, 56789</p>
          <p className="mt-4 text-gray-400">Phone: (123) 456-7890</p>
          <p className="text-gray-400">Email: info@realestateagency.com</p>

          {/* Social Media Links */}
          <div className="mt-4 flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white f"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
