import { useState } from "react";
import { LOGO_URL } from "../utils/constant";  
import { Link } from "react-router";
  
  const Header = () =>{

  const [lgnbtn,setlgnbtn] = useState("Login");  
      return (
        <div className="header">

        <img  className="header-logo" src={LOGO_URL}/>
    
          <ul>
        {/** Never use <a></a> anchor tag in react beacuse when w euse anchor tag then it reload ghe page and render the hole page isted of use Link tag which is provided by the react-router it is not render the hole page isted of render the only chnage dthing in this this when we click on the about page thn not load header but only load the about componenet and 
        isted of contact us oage load the hole page so never us ethe anchor<a></a> Tag in React */}
            <li><Link to= "/about">About us</Link></li>
            <li><a href="/contactus">Contect us</a></li>
            <li>Home</li>
            <li>Our info</li>
            <button className="login-btn" onClick={() =>{lgnbtn == "Login" ? setlgnbtn("Logout") : setlgnbtn("Login")}}>{lgnbtn}</button>
          </ul>
      
        </div>
      );
  }
  export default Header;