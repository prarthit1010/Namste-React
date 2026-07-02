import ResCard from "./ResCard"
import resObj from "../utils/mockdata";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

// we use useState for that because if we done with normal Variable so it can not be able to change the UI so w euse react hooks and usestate for this.

const [reslist , setrestlist] = useState([]);    

useEffect(()=>{
    fetchdata();
},[]);


const fetchdata = async () =>{
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

    const json = await data.json();
    console.log(json);
    setrestlist(json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}

if(reslist.length === 0){

    return(<Shimmer/> );
}

    return( 
    
    <div>
       
    <button className="fliter-btn" onClick={() => { const filterlist = reslist.filter(
        (res) => res.info.avgRating > 4.5);
        
        setrestlist(filterlist)}}> Filter the Restrorantes</button>

    <div className="res-container">
     
    {  reslist.map((restaurant) => (
    <ResCard
        key={restaurant.info.id}
        resdata={restaurant}
    />
))
}
        
    </div>
    </div>
    )

  }

  export default Body;