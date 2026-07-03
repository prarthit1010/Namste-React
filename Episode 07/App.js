
  import React from "react";
  //import ReactDOM from "react-dom"
  import ReactDOM from "react-dom/client";
  import Header from "./components/Header";
  import Body from "./components/Body";
  import About from "./components/About";
  import ContactUs from "./components/ContactUs";
  import { createBrowserRouter , RouterProvider } from "react-router";
  import Error from "./components/Error";

    const Applayout= () =>{
          return(
          <div className=" app">
            <Header/>
            <Body/>
          </div>
          );
    }

    const appRouter = createBrowserRouter([
      {
        path : "/",
        element : <Applayout/>,
        errorElement : <Error />
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/contactus",
        element : <ContactUs />
      },
    ])

  const root =ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter}/>);



