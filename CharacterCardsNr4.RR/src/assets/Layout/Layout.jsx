import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Navigation/>
            <Outlet/>
        </>
    )
}

export default Layout;