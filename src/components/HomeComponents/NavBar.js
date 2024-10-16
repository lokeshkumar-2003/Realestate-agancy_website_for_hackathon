import React, { useState } from "react";

import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import routes from "../../Config/route";

const SocialMedia = ({ socialMedia = "", link = "/" }) => {
  return (
    <a
      href={link}
      className=" w-[50px] h-[50px] rounded-[50%] bg-[#f7b71e] flex flex-row justify-center items-center  cursor-pointer "
    >
      {socialMedia === "instagram" && <FaInstagram size={22} color="white" />}
      {socialMedia === "facebook" && <FaFacebook size={22} color="white" />}
      {socialMedia === "twitter" && <FaTwitter size={22} color="white" />}
    </a>
  );
};

const navbar_data = [
  {
    title: "HOME",
    href: "/",
    subNav: [],
  },
  {
    title: "PROPERTIES",
    href: routes?.properties,
    subNav: [],
  },
  {
    title: "PRODUCTS",
    href: "",
    subNav: [],
  },
  {
    title: "PROJECTS",
    href: "",
    subNav: [],
  },
  {
    title: "CAREERS",
    href: "/careers",
    subNav: [],
  },
  {
    title: "LOG IN",
    href: routes?.signin,
    subNav: [],
  },
  {
    title: "SIGN UP",
    href: routes?.signup,
    subNav: [],
  },
];

const IndivNav = ({ content = {}, index = 0, delay = 0 }) => {
  let initial = {
    rotate: index % 2 == 0 ? 30 : -30,
    rotateX: index % 2 == 0 ? 90 : 90,
    opacity: 0,
    y: 0,
  };
  // console.log(index, initial);
  let animate = {
    rotate: 0,
    rotateY: 0,
    rotateX: 0,
    opacity: [0, 75, 100, 100],
    y: 0,
    opacity: 100,
  };

  const transition = {
    duration: 0.3,
    ease: "easeInOut",
    delay: index * 0.1,
  };
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className=" w-full h-[45px] flex flex-col justify-center ps-4 font-poppins text-[14px] text-white  bg-gray-600 hover:bg-gray-400 duration-200"
    >
      {content?.title}
    </motion.div>
  );
};

const NavLink2 = ({ content = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  let subArray = content?.subNav?.length;

  return (
    <>
      {subArray ? (
        <div
          onClick={() => {
            setIsOpen((state) => {
              return !state;
            });
          }}
          onMouseEnter={() => {
            setTimeout(() => {
              setIsOpen(true);
            }, 250);
          }}
          onMouseLeave={() => {
            controls.start({
              opacity: 0,
              scale: 0.9,
              y: "-30px",
              rounded: "50%",
              transition: {
                duration: 0.4,
                ease: "easeInOut",
              },
            });
            setTimeout(() => {
              setIsOpen(false);
            }, 400);
          }}
          className=" relative w-fit ps-12 pe-12 h-full flex flex-row justify-center items-center font-poppins text-[#333d40] text-[15px] hover:bg-[#f7b71e] hover:text-white duration-200 border-s-[1px] border-e-[1px] cursor-pointer "
        >
          {content?.title}

          {isOpen && (
            <motion.div
              animate={controls}
              className="w-[250px] h-fit absolute  top-[100%] left-[0%]  rounded-[8px] flex flex-col gap-[2px]"
            >
              {content?.subNav?.map((item, index) => {
                return <IndivNav content={item} delay={0.5} index={index} />;
              })}
            </motion.div>
          )}
        </div>
      ) : (
        <NavLink
          to={content?.href}
          className=" relative w-fit ps-12 pe-12 h-full flex flex-row justify-center items-center font-poppins text-[#333d40] text-[15px] hover:bg-[#f7b71e] hover:text-white duration-200 border-s-[1px] border-e-[1px] cursor-pointer "
        >
          {content?.title}
        </NavLink>
      )}
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-gray-500 shadow ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Text on the right */}
        <div className="text-xl font-semibold text-white">ABC Real Estate</div>
        {/* Links on the left */}
        <div className="flex space-x-4">
          <NavLink
            to={routes?.home}
            className="text-white hover:text-yellow-500"
          >
            Home
          </NavLink>
          <NavLink
            to={routes?.properties}
            className="text-white hover:text-yellow-500"
          >
            Properties
          </NavLink>
          <NavLink
            to={routes?.signin}
            href="#"
            className="text-white hover:text-yellow-500"
          >
            Log in
          </NavLink>
          <NavLink
            to={routes?.signup}
            className="text-white hover:text-yellow-500"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );

  return (
    <div className=" w-full h-fit ">
      {/* First line  */}

      <div className=" w-full h-[75px] flex flex-row justify-between ps-[8rem] pe-4 bg-[#333d40] ">
        {/* Logo and title  */}
        <div className=" w-fit h-full flex flex-row gap-[1rem]">
          {/* Image  */}
          <div className=" h-full w-fit flex flex-col justify-center ">
            <img className=" w-full h-[90%] object-cover" />
          </div>
          {/* Title */}
          <div className=" h-full w-fit flex flex-col justify-center">
            <h1 className=" font-poppins text-[26px] font-bold text-white">
              ABC REAL ESTATE AGENCY
            </h1>
          </div>
        </div>
        {/* Social links  */}
        <div className="w-fit h-full flex flex-row items-center gap-[1rem]">
          {/* Social media  */}
          <SocialMedia
            socialMedia={"instagram"}
            link="https://www.instagram.com/hpoc90"
          />
          <SocialMedia
            socialMedia={"twitter"}
            link="https://twitter.com/HPOC90"
          />
          <SocialMedia
            socialMedia={"facebook"}
            link="https://www.facebook.com/hpoc.hpoc.31?mibextid=ZbWKwL"
          />
        </div>
      </div>

      <div className=" w-full h-[75px] flex flex-row ps-3 pe-3  border-b-2 ">
        {navbar_data?.map((item) => {
          return <NavLink2 content={item} />;
        })}
      </div>
    </div>
  );
};

export default Navbar;
