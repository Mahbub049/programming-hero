import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;