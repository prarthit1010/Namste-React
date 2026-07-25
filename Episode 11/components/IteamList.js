import { PHOTO_URL } from "../utils/constant.js";

const Iteamlits = ({ iteams }) => {

  return (
    <div>
      {iteams.map((iteam) => (
        <div
          key={iteam.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between "
        >

        <div>
          <div className="py-2 font-bold">

            <span>{iteam.card.info.name}</span>

            <span className="text-gray-500">
              {" "}
              - ₹ {(iteam.card.info.price || iteam.card.info.defaultPrice) / 100}
            </span>
          </div>

          <p>{iteam.card.info.description}</p>

          </div>

        <div> 
        <div className="absolute">

          <button  className="bg-black text-white p-2 text-xs rounded-xl ">ADD +</button>
        </div>  
          <img src={PHOTO_URL + iteam.card.info.imageId} className="w-25 rounded-xl mb-5"/>
        </div>
        </div>
      ))}
    </div>
  );
};

export default Iteamlits;