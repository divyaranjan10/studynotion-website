import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login({ setIsLogin ,id}) {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const Navi = useNavigate();

    const [showpwd, setShowPwd] = useState(false);

    function changeHandler(e) {
        const { name, type, value } = e.target;
        setFormData((prev) => {
            return ({
                ...prev,
                [name]: value
            });
        })
    }
    return (
        <form className="flex flex-col gap-3">
            <label htmlFor="email" className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-red-800"> *</sup></p>
                <input
                    onChange={changeHandler}
                    type="email"
                    name="email"
                    id="email"
                    value={formData.name}
                    placeholder="Enter email id (Test Id: abc@gmail.com)"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full"
                    required>
                </input>
            </label>

            <label htmlFor="password"><p className="relative text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Password<sup className="text-red-800"> *</sup></p>
                <input
                    required
                    onChange={changeHandler}
                    type={showpwd ? ("text") : ("password")}
                    name="password"
                    id="password"
                    value={formData.name}
                    placeholder="Enter password (Test Pass: 1234)"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full">
                </input>
                
                <Link to="#"><p className="text-blue-100 text-right text-sm hover:text-blue-500">Forgot Password</p></Link>
            </label>

            <button
                type="submit"
                className="font-medium flex justify-center items-center rounded-[8px] text-black bg-yellow-300 w-full px-[12px] py-[8px] gap-x-2 mt-6 hover:scale-[1.02] active:scale-[1]"
                onClick={(e) => {
                    if (formData.email != "" && formData.password != "") {
                        e.preventDefault();
                        let flag = false;
                        console.log(id);
                        for(let i=0;i<id.length;i++){
                            if(id[i].email==formData.email && id[i].password==formData.password){
                                console.log("Hi");
                                flag=true;
                                break;
                            }
                        }
                        if (flag) {
                            setIsLogin(true);
                            toast.success("Login Succesfull");
                            Navi("/dashboard");
                        }
                        else{
                            toast.error("Credentials don't match")
                        }
                    }
                }}>Sign In</button>
        </form>

    );
}

export default Login;