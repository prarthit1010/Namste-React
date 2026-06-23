
  import React from "react";
  //import ReactDOM from "react-dom"
  import ReactDOM from "react-dom/client";

  const Header = () =>{

      return (
        <div className="header">

        <img  className="header-logo" src="https://cdn2.f-cdn.com/contestentries/45266/8725281/527e2072f39cf_thumb900.jpg"/>
    
          <ul>
            <li>About us</li>
            <li>Contect us</li>
            <li>Home</li>
            <li>Our info</li>
          </ul>
      
        </div>
      );
  }

  const ResCard = () =>{
    return(
      <div className=" res-card">
        <img className="res-card-img" src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2026/1/12/95cbb73a-db4b-456a-aba4-60457157891f_images3b0741e60b9754b6dbd8278b721485cfac062fef79a264fc499f71958ff79a2c4.JPG" />
        <div className="cusions">
          <h2>Kabhi b</h2>
          <h4>BEscake,Good Vibe, HAppy birthday</h4>
          <h4>Ahemdabad Gujarat</h4>
          <h4>4.2 star</h4>
        </div>
      </div>
    );
  }

  const Body = () => {

    return( 
    
    <div>

    <div className="serch-bar"> Search Bar</div>

    <div className="res-container">
      <ResCard/>
      <ResCard/>
      <ResCard/>
      <ResCard/>
      <ResCard/>
      <ResCard/>
      <ResCard/>
      <ResCard/>

    </div>

    
    </div>
    )


  }

    const Applayout= () =>{
          return(
          <div className=" app">
            <Header/>
            <Body/>
          </div>
          );
    }

  const root =ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Applayout/>);



