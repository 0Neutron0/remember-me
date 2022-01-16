import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./Layout.sass";

const Layout: FC = () => {
    return(
        <div className="container">
            <Header/>
                <main className="content">
                    <Outlet/>
                </main>
            <Footer/>
        </div>
    )
};

export { Layout };