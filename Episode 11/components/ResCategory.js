import React, { useState } from 'react'
import Iteamlits from './IteamList'

const ResCategory = ({data}) => {

    const[showItems,SetShowItems]= useState(false)

    const handleClick = () => {
        SetShowItems(!showItems)
    }

    //console.log(data)
  return (

    <div>
    <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
    <div className='flex justify-between cursor-pointer' onClick={handleClick}>
        {/* Headrer */}
        {/* <h1>{data.card.card.itemC}</h1> */}
        <span className="font-bold text-lg ">{data.title} ({data.itemCards.length})</span>
        <span>🔽</span>
    </div> 
        {/* Accordian data       */}
     {showItems && <Iteamlits iteams ={data.itemCards}/>}
       
    </div>
         
    </div>
  )
}

export default ResCategory