import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constant";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";

const Resmenu = () => {

  const {resid} = useParams();
  const resdata = useResMenu(resid);
  const [showIndex,setshowIndex] = useState(null)




  // restaurant name (safe)
  const name =
    resdata?.data?.cards?.[2]?.card?.card?.info?.name;

  // menu categories
  const menu =
    resdata?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const categories = resdata?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">Menu of {name }</h1>

      <p className="font-bold text-lg">Cost Of two</p>

      {/* Catergory Accrodians */}
      { categories?.map((categories , Index) => (<ResCategory key={categories.card.card.categoryId} 
      data={categories?.card?.card} 
      showItems={Index == showIndex ? true : false}
      setshowIndex={() =>
  setshowIndex(showIndex === Index ? null : Index)
}
      />
    
      
      )) }


      
  

    </div>
     
  )

} 

export default Resmenu;