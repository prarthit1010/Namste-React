  import{PHOTO_URL} from "../utils/constant";
  import resObj from "../utils/mockdata";


  
  const ResCard = ({resdata}) =>{



    const {name,cuisines,locality,avgRating , cloudinaryImageId} = resdata?.info
    return(
      <div className=" res-card">
        <img className="res-card-img" src= {PHOTO_URL+ cloudinaryImageId }/>
        <div className="cusions">
          <h2>{name}</h2>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{locality}</h4>
          <h4>{avgRating}</h4>
        </div>
      </div>
    );
  }

export default ResCard;  