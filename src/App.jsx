import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './Components/Layout/AppLayout';
import ErrorPage from './Pages/ErrorPage';
import HeroSection from './Pages/HeroSection';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Country from './Pages/Country';

// ✅ Add basename to handle GitHub Pages subdirectory
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <ErrorPage />,
            children: [
                { path: "", element: <HeroSection /> },  // ✅ Use "" instead of "/"
                { path: "contact", element: <Contact /> },
                { path: "about", element: <About /> },
                { path: "country", element: <Country /> }
            ]
        }
    ],
    { basename: "/world-Talks" } // ✅ Add this for GitHub Pages
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
