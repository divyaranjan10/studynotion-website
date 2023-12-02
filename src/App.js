import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { useState, useEffect } from "react";
import Template from "./Components/Template";
import loginImg from "./image/login.png"
import signupImg from "./image/signup.png"
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [notification, setNotification] = useState(0);
  const [cart, setCart] = useState([]);
  
  //for id and pass
  let [id, setId] = useState([
    { email: "abc@gmail.com", password: "1234" }
  ]
  )

  async function GetData(){
    const data=window.localStorage.getItem('mylogindata');
    if(data!=null) {
      id=JSON.parse(data);
    }
  }
  GetData();

  function SetId(id){
    window.localStorage.setItem('mylogindata',JSON.stringify(id));
  }

  return (
    <div className="relative bg-richblack-900 flex flex-col transition duration-1000 min-h-screen overflow-x-hidden">
      <Navbar isLogin={isLogin} notification={notification} setNotification={setNotification} setIsLogin={setIsLogin}></Navbar>
      {/* title, d1, d2, image, formtype, setIsLogin */}
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} notification={notification} setNotification={setNotification} setCart={setCart} cart={cart}></Home>}></Route>
        <Route path="/login" element={<Template  id={id}  title="Welcome Back" d1="Build skill for today, tomorrow, and beyond" d2="Education to future-proof your career" image={loginImg} formtype="login" setIsLogin={setIsLogin} isLogin={isLogin}></Template>}></Route>
        <Route path="/signup" element={<Template id={id} SetId={SetId} title="Join the millions learning to code with StudyNotation for free" d1="Build skills for today, tomorrow, and beyond." d2="Education to future-proof your career." image={signupImg} formtype="signup" setIsLogin={setIsLogin} isLogin={isLogin}></Template>}></Route>
        { (isLogin)?
          <Route path="/dashboard" element={<Dashboard cart={cart}></Dashboard>}></Route>:
          <Route path="/dashboard" element={<Home isLogin={isLogin} notification={notification} setNotification={setNotification} setCart={setCart} cart={cart}></Home>}></Route>
        }
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}
export default App;
