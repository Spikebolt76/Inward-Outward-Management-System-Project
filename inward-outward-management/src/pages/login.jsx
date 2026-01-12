import React, { useState } from "react";
import GoogleSvg from "../assets/icons8-google.svg";
import officeSvg from "../assets/login-cm.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import '../styles/login.css';
import CAlogo from '../assets/C&A.png';

const Login = () => { 
    const [ showPassword, setShowPassword ] = useState(false);

    return(
        <div className="flex bg-white">  
            <div className="grow h-screen flex justify-center items-center bg-[#dbeeec]">
                <img className="w-[500px]" src={officeSvg} alt="corporate memphis image: office" />
            </div>
            <div className="grow h-screen">
                <div className="h-full w-4/5 flex flex-col justify-center mx-auto my-0">
                    <div className="self-center">
                        <img src={CAlogo} className="size-44" alt="C&A Logo" />
                    </div>
                    <div className="mx-0 my-20 text-center">
                        <h2 className="text-[3.5rem] font-semibold">Welcome back!</h2>
                        <p className="font-normal text-[2rem] mb-[50px]">Please enter your details</p>

                        <form className="flex flex-col">
                            <input type="email" placeholder="Email" />
                            <div className="relative" id="pass-div">
                                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => setShowPassword(!showPassword)} />}
                             
                            </div>
                            
                            <div className="flex justify-between">
                                <div className="flex items-center gap-x-[5px]">
                                    <input type="checkbox" id="remember-checkbox" />
                                    <label className="text-[1.4rem] font-medium cursor-pointer mt-[2px] text-gray-700" htmlFor="remember-checkbox">
                                        Rememeber for 30 days
                                    </label>
                                </div>

                                <a href="#" className="no-underline font-semibold text-[1.4rem] text-gray-500 hover:underline">
                                    Forgot Password?
                                </a>
                            </div>

                            <div className="mt-[40px] flex flex-col gap-y-[10px]">
                                <button type="button">Log In</button>
                                <button type="button">
                                    <img src={GoogleSvg} alt="" />
                                    Log In with Google
                                </button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;