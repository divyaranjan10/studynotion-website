import React from 'react'
import Logo from "../image/Logo.svg"
import { Link, NavLink } from 'react-router-dom';
import { toast } from "react-hot-toast"
import "./Navbar.css"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

function Navbar(props) {
    let isLogin = props.isLogin;
    let setIsLogin = props.setIsLogin;

    function myfunc() {
        document.querySelector(".hamburgerClass").classList.toggle('hide');
        document.querySelector(".menu-btn").classList.toggle('hide');
        document.querySelector(".cut-btn").classList.toggle('hide');
    }

    return (
        <div className='bg-black absolute top-0 w-full z-10'>
            <div className='bg-black text-white grid grid-cols-2 items-center py-3 w-11/12 max-w-[1160px] mx-auto'>
                <div>
                    <Link to="/"><img className='w-40' src={Logo} alt='logo' width={0} height={20} loading='lazy'></img></Link>
                </div>
                <div className='hamburgerClass hide max-md:absolute max-md:left-0  max-md:top-0 max-md:translate-y-[32%]'>
                    <div className=' flex justify-end max-md:bg-black max-md:text-center max-md:w-screen max-md:flex-col max-md:gap-5 max-md:rounded-b-3xl max-md:pb-5 max-md:border-b-4'>
                        <div className='flex justify-center items-center absolute left-0 w-screen max-md:static'>
                            <ul className='flex gap-x-6 max-md:flex-col max-md:gap-3'>
                                <li onClick={myfunc}>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li onClick={myfunc}>
                                    <NavLink to="/About">About</NavLink>
                                </li>
                                <li onClick={myfunc}>
                                    <NavLink to="/Contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        
                        <div className='flex items-center justify-center gap-4 text-richblack-100'>
                            {(!isLogin) &&
                                <Link onClick={myfunc} to="/login"><button className='bg-richblack-800 py-[5px] px-[12px] rounded-[8px] border border-richblack-700  hover:text-white'>Log in</button></Link>
                            }

                            {(!isLogin) &&
                                <Link onClick={myfunc} to="/signup"><button className='bg-richblack-800 py-[5px] px-[12px] rounded-[8px] border border-richblack-700  hover:text-white'>SignUp</button></Link>
                            }

                            {(isLogin) &&
                                <Link onClick={myfunc} to="/"><button className='bg-richblack-800 py-[5px] px-[12px] rounded-[8px] border border-richblack-700  hover:text-white' onClick={() => {
                                    setIsLogin(false);
                                    toast.success("Logged Out");
                                }}>Log Out</button>
                                </Link>
                            }

                            {(isLogin) &&
                                <Link onClick={myfunc} to="/dashboard"><div
                                    onClick={() => {
                                        props.setNotification(0);
                                    }}
                                    className='relative'><button className="bg-richblack-800 py-[5px] px-[12px] rounded-[8px] border border-richblack-700 hover:text-white">Dashboard</button>
                                    {(props.notification > 0) &&
                                        <span className="animate-ping absolute h-[10px] w-[10px] rounded-full bg-sky-400 opacity-100 right-0 top-0"></span>
                                    }
                                </div>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <div
                        onClick={() => {
                            document.querySelector(".hamburgerClass").classList.toggle('hide');
                            document.querySelector(".menu-btn").classList.toggle('hide');
                            document.querySelector(".cut-btn").classList.toggle('hide');
                        }}
                        className='block md:hidden'>
                        <AiOutlineClose className='cut-btn hide' /><AiOutlineMenu className='menu-btn' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
