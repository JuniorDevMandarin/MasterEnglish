import { useState } from "react";
import { BsApple } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import Saly from "../assets/Login/Saly-14.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import "./Login.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordConfirmVisibility = () => {
    setPasswordConfirmVisible(!passwordConfirmVisible);
  };

  return (
    <>
      <Navbar />
      <div className="md:bg-gray-100  max-w-7xl  items-center mt-20 ">
        <section className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-20  items-center my-2 mx-4 md:mx-2 ">
          <div className="md:w-1/3 ">
            <h1 className="text-3xl font-bold text-center absolute md:text-left cusLog ">
              Sign Up To
            </h1>
            <p className="text-center md:text-left absolute cusText hidden md:block">
              Lorem Ipsum is simply{" "}
            </p>
            <p className="cusReg text-center absolute md:text-left  hidden md:block">
              If you already have an account <br />
              You can
              <Link
                to="/"
                className="font-semibold leading-6 text-indigo-600  hover:text-indigo-500 ml-2"
              >
                Login here !
              </Link>
            </p>

            <img
              className="cusImg object-cover rounded-lg hidden md:block"
              src={Saly}
              alt="Sample image"
            />
          </div>
          <div className="md:w-1/3 max-w-sm ">
            <div className="text-center md:text-left">
              <h1 className="font-bold text-lg mr-7 mb-8 mt-10 hidden lg:block">
                Sign Up{" "}
              </h1>
            </div>
            <form className="w-full" action="">
              <input
                className=" w-full placeholder:text-violet-400 px-5 py-4 outline-none mb-2 bg-brand-gray rounded"
                type="text"
                placeholder="Enter email"
                id="Email"
              />
              <input
                className=" w-full placeholder:text-violet-400 px-5 py-4 outline-none mb-2 bg-brand-gray rounded"
                type="text"
                placeholder="Create User name"
                id="username"
              />
              <input
                className=" w-full placeholder:text-violet-400 px-5 py-4 outline-none  bg-brand-gray rounded"
                type="number"
                placeholder="Contact Number"
                id="number"
              />
              <div className="input-box" style={{ position: "relative" }}>
                <input
                  className="text-sm w-full placeholder:text-violet-400   bg-brand-gray rounded"
                  type={passwordConfirmVisible ? "text" : "password"}
                  placeholder="Confirm Password"
                  id="password"
                />

                <span
                  onClick={togglePasswordConfirmVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#A7A3FF",
                  }}
                >
                  {passwordConfirmVisible ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    // <img src={eyeClose} alt="Hide password" />
                    <FontAwesomeIcon icon={faEye} />
                    // <img src={eyeOpen} alt="Show password" />
                  )}
                </span>
              </div>
              <div className="input-box" style={{ position: "relative" }}>
                <input
                  className="text-sm w-full placeholder:text-violet-400 px-4 py-2 bg-brand-gray rounded"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  id="password"
                />

                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#A7A3FF",
                  }}
                >
                  {passwordVisible ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    // <img src={eyeClose} alt="Hide password" />
                    <FontAwesomeIcon icon={faEye} />
                    // <img src={eyeOpen} alt="Show password" />
                  )}
                </span>
              </div>
          

      
            <div className="text-center md:text-center">
              <button
                className="mt-4 w-full h-12 bg-brand-yellow  px-4 py-2 text-white uppercase rounded-lg text-xs shadow-[0px_4px_20px_-4px_#ab70de] tracking-wider"
                type="submit"
              >
                Register
              </button>
            </div>
            </form>

            <div className="my-8  text-center md:text-center">
              <p className="mx-4  text-center font-normal text-[#b5b5b5]">
                or continue with
              </p>
            </div>
            <div className="flex justify-center items-center pb-10">
              <a
                href="#"
                type="button"
                className="mx-1 h-9 w-9 justify-center items-center rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
              >
                <BiLogoFacebook
                  size={20}
                  className="flex justify-center items-center w-full mt-1.5"
                />
              </a>
              <a
                href="#"
                type="button"
                className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
              >
                <BsApple
                  size={20}
                  className="flex justify-center items-center w-full mt-1.5"
                />
              </a>
              <a
                href="#"
                type="button"
                className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
              >
                <FaGoogle
                  size={20}
                  className="flex justify-center items-center w-full mt-1.5"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
