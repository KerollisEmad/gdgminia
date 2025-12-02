import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  const MotionLink = motion(Link);
  return <>
   <motion.footer
      className="relative overflow-hidden bg-bgFooter px-4 sm:px-8 md:px-40.5 pb-8 sm:pb-12 md:pb-17 flex flex-col gap-8 sm:gap-12 md:gap-16.25"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-20" />

      {/* Top section - Logo and content */}
      <div className="footer-nav flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0 relative z-10">
        {/* Animated logo */}
        <motion.div
          className="footer-logo text-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.img
            className="w-50.5"
            src="/images/Gdg-logo-footer.svg"
            alt="Logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <p className="text-[#d1d1d1] mt-4 text-sm sm:text-base md:text-xl hidden md:block">
            Stay tuned for more features in our website
          </p>
        </motion.div>

        {/* Right side - Contact, links, and partners sections */}
        <div className="footer-content flex flex-col sm:flex-row gap-8 sm:gap-6 md:gap-11.25 md:translate-y-20 text-[#939393] text-base md:text-lg w-full md:w-auto">
          {/* Contact Us section */}
          <motion.div
            className="Contact-Us flex flex-col gap-4 sm:gap-5 md:gap-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-base sm:text-lg md:text-[1.875rem] m-0 p-0">
              Contact Us
            </h3>
            <div className="contact-us-content flex flex-col gap-2 sm:gap-3 md:gap-5.75">
              <div className="mail flex items-start sm:items-center gap-2 group">
                <motion.img
                  src="/images/mail-fill.svg"
                  alt="Mail Icon"
                  className="w-5 h-5 mt-1 sm:mt-0 shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <p className="text-[#939393] text-sm sm:text-base md:text-lg m-0 transition-colors duration-300 group-hover:text-white">
                  hrgdgminia@gmail.com
                </p>
              </div>
              <div className="phone flex items-center gap-2 group">
                <motion.img
                  src="/images/phone-fill.svg"
                  alt="Phone Icon"
                  className="w-5 h-5 shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <p className="text-[#939393] text-sm sm:text-base md:text-lg m-0 transition-colors duration-300 group-hover:text-white">
                  01023456343
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links section */}
          <motion.div
            className="Quick-Links flex flex-col gap-4 sm:gap-5 md:gap-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-base sm:text-lg md:text-[1.875rem] m-0 p-0">
              Quick Links
            </h3>
            <div className="Quick-Links-content flex flex-col gap-2 sm:gap-3 md:gap-5.75">
              <MotionLink
                className="text-[#939393] text-sm sm:text-base md:text-[1.375rem] hover:text-[#478af5] transition-colors duration-300 inline-block"
                to="about"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                About Us
              </MotionLink>
              <MotionLink
                className="text-[#939393] text-sm sm:text-base md:text-[1.375rem] hover:text-[#478af5] transition-colors duration-300 inline-block"
                to="event"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Events
              </MotionLink>
            </div>
          </motion.div>

          {/* Annual Partners section */}
          <motion.div
            className="Annual-Partners flex flex-col gap-4 sm:gap-5 md:gap-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-base sm:text-lg md:text-[1.875rem] m-0 p-0">
              Annual Partners
            </h3>
            <div className="Annual-Partners-content flex flex-col">
              {/* Partners content area */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom section - Social media links */}
      <motion.div
        className="contact flex flex-wrap gap-3 sm:gap-4 md:gap-9 items-center justify-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {[
          {
            href: "https://www.facebook.com/GDG.Minia",
            src: "/images/facebook.svg",
            alt: "Facebook",
          },
          {
            href: "https://www.linkedin.com/in/gdg-minia-b32590172/",
            src: "/images/Linked.svg",
            alt: "LinkedIn",
          },
          {
            href: "https://www.instagram.com/gdgminia/",
            src: "/images/instagram.svg",
            alt: "Instagram",
          },
          {
            href: "https://github.com/gdgminia",
            src: "/images/github.svg",
            alt: "GitHub",
          },
        ].map((social, index) => (
          <MotionLink
            key={social.alt}
            href={social.href}
            className="hover:opacity-80 transition-opacity duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={social.src}
              alt={social.alt}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            />
          </MotionLink>
        ))}
      </motion.div>

        <div
          className="absolute -right-[230px] -bottom-[75px] 
           w-[529px] h-[472px] bg-[#079C544D] rounded-full  blur-2xl"
        ></div>
        <div
          className="absolute -left-[230px] -bottom-[25px] 
           w-[529px] h-[472px] bg-[#079C544D] rounded-full  blur-2xl"
        ></div>

    </motion.footer>
  </>
}
