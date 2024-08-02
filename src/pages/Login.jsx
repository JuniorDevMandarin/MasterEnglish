import  { useState } from 'react';
import { BsApple } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import Saly from '../assets/Login/Saly-14.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };




  return (
    <div className="md:bg-gray-100   max-w-7xl  items-center mt-20">
    <section className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-20  items-center my-2 mx-4 md:mx-2 md:my0">
      <div className="md:w-1/3 ">
        <h1 className="text-3xl font-bold text-center absolute md:text-left cusLog ">Login</h1>
        <p className="text-center md:text-left absolute cusText hidden md:block">Lorem Ipsum is simply </p>
        <p className="cusReg text-center absolute md:text-left  hidden md:block">
            If you don’t have an account register{' '}<br/>You can
            <Link to="/signup" className="font-semibold leading-6 text-indigo-600  hover:text-indigo-500 ml-2">
              Register here!
            </Link>
          </p>
        
        <img className="cusImg object-cover rounded-lg hidden md:block"
          src={Saly}
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm ">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-lg mr-7 mb-8 hidden lg:block">Sign in </h1>
         
        </div>
      
    
        <input
                className=" w-full placeholder:text-violet-400 px-5 py-4 outline-none mb-6 bg-brand-gray rounded"
                type='text'
                placeholder="Enter email or user name"
                id="Email"
              />
              
        <div className="input-box" style={{ position: 'relative' }}>
              <input
                className="text-sm w-full placeholder:text-violet-400 px-4 py-2 bg-brand-gray rounded"
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                id="password"
              />
           
            <span
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                color: '#A7A3FF',
              }}
            >
              {passwordVisible ? (
                <FontAwesomeIcon icon={faEyeSlash} />
                // <img src={eyeClose} alt="Hide password" />
              ) : (
                <FontAwesomeIcon icon={faEye} />
                // <img src={eyeOpen} alt="Show password" />
              )}
            </span>
          </div>
          
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
         
          
          </label>
          <a
            className="font-normal text-[#b5b5b5]"
            href="#"
          >
            Forgot Password?
          </a>
        </div>

        <div className="text-center md:text-center">
          <button
            className="mt-4 w-full h-12 bg-brand-yellow  px-4 py-2 text-white uppercase rounded-lg text-xs shadow-[0px_4px_20px_-4px_#ab70de] tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>

        <div className="my-8  text-center md:text-center">
          <p className="mx-4 mb-0 text-center font-normal text-[#b5b5b5]">
            or continue with
          </p>
        </div>
        <div className="flex justify-center items-center">
        <a  href='#'
            type="button"
            className="mx-1 h-9 w-9 justify-center items-center rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <BiLogoFacebook
              size={20}
              className="flex justify-center items-center w-full mt-1.5"
            />
          </a>
          <a href='#'
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <BsApple
              size={20}
              className="flex justify-center items-center w-full mt-1.5"
            />
          </a>
          <a href='#'
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
  );
};

export default Login;