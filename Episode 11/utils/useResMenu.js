import { useEffect,useState } from "react"
import { MENU_API } from "./constant";

const useResMenu = (resid) =>{
    const [resdata, setresdata] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[])

     const fetchMenu = async () => {
        const data = await fetch(
         MENU_API + resid
        );
    
        const json = await data.json();
    
        setresdata(json);
        console.log(json);
      };

      return resdata;
}

export default useResMenu;