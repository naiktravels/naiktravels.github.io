import React from "react"
import { Link } from "gatsby"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: FaFacebookF, url: "https://facebook.com" },
    { name: "Twitter", icon: FaTwitter, url: "https://twitter.com" },
    { name: "Instagram", icon: FaInstagram, url: "https://instagram.com" },
    { name: "LinkedIn", icon: FaLinkedinIn, url: "https://linkedin.com" },
  ]

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-300">
              We are passionate about providing unforgettable travel experiences.
              Our goal is to help you explore the world and create lasting memories.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-sm text-gray-300 not-italic">
              <p>123 Travel Street</p>
              <p>City, Country, 12345</p>
              <p className="mt-2">Phone: +1 (234) 567-8900</p>
              <p>Email: info@travelcompany.com</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © {currentYear} Your Travel Company. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer