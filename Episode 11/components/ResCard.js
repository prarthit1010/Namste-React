  import{PHOTO_URL} from "../utils/constant";
  import resObj from "../utils/mockdata";


  
  const ResCard = ({resdata}) =>{



    const {name,cuisines,locality,avgRating , cloudinaryImageId} = resdata?.info
    return(
      
      <div className="mx-3   my-2 w-[220px] rounded-lg border border-black bg-gray-100 p-2 transition-colors duration-200 hover:bg-gray-300">
  <img
    className="w-full rounded-md"
    src={PHOTO_URL + cloudinaryImageId}
    alt={name}
  />

  <div className="mt-2">
    <h2 className="font-bold">{name}</h2>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{locality}</h4>
    <h4>{avgRating}</h4>
  </div>
</div>
      
    );
  }

export default ResCard;  