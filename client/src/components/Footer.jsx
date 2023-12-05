import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#7dd3fc] text-slate-700 p-4 sm:p-4"> {/* Adjusted padding */}
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between mb-4">
                <div className="mb-4 sm:mb-0">
                    <p className="font-bold text-xl mb-2">Follow Us</p>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="text-slate-400 hover:text-slate-700 transition duration-300 p-2 rounded-full bg-slate-100"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 hover:text-slate-700 transition duration-300 p-2 rounded-full bg-slate-100"
                        >
                            <FaFacebook size={24} />
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 hover:text-slate-700 transition duration-300 p-2 rounded-full bg-slate-100"
                        >
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                        to="/"
                        className="text-ellipsis text-xl font-bold text-slate-500 hover:text-slate-700"
                    >
                        Contact
                    </Link>
                    <Link
                        to="/about"
                        className="text-ellipsis text-xl font-bold text-slate-500 hover:text-slate-700"
                    >
                        About
                    </Link>
                    <Link
                        to="/"
                        className="text-ellipsis text-xl font-bold text-slate-500 hover:text-slate-700"
                    >
                        Privacy
                    </Link>
                </div>
            </div>
            <div className="text-center pb-2 sm:pb-4"> {/* Adjusted bottom padding */}
                <p className="font-bold text-xl mb-2">
                    <span className="text-slate-500">Dream</span>
                    <span className="text-slate-700">Home</span>
                </p>
                <p className="text-sm">123 Main Street, Cityville</p>
                <p className="text-sm">Email: info@dreamhome.com</p>
                <p className="text-ellipsis mt-4">
                    &copy; {new Date().getFullYear()} Dream Home. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
