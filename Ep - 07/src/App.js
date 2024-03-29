import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import ResturentMenu from "./components/ResturentMenu";

const App = () => {
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restaurents/:resId',
                element: <ResturentMenu />
            }
        ],
        errorElement: <PageNotFound />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)