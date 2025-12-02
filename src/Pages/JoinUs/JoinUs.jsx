import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "../Login/Login";
import Meta from "../../Components/Meta/Mata";

/**
 * App Component - Main application root
 * Manages:
 * - Login modal visibility state with macOS-style animation
 * - Page layout with decorative elements
 * - Navigation, main content, footer, and login modal
 */
function JounUs() {
  // State to control login modal visibility
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="App relative overflow-hidden">
      {/* Animated background circles */}
      <AnimatedCircle color="yellow" position="top-right" delay={0} />
      <AnimatedCircle color="red" position="middle-left" delay={200} />
      <AnimatedCircle color="blue" position="footer-middle" delay={400} />


      {/* Main body component with admin button to trigger login modal */}
      <Body onAdminClick={() => setShowLoginModal(true)} />

      {/* Footer component with contact info and social links */}
      {/* <Footer /> */}

      {/* Login modal component - visible when showLoginModal is true */}
      <AnimatePresence>
        {showLoginModal && (
          <Login
            isOpen={showLoginModal}
            onClose={() => setShowLoginModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Animated Circle Component - Reusable animated background circles
 */
function AnimatedCircle({ color, position, delay = 0 }) {
  const colorStyles = {
    yellow: "bg-[#f8c53c40]",
    red: "bg-[#d8423840]",
    blue: "bg-[#488df540]",
  };

  const shadowStyles = {
    yellow: "0 0 6.25rem 6.25rem rgba(248, 197, 60, 0.25)",
    red: "0 0 5.625rem 5.625rem rgba(216, 66, 56, 0.25)",
    blue: "0 0 5.625rem 5.625rem rgba(72, 141, 245, 0.25)",
  };

  const positionStyles = {
    "top-right": "top-0 right-0 -mr-[4rem] -mt-[4rem]",
    "middle-left": "left-0 top-1/6 -ml-[4rem]",
    "footer-middle": "left-3/6 bottom-0 -translate-x-1/2",
  };

  return (
    <motion.div
      className={`absolute w-50 h-50 ${colorStyles[color]} rounded-full pointer-events-none z-0 ${positionStyles[position]}`}
      style={{ boxShadow: shadowStyles[color] }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: delay / 1000,
        ease: "easeOut",
      }}
    />
  );
}

/**
 * Body Component - Main content section with enhanced animations
 */
function Body({ onAdminClick }) {
  return ( <>
    <Meta
      title="GDG Minya | Join Us" 
      description="Join GDG Minya and be part of a vibrant community of developers, designers, and tech enthusiasts." 
      keywords="GDG Minya, Join Us, Community, Developers, Designers, Tech Enthusiasts"
    />
    <motion.main
      className="flex flex-col-reverse md:flex-row justify-between items-center px-4 sm:px-6 md:px-[5vw] py-12 sm:py-20 md:py-23.75 w-screen md:w-full relative md:gap-0 -mx-4 sm:-mx-6 md:mx-0 md:ml-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left section - Text content */}
      <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-0">
        <div className="text flex flex-col gap-4 sm:gap-6 md:gap-11.5">
          {/* Animated heading */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-[3.75rem] font-bold leading-tight md:leading-[100%] text-primary"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Registration is currently closed
          </motion.h1>

          {/* Animated description */}
          <motion.p
            className="text-base sm:text-lg md:text-[1.6875rem] font-normal text-black leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay tuned and follow us on our
            social media channels to get updated with the latest news and
            openings!
          </motion.p>

          {/* Animated admin button */}
          <motion.button
            onClick={onAdminClick}
            className="admin-btn mt-4 sm:mt-6 px-6 sm:px-8 py-3 sm:py-3.5 
              bg-[#e0ecff] text-primary font-extrabold text-xs sm:text-sm md:text-[1rem] rounded-2xl
              shadow-md
              transform transition-all duration-500 ease-out
              hover:bg-[#548de8] hover:text-white hover:shadow-xl hover:-translate-y-1
              active:scale-95 active:opacity-90 active:translate-y-0.5
              w-fit cursor-pointer focus:outline-none
              relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            Admin Access
          </motion.button>
        </div>
      </div>

      {/* Right section - Image with animation */}
      <div className="image w-full md:w-1/2 flex justify-center md:justify-end shrink-0">
        <motion.div
          className="relative overflow-hidden rounded-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Image background glow effect */}
          <div className="absolute inset-0  blur-xl scale-110 transform -z-10" />

          <img
            className="w-full sm:w-96 md:w-120 lg:w-160 max-w-full relative z-10"
            src="/images/registration-closed.svg"
            alt="Registration Closed"
          />
        </motion.div>
      </div>
    </motion.main>
 </> );
}


export default JounUs;
