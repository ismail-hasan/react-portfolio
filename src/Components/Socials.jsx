import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Socials = () => {
    return (
        <section className="flex  gap-6 ">
            {/* Facebook */}
            <a href="https://www.facebook.com/ismailhasanbd" target="_blank" rel="noopener noreferrer"
                className="p-3 border-2 border-gray-500 rounded-full hover:border-white transition-all duration-300 group">
                <FaFacebookF className="text-gray-400 group-hover:text-white text-xl" />
            </a>

            {/* GitHub */}
            <a href="https://github.com/ismail-hasan" target="_blank" rel="noopener noreferrer"
                className="p-3 border-2 border-gray-500 rounded-full hover:border-white transition-all duration-300 group">
                <FaGithub className="text-gray-400 group-hover:text-white text-xl" />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/ismailhasanbd/" target="_blank" rel="noopener noreferrer"
                className="p-3 border-2 border-gray-500 rounded-full hover:border-white transition-all duration-300 group">
                <FaLinkedinIn className="text-gray-400 group-hover:text-white text-xl" />
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/01776458113" target="_blank" rel="noopener noreferrer"
                className="p-3 border-2 border-gray-500 rounded-full hover:border-white transition-all duration-300 group">
                <FaWhatsapp className="text-gray-400 group-hover:text-white text-xl" />
            </a>
        </section>
    );
};

export default Socials;
