import Login from "../pages/Login";
import Signup from "../pages/Signup";
import frame from "../image/frame.png";
import {FcGoogle} from "react-icons/fc";
import toast from "react-hot-toast";

function Template({ title, d1, d2, image, formtype, isLogin,setIsLogin,id,SetId }) {
    // resusable template for login and signup page
    return (
        <div className=" grid grid-cols-2 w-11/12 max-w-[1160px] pt-12 mx-auto gap-20 text-richblack-5 mt-20 max-md:grid-cols-1 max-md:pb-12">

            <div>
                <h1 className="font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
                <p className="text=[1.125rem] leading[1.625rem] mt-2 mb-4" >
                    <span>{d1}</span><br/>
                    <span className="text-blue-100 italic">{d2}</span>
                </p>

                {
                    formtype == "signup" ?
                        <Signup id={id} SetId={SetId} ></Signup> :
                        <Login id={id} isLogin={isLogin} setIsLogin={setIsLogin}></Login>
                }

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className=" w-full h-[1px] bg-richblack-700"></div>
                    <p className="text-richblack-700 font-medium leading[1.375rem]">OR</p>
                    <div className="w-full h-[1px] bg-richblack-700"></div>
                </div>
                
                <button
                onClick={()=>{
                    toast.error("Sorry, you can not use this right now");
                }} className="font-medium flex justify-center items-center rounded-[8px] text-richblack-200 w-full border border-white px-[12px] py-[8px] gap-x-2 mt-6 transition duration-500 hover:bg-slate-50 hover:text-black hover:scale-[1.02] active:scale-[1]">
                    <FcGoogle/>Sign In with Google</button>
            </div>


            <div className="w-[80%] relative mx-auto max-md:order-first">
                <img src={frame}
                    alt="frame"
                    width={558}
                    height={504}
                    loading="lazy"></img>

                <img className="absolute top-[-20px] left-[-20px]" src={image}
                    alt="students"
                    width={558}
                    height={504}
                    loading="lazy"></img>
            </div>
        </div>
    );
}

export default Template;