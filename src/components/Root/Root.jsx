import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";


const Root = () => {
    return (
        <div>
            {/* <Home></Home> */}
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;