import { useState } from "react";
import { FiMail, FiPhone, FiMenu, FiX } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

// Animation Variants
const parentVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const dropdownParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const dropdownItem = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [knowledgeOpen, setKnowledgeOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="flex justify-between items-center py-4">
          <div className="flex space-x-4 items-start">
            <img src={logo} alt="CA Firm Logo" className="h-12 w-auto" />
            <div className="hidden sm:flex flex-col justify-center text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <FiMail />
                <span>info@yourcafirm.com</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <FiPhone />
                <span>+91-9876543210</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-gray-800 font-medium items-center relative">
            <motion.div
              className="flex space-x-6"
              variants={parentVariant}
              initial="hidden"
              animate="visible"
            >
              {["Home", "About Us", "Our Team"].map((label) => (
                <motion.a
                  key={label}
                  href="#"
                  className="hover:text-blue-700 transition"
                  variants={itemVariant}
                  whileHover={{ scale: 1.05 }}
                >
                  {label}
                </motion.a>
              ))}

              {/* Services Dropdown (hover) */}
              <motion.div
                className="relative"
                variants={itemVariant}
                onMouseEnter={() => setHoveredDropdown("services")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <motion.button
                  className="flex items-center hover:text-blue-700 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  Services <FaAngleDown className="ml-1" />
                </motion.button>

                <AnimatePresence>
                  {hoveredDropdown === "services" && (
                    <motion.div
                      className="absolute bg-white shadow-md mt-2 rounded z-40 w-48"
                      variants={dropdownParent}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {["Tax Consulting", "Audit & Assurance", "Company Formation"].map(
                        (item) => (
                          <motion.a
                            key={item}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                            variants={dropdownItem}
                          >
                            {item}
                          </motion.a>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Knowledge Bank Dropdown (hover) */}
              <motion.div
                className="relative"
                variants={itemVariant}
                onMouseEnter={() => setHoveredDropdown("knowledge")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <motion.button
                  className="flex items-center hover:text-blue-700 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  Knowledge Bank <FaAngleDown className="ml-1" />
                </motion.button>

                <AnimatePresence>
                  {hoveredDropdown === "knowledge" && (
                    <motion.div
                      className="absolute bg-white shadow-md mt-2 rounded z-40 w-48"
                      variants={dropdownParent}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {["Articles", "Case Studies"].map((item) => (
                        <motion.a
                          key={item}
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                          variants={dropdownItem}
                        >
                          {item}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* QuickLinks Dropdown (hover) */}
              <motion.div
                className="relative"
                variants={itemVariant}
                onMouseEnter={() => setHoveredDropdown("quicklinks")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <motion.button
                  className="flex items-center hover:text-blue-700 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  Quick Links <FaAngleDown className="ml-1" />
                </motion.button>

                <AnimatePresence>
                  {hoveredDropdown === "quicklinks" && (
                    <motion.div
                      className="absolute bg-white shadow-md mt-2 rounded z-40 w-48"
                      variants={dropdownParent}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {["Careers", "Contact Us",].map(
                        (item) => (
                          <motion.a
                            key={item}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                            variants={dropdownItem}
                          >
                            {item}
                          </motion.a>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden border-t pt-4 pb-6 space-y-4 text-gray-700 font-medium overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={parentVariant}
            >
              {["Home", "About Us", "Our Team"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="block px-2"
                  variants={itemVariant}
                  whileHover={{ scale: 1.03 }}
                >
                  {item}
                </motion.a>
              ))}

              {/* Mobile Services Dropdown */}
              <motion.div className="px-2" variants={itemVariant}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex justify-between w-full items-center"
                >
                  Services <FaAngleDown />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      className="ml-4 mt-2 space-y-2 text-sm"
                      variants={dropdownParent}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {["Tax Consulting", "Audit & Assurance", "Company Formation"].map(
                        (item) => (
                          <motion.a
                            key={item}
                            href="#"
                            className="block"
                            variants={dropdownItem}
                          >
                            {item}
                          </motion.a>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Mobile Knowledge Dropdown */}
              <motion.div className="px-2" variants={itemVariant}>
                <button
                  onClick={() => setKnowledgeOpen(!knowledgeOpen)}
                  className="flex justify-between w-full items-center"
                >
                  Knowledge Bank <FaAngleDown />
                </button>
                <AnimatePresence>
                  {knowledgeOpen && (
                    <motion.div
                      className="ml-4 mt-2 space-y-2 text-sm"
                      variants={dropdownParent}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {["Articles", "Case Studies"].map((item) => (
                        <motion.a
                          key={item}
                          href="#"
                          className="block"
                          variants={dropdownItem}
                        >
                          {item}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.a href="#" className="block px-2" variants={itemVariant}>
                Useful Links
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
