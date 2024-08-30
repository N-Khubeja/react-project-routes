import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
           <div>
            <Link to={'/'}>home</Link>
            <Link to={'/main'}>main</Link>
            <Link to={'about'}>about</Link>

            <Outlet/>
           </div>
    )
}

export default Layout