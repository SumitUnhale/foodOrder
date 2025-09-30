import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import CartLayout from "./components/CartLayout.js";
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import React, { lazy, Suspense} from "react";
import { Provider, provider } from "react-redux";
import appStore from "./utils/appStore.js";
import ShowCard from "./components/ShowCard.js";


const Grocery = lazy( ()=> import("./components/Grocery.js"));

const AppLayout = () => {
    return (
        <Provider store={appStore} >
            <div className="App">
                <Header />
                <Outlet />
            </div>
        </Provider>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <CartLayout />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
            },
            {
                path:"/grocery",
                element:(<Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>)
            },
            {
                path:"/card",
                element:<ShowCard />
            },
            
        ],
        errorElement: <Error/>,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);