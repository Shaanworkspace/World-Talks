
import './App.css'

import AppLayout from './Components/Layout/AppLayout'
import ErrorPage from './Pages/ErrorPage'

import Contact from './Pages/Contact'
import About from './Pages/About'
import Country from './Pages/Country'

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import HeroSection from './Pages/HeroSection'



const router = createBrowserRouter([

    {
        path:"/world-Talks/",
        element:<AppLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/world-Talks/",
                element:<HeroSection/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/country",
                element:<Country/>
            }
        ]
    }
    
],
    { basename: "/world-Talks" })

function App() {
    return (
    <RouterProvider router={router}>
        <h1 >hello</h1>
    </RouterProvider>
    )
}

export default App
