// const heading = React.createElement("h1",{ id : "heading" , xyz : "abc"},"This is h1 from the React");
// //{} is used for the Atribute in react
//  const root =ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

 // if we want to multiple h1 tag or w want to h1 inside h1 tag then ???

 import React from "react";
 //import ReactDOM from "react-dom"
 import ReactDOM from "react-dom/client";

const heading = React.createElement("div",{ id : "Parent"},
        React.createElement("div",{id : "child"},
                [ React.createElement("h1",{key :1},"This is h1 from the React"),
                React.createElement("h2",{key :2},"This is h2 from the React")]));

                
const Jsxheading = (
<>
<h1>This is JSX heading</h1>
<h2>this is h2 tag</h2>
</> );    


// what is REact Components ?
// React functiona; Componenets means Normal JAvascript Function which return jsx. or React Eelements.


const value = 1000;
  const Heading = () =>{
        return(

                <div>
                {value}
                <Titel/>
        <h1>This is H1 Using the functional Componenets</h1>
       </div> );
  }

// wen we pun one componenets to athoe then this is called componenets composition
  const Titel = () => <h1>this is tilerm from the Title Components</h1>
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);



