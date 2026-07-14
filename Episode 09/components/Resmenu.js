import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constant";
import useResMenu from "../utils/useResMenu";

const Resmenu = () => {

  const {resid} = useParams();
  const resdata = useResMenu(resid);




  // restaurant name (safe)
  const name =
    resdata?.data?.cards?.[2]?.card?.card?.info?.name;

  // menu categories
  const menu =
    resdata?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div >
      <h1>Menu of {name }</h1>

      {menu?.filter(c => c.card?.card?.title)?.map((category, index) => (
        <div key={index} >
          
          {/* Category Title */}
          <h2>
            {index + 1}. {category.card.card.title}
          </h2>

          {/* Items */}
          <ul>
            {category.card.card.itemCards?.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} — ₹
                {item.card.info.price / 100}
              </li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
};

export default Resmenu;