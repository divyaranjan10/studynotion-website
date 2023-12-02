import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Signup({id,SetId}) {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cnfpassword: ""
    })

    const Navi = useNavigate();

    const [showpwd, setShowPwd] = useState(false);
    const [showpwd2, setShowPwd2] = useState(false);

    function changeHandler(e) {
        const { name, type, value } = e.target;
        setFormData((prev) => {
            return ({
                ...prev,
                [name]: value
            });
        })
    }

    const [toggle, setToggle] = useState("student");
    return (
        <div className="flex flex-col gap-3">
            <div className="toggleClass flex rounded-full bg-richblack-800 text-white w-fit py-1 px-1">
                <button
                    className={`py-2 px-5  ${toggle === "student" ? "bg-black rounded-full text-white" : "text-richblack-100"}`}
                    onClick={() => {
                        setToggle("student");
                    }}
                >Students</button>
                <button
                    className={`py-2 px-5 ${toggle === "instructor" ? "bg-black rounded-full text-white" : " text-richblack-100"}`}
                    onClick={() => {
                        setToggle("instructor");
                    }}
                >Instructor</button>
            </div>

            <form className="flex flex-col gap-3">
                <div className="flex gap-5">
                    <label className="grow"><p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name<sup className="text-red-800"> *</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            value={formData.name}
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full">
                        </input>
                    </label>

                    <label className="grow"><p>Last Name</p>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.name}
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full">
                        </input>
                    </label>
                </div>

                <label><p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-red-800"> *</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.name}
                        onChange={changeHandler}
                        placeholder="Enter Email id"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full">
                    </input>
                </label>

                <div className="flex gap-5">
                    <label className="grow"><p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password<sup className="text-red-800"> *</sup></p>
                        <input
                            required
                            type={showpwd ? ("text") : ("password")}
                            name="password"
                            value={formData.name}
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full">
                        </input>

                    </label>

                    <label className="grow"><p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password<sup className="text-red-800"> *</sup></p>
                        <input
                            required
                            type={showpwd2 ? ("text") : ("password")}
                            name="cnfpassword"
                            value={formData.name}
                            onChange={changeHandler}
                            placeholder="Enter Confirm Password"
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full">
                        </input>
                    </label>
                </div>

                <button className="font-medium flex justify-center items-center rounded-[8px] text-black bg-yellow-300 w-full px-[12px] py-[8px] gap-x-2 mt-6 hover:scale-[1.02] active:scale-[1]" 
                onClick={(e) => {
                    if (formData.password != formData.cnfpassword) {
                        e.preventDefault();
                        toast.error("Password mismatch");
                        return;
                    }
                    if (formData.firstName!="" && formData.lastName!="" && formData.email!="" && formData.cnfpassword!="" &&formData.password!="") {
                        id.push(formData);
                        SetId(id);
                        e.preventDefault();
                        Navi("/");
                        toast.success("Account created succesfully");
                        console.log(formData);
                    }
                }}>
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default Signup;