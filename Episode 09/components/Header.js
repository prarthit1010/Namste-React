import { useState } from "react";
import { LOGO_URL } from "../utils/constant";  
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
  
  const Header = () =>{

  const [lgnbtn,setlgnbtn] = useState("Login");  

  const onlineStatus = useOnlineStatus();
      return (
        <div className="header">

        <img  className="header-logo" src={LOGO_URL}/>
    
          <ul>
       
            <li>Status : {onlineStatus ? "✔" : "X"}</li>
            <li><Link to= "/about">About us</Link></li>
            <li><Link to="/contactus">Contect us</Link></li>
            <li>Home</li>
            <li>Our info</li>
            <li><Link to= "/grocery">Grocery</Link></li>
            <button className="login-btn" onClick={() =>{lgnbtn == "Login" ? setlgnbtn("Logout") : setlgnbtn("Login")}}>{lgnbtn}</button>
          </ul>
      
        </div>
      );
  }
  export default Header;30. /678