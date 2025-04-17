import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const NavItems = ({ children, href, onClick}) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(href.replace("#", ""));
    if (!target) return;

    const targetOffset = target.getBoundingClientRect().top + window.scrollY;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Jika posisi scroll mendekati target (dengan toleransi 10px)
      if (Math.abs(scrollPosition - targetOffset) < 1) {
        window.removeEventListener("scroll", handleScroll);
        if (onClick) onClick(); // Tutup navbar
      }
    };

    window.addEventListener("scroll", handleScroll);
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div className="group relative inline-block">
      <a
        onClick={handleClick}
        className="cursor-pointer text-white relative after:content-[''] after:absolute after:right-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
      >
        {children}
      </a>
    </motion.div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-screen fixed z-20 px-6 md:px-45 text-white transition-all duration-300 ${
        scrolled || isOpen ? "bg-black/50 backdrop-blur-sm py-5" : "bg-transparent py-9"
      }`}
    >
      <nav className="flex justify-between items-center text-xl">
        <h1 className="text-xl md:text-3xl font-bold">fathirrahman.</h1>

        <ul className="hidden md:flex gap-40">
          <NavItems href="#hero">Home</NavItems>
          <NavItems href="#about">About</NavItems>
          <NavItems href="#services">Services</NavItems>
          <NavItems href="#contact">Contact</NavItems>
        </ul>

        <div className="md:hidden text-md cursor-pointer" onClick={toggleNavbar}>
          <i className={isOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
        </div>
      </nav>

      {/* Slide-down Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{height: 0, opacity: 0}}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.8, 0.25, 1], 
            }}
            className="overflow-hidden flex flex-col w-full justify-center items-center gap-8 text-md mt-4 md:hidden"
          >
            <NavItems href="#hero" onClick={() => setIsOpen(false)}>Home</NavItems>
            <NavItems href="#about" onClick={() => setIsOpen(false)}>About</NavItems>
            <NavItems href="#services" onClick={() => setIsOpen(false)}>Services</NavItems>
            <NavItems href="#footer" onClick={() => setIsOpen(false)}>Contact</NavItems>
            
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
