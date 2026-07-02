import ResCard from "./ResCard"
import resObj from "../utils/mockdata";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

// we use useState for that because if we done with normal Variable so it can not be able to change the UI so w euse react hooks and usestate for this.

const [reslist , setrestlist] = useState([]);    
const [searchtext,setsearchtext] = useState("");
const [searchreslist,setsearchreslist] = useState();

useEffect(()=>{
    fetchdata();
},[]);


const fetchdata = async () =>{
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

    const json = await data.json();
    console.log(json);
    setrestlist(json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setsearchreslist(json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

if(reslist.length === 0){

    return(<Shimmer/> );
}

    return( 
    
    <div>
         <div className="filter">
            <div>
            <input type="text" className="input-text" value={searchtext} onChange={(e) => { setsearchtext(e.target.value)}}></input> 
            <button onClick={() =>{
                
                console.log(searchtext)
                const filterreslist = reslist.filter(
                    (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase())

                    
                )
                setsearchreslist(filterreslist)
                
                }
            
            }>Search</button>
            </div>
         <div>
             <button className="filter-btn" onClick={() => { const filterlist = reslist.filter(
                  (res) => res.info.avgRating > 4.5);
        
                    setrestlist(filterlist)}}> Filter the Restrorantes</button>
         </div>
        </div>
    <div className="res-container">
        
    {  searchreslist.map((restaurant) => (
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