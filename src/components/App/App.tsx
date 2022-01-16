import { FC } from "react";
import { Routes, Route} from 'react-router';
import { Layout } from "../Layout/Layout";
import { Start } from "../../pages/Start";
import { Light } from "../../pages/Light";
import { Difficult } from "../../pages/Difficult";
import { Heavy } from "../../pages/Heavy";
import { NotFoundPage } from "../../pages/NotFoundPage";
import "./App.sass";

const App: FC = () => {
    return(
        <div className="App">
            <div className="bg"></div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Start />} />
                    <Route path="/light" element={<Light />} />
                    <Route path="/difficult" element={<Difficult />} />
                    <Route path="/heavy" element={<Heavy />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </div>
    )
};

export { App };