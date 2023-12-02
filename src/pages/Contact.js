import "./Contact.css";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import toast from "react-hot-toast";
import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        email: ""
    });

    function changeHandler(e) {
        const { name, value } = e.target;

        setFormData((prev) => {
            return ({
                ...prev, [name]: value
            });
        })
    }

    function submitHandler(e) {
        e.preventDefault();
        if (formData.email === "") {
            toast.error("Please enter details")
            return
        }

        setTimeout(() => {
            toast.dismiss();
            toast.success("Form submitted");
            setFormData({ email: "" })
        }, 1000);
        toast.loading("Processing");
    }

    const externalClick = () => {
        window.location.replace('https://www.linkedin.com/in/divyaranjan/');
    };

    const externalClickGit = () => {
        window.location.replace('https://github.com/divyaranjan10');
    };

    return (
        <div className="bg-white min-h-screen text-black max-lg:pb-[1020px] overflow-y-auto">
            <div className="relative contact-round h-[300px]  bg-black text-white">
                <div className="absolute top-16 left-3 px-28 w-fit italic text-5xl font-medium leading-normal max-md:text-3xl max-sm:px-10">
                    Work for yourself, not<br />by yourself, with StudyNotion
                </div>
            </div>
            
            <div className="max-xl:flex max-xl:gap-20 max-xl:pt-10 max-xl:px-10 max-lg:flex-col max-lg:items-center max-lg:absolute max-lg:w-screen max-lg:top-[300px]">
                <div className=" bg-white rounded-xl px-20 grow my-16 flex flex-col gap-10 max-lg:order-last max-sm:px-7 py-1">
                    <div>
                        <h1 className="text-lg">General inquires</h1>
                        <p className="text-sm font-medium text-richblack-200">Reach us at <a className="underline text-black" href="mailto:divyaranjan619@gmail.com">divyaranjan619@gmail.com</a><br></br> and we will get back to you asap</p>
                    </div>

                    <div className="flex gap-3">
                        <h4 className="font-semibold text-black">Follow us</h4>
                        <div className="flex gap-3">
                            <FaInstagram className="cursor-pointer" fontSize={30}></FaInstagram>
                            <AiFillLinkedin className="cursor-pointer" onClick={externalClick} fontSize={30}></AiFillLinkedin>
                            <AiFillGithub className="cursor-pointer" onClick={externalClickGit} fontSize={30}></AiFillGithub>
                        </div>
                    </div>
                </div>
                <div className="bg-white absolute shadow top-28 right-[10%] w-[400px] rounded-lg max-xl:relative max-sm:w-[330px] max-lg:right-auto max-xl:top-0 max-lg:top-[-20px] max-md:top-[-80px]">
                    <form className="flex flex-col gap-6 justify-center p-10 text-sm font-medium">
                        <input
                            type="text"
                            className="border border-slate-200 placeholder:text-slate-500 px-3 py-2 w-full rounded-sm"
                            placeholder="First name*">
                        </input>

                        <input
                            type="text"
                            className="border border-slate-300 placeholder:text-slate-500 px-3 py-2 w-full rounded-sm"
                            placeholder="Last name*">
                        </input>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={changeHandler}
                            className="border border-slate-300 placeholder:text-slate-500 px-3 py-2 w-full rounded-sm"
                            placeholder="Email address*">
                        </input>

                        <input
                            type="text"
                            className="border border-slate-300 placeholder:text-slate-500 px-3 py-2 w-full rounded-sm"
                            placeholder="Phone number*">
                        </input>

                        <input
                            type="text"
                            className="border border-slate-300 placeholder:text-slate-500 px-3 py-2 w-full rounded-sm"
                            placeholder="Best time to contact you?">
                        </input>

                        <select
                            className="border border-slate-300 px-3 py-2 w-full rounded-sm">
                            <option>Select</option>
                            <option>Phone</option>
                            <option>Email</option>
                        </select>

                        <textarea
                            placeholder="Do you have any additional information?"
                            className="border border-slate-300 placeholder:text-slate-500 px-3 py-2 w-full rounded-sm overflow-hidden"
                            rows="5" col="33">
                        </textarea>

                        <button
                            onClick={submitHandler}
                            className="bg-black text-white px-3 py-2 w-full rounded-sm outline-none border-none">
                            Submit your message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;