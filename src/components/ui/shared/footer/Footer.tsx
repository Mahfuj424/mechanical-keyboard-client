import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="w-full md:flex justify-between max-w-7xl px-4 md:px-0 mx-auto py-10">
        <div>
          <h2 className="text-xl font-bold mb-4">Subscribe Our Newsletter</h2>
          <p className="mb-4">
            Contrary to popular belief of lorem Ipsm Latin amet Itin from
            industry. Phasellus blandit massa enim varius nunc.
          </p>
        </div>
        <div className="flex h-14">
          <input
            type="email"
            className="w-full p-2 rounded-l-lg"
            placeholder="Your email address"
          />
          <button className="bg-red-600 p-2 rounded-r-lg">Subscribe</button>
        </div>
      </div>
      <div className="max-w-7xl lg:max-w-6xl mx-auto border-t border-gray-700 px-4 xl:px-0 pt-4">
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4  justify-between">
          <div className="flex items-center justify-start">
            <h1 className="text-6xl font-semibold text-red-500">E-</h1>
            <h1 className={`text-white text-2xl font-semibold mt-3`}>Market</h1>
          </div>
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-xl font-bold mb-4">Contact Info</h2>
            <p className="mb-2">
              <FaMapMarkerAlt className="inline" /> 123 Street, Old Trafford,
              New South London, UK
            </p>
            <p className="mb-2">
              <FaEnvelope className="inline" /> info@site.com
            </p>
            <p className="mb-2">
              <FaPhone className="inline" /> +017 88 372 355
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://web.facebook.com/" target="_blank">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://www.google.com/" target="_blank">
                <FaGooglePlusG />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-xl font-bold mb-4">Useful Links</h2>
            <ul>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Location
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliates
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-bold mb-4">My Account</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Discount
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Orders History
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Order Tracking
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 md:flex justify-between items-center">
          <p>
            &copy; {currentYear}. Built with{" "}
            <span className="text-pink-600">♥</span> by Mahfuj Alam
          </p>
          <div className="flex space-x-2">
            <img
              src="https://i.ibb.co.com/3k64ntQ/visa.png"
              alt="Visa"
              className="w-8 h-auto"
            />
            <img
              src="https://i.ibb.co.com/mN6GsfZ/discover.png"
              alt="Discover"
              className="w-8 h-auto"
            />
            <img
              src="https://i.ibb.co.com/7CG7wWW/paypal.png"
              alt="MasterCard"
              className="w-8 h-auto"
            />
            <img
              src="https://i.ibb.co.com/1mSgTQ6/amarican-express.png"
              alt="PayPal"
              className="w-8 h-auto"
            />
            <img
              src="https://i.ibb.co.com/jLNwN7p/master-card.png"
              alt="American Express"
              className="w-8 h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
