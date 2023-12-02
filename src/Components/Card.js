import { useState } from "react";
import toast from "react-hot-toast";

function Card({ data, isLogin, notification, setNotification, cart, setCart }) {

    const [toggle, setToggle] = useState(false);
    let [added, setAdded] = useState(false);
    let description = toggle ? data.description : `${data.description.substring(0, 190)}...`;

    function show() {
        if (toggle === false) {
            setToggle(true);
        }
        else {
            setToggle(false);
        }
    }

    function clickHandler(e) {
        e.preventDefault();
        if (isLogin) {
            setAdded(!added)
            if (!added) {
                toast.loading("Processing")
                setTimeout(() => {
                    toast.dismiss();
                    cart.push(data);
                    toast.success("Course Added!");
                    setNotification(notification + 1);
                }, 500);
            }
            else {
                for(let i=0;i<cart.length;i++){
                    if(cart[i].id===data.id){
                        cart.splice(i,1);
                        break;
                    }
                }
                toast.error("Successfully removed!");
                setNotification(notification - 1);
            }
        }

        else {
            toast.error("You need to login first")
        }

    }

    if(isLogin){
        for(let i=0;i<cart.length;i++){
            if(cart[i].id===data.id){
                added=true;
                break;
            }
        }
    }

    return (
        <div className="bg-white shadow-2xl  h-[370px] w-[300px] text-black cursor-default rounded-2xl relative hover:scale-[1.04] border-b-[7px] border-blue-300">
            <div className="photo rounded-lg"><img src={data.image.url} /></div>
            {(setCart!==undefined) &&
                <div className="absolute right-0 top-[33%] px-2">
                { 
                    added ?
                    <button
                        className=" bg-green-400 text-black rounded-2xl py-1 px-4 text-sm font-medium active:scale-[0.9]"
                        onClick={clickHandler}
                    >Added</button> :
                    <button
                        className=" bg-white text-black rounded-2xl py-1 px-4 text-sm font-medium active:scale-[0.9]"
                        onClick={clickHandler}
                    >+ Enroll</button>
                }
            </div>
            }
            <div className="heading text-xl px-2 font-medium"><h3>{data.title}</h3></div>
            <div className="description text-sm font-light px-2"><p>{description}<span className="text-blue-400" onClick={show}>
                {
                    toggle ? `show less` : `show more`
                }
            </span></p></div>
        </div>
    );
}

export default Card;