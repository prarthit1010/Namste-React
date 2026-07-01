import ResCard from "./ResCard"
import resObj from "../utils/mockdata";
const Body = () => {

    return( 
    
    <div>

    <div className="serch-bar"> Search Bar</div>

    <div className="res-container">
     
    {  resObj.map((restaurant) => (
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