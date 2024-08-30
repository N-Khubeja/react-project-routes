
import Layout from "./layout/Layout"
import AboutPage from "./pages/AboutPage"
import Dinamic from "./pages/Dinamic"
import Forerror from "./pages/Forerror"
import HomePage from "./pages/HomePage"
import MainPage from "./pages/MainPage"

const Route = [
    {
        element:<Layout/>,
        path:'/',
        children:[
            {
                element:<HomePage/>  ,
                index:true 
            },
            {
                element:<MainPage/>  ,
                path:'/main'   
            },
            {
                element:<AboutPage/>  ,
                path:'/about'   
            }
        ]
    },
    {
        element:<Dinamic/>,
        path:'/k/:id'
    },
    {
        element:<Forerror/>,
        path:'*'
    }
]   

export default Route