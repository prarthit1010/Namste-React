// const heading = React.createElement("h1",{ id : "heading" , xyz : "abc"},"This is h1 from the React");
// //{} is used for the Atribute in react
//  const root =ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

 // if we want to multiple h1 tag or w want to h1 inside h1 tag then ???

const heading = React.createElement("div",{ id : "Parent"},
        React.createElement("div",{id : "child"},
                [ React.createElement("h1",{},"This is h1 from the React"),
                React.createElement("h2",{},"This is h2 from the React")]));
                
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


