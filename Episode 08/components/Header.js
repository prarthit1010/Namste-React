import { useState } from "react";
import { LOGO_URL } from "../utils/constant";  
import { Link } from "react-router";
  
  const Header = () =>{

  const [lgnbtn,setlgnbtn] = useState("Login");  
      return (
        <div className="header">

        <img  className="header-logo" src={LOGO_URL}/>
    
          <ul>
       
            <li><Link to= "/about">About us</Link></li>
            <li><Link to="/contactus">Contect us</Link></li>
            <li>Home</li>
            <li>Our info</li>
            <button className="login-btn" onClick={() =>{lgnbtn == "Login" ? setlgnbtn("Logout") : setlgnbtn("Login")}}>{lgnbtn}</button>
          </ul>
      
        </div>
      );
  }
  export default Header;30. /678