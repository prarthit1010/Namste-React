import { useState } from "react";
import { LOGO_URL } from "../utils/constant";  
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
  
  const Header = () =>{

  const [lgnbtn,setlgnbtn] = useState("Login");  

  const onlineStatus = useOnlineStatus();
      return (
        <div className="flex justify-between bg-pink-200 ">

        <img  className="w-26" src={LOGO_URL}/>
    
        <div className="flex">
          <ul className=" flex p-4 m-4 items-center">
       
            <li className="px-4">Status : {onlineStatus ? "✔" : "X"}</li>
            <li className="px-4"><Link to= "/about">About us</Link></li>
            <li className="px-4"><Link to="/contactus">Contect us</Link></li>
            <li className="px-4">Home</li>
            <li className="px-4">Our info</li>
            <li className="px-4"><Link to= "/grocery">Grocery</Link></li>
            <button className="px-4 text-center " onClick={() =>{lgnbtn == "Login" ? setlgnbtn("Logout") : setlgnbtn("Login")}}>{lgnbtn}</button>
          </ul>
        </div>
        </div>
      );
  }
  export default Header;30. /678