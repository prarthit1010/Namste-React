import { LOGO_URL } from "../utils/constant";  
  
  const Header = () =>{

      return (
        <div className="header">

        <img  className="header-logo" src={LOGO_URL}/>
    
          <ul>
            <li>About us</li>
            <li>Contect us</li>
            <li>Home</li>
            <li>Our info</li>
          </ul>
      
        </div>
      );
  }
  export default Header;