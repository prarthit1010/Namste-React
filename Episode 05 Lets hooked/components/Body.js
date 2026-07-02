import ResCard from "./ResCard"
import resObj from "../utils/mockdata";
import { useState } from "react";
const Body = () => {

    // we use useState for that because if we done with normal Variable so it can not be able to change the UI so w euse react hooks and usestate for this.

const [reslist , setrestlist] = useState(resObj);    

    return( 
    
    <div>
        {console.log(reslist)}
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