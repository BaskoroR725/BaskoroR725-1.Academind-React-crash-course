import { Outlet } from "react-router-dom";
import MainHeader from "../src/components/MainHeader";

function RouterLayout(){
    return(
        <>
            <MainHeader />
            <Outlet/>
        </>
    );
}

export default RouterLayout;