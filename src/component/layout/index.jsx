import NavBar from "../navBar";
import Footer from "../footer";
import {Outlet} from "react-router-dom";

const Layout = ()=>{
    return(
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Layout;