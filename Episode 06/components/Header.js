import { useState } from "react";
import { LOGO_URL } from "../utils/constant";  
  
  const Header = () =>{

  const [lgnbtn,setlgnbtn] = useState("Login");  
      return (
        <div className="header">

        <img  className="header-logo" src={LOGO_URL}/>
    
          <ul>
            <li>About us</li>
            <li>Contect us</li>
            <li>Home</li>
            <li>Our info</li>
            <button className="login-btn" onClick={() =>{lgnbtn == "Login" ? setlgnbtn("Logout") : setlgnbtn("Login")}}>{lgnbtn}</button>
          </ul>
      
        </div>
      );
  }
  export default Header;