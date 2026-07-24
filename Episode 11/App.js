
  import React, { lazy, Suspense } from "react";
  //import ReactDOM from "react-dom"
  import ReactDOM from "react-dom/client";
  import Header from "./components/Header";
  import Body from "./components/Body";
  import About from "./components/About";
  import ContactUs from "./components/ContactUs";
  import { createBrowserRouter , Outlet, RouterProvider } from "react-router";
  import Error from "./components/Error";
  import Resmenu from "./components/Resmenu";
//import Grocery from "./components/Grocery";


const Grocery = lazy(()=> import("./components/Grocery"))

    const Applayout= () =>{
          return(
          <div className=" app">
            <Header/>
            <Outlet/>
          </div>
          );
    }

    const appRouter = createBrowserRouter([
      {
        path : "/",
        element : <Applayout/>,
        errorElement : <Error />,
        children : [

      {
        path : "/",
        element : <Body/>
      },

      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/contactus",
        element : <ContactUs />
      },
      {
        path : "/resmenu/:resid",
        element : <Resmenu />
      },
      {
        path : "/grocery",
        element : <Suspense fallback={<h1>Loading........</h1>}><Grocery /></Suspense>
      },

        ]
      },
      
    ])

  const root =ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter}/>);



