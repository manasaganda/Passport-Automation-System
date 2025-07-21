
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-passport-600 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-white text-passport-600 p-2 rounded-md">PP</span>
              <span className="text-lg font-semibold">PassportPanda</span>
            </div>
            <p className="text-passport-100 mb-4">
              Making passport applications simple, fast and hassle-free.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-passport-200 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-passport-200 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-passport-200 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-passport-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-passport-100 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/requirements" className="text-passport-100 hover:text-white transition-colors">
                  Requirements
                </Link>
              </li>
              <li>
                <Link to="/track" className="text-passport-100 hover:text-white transition-colors">
                  Track Application
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-passport-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/new-passport" className="text-passport-100 hover:text-white transition-colors">
                  New Passport
                </Link>
              </li>
              <li>
                <Link to="/services/renewal" className="text-passport-100 hover:text-white transition-colors">
                  Passport Renewal
                </Link>
              </li>
              <li>
                <Link to="/services/expedited" className="text-passport-100 hover:text-white transition-colors">
                  Expedited Service
                </Link>
              </li>
              <li>
                <Link to="/services/lost" className="text-passport-100 hover:text-white transition-colors">
                  Lost or Stolen
                </Link>
              </li>
              <li>
                <Link to="/services/child" className="text-passport-100 hover:text-white transition-colors">
                  Child Passport
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span className="text-passport-100">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span className="text-passport-100">support@passportpanda.com</span>
              </li>
              <li className="mt-4 text-passport-100">
                1234 Passport Lane<br />
                Suite 567<br />
                San Francisco, CA 94103
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-passport-500 text-center text-passport-200 text-sm">
          <p>&copy; {new Date().getFullYear()} PassportPanda. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="text-passport-200 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-passport-200 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
