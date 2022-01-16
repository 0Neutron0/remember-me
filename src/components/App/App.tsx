import { FC } from "react";
import { Routes, Route} from 'react-router';
import { Layout } from "../Layout/Layout";
import { Start } from "../../pages/Start";
import { Play } from "../../pages/Play";
import { NotFoundPage } from "../../pages/NotFoundPage";
import "./App.sass";

const App: FC = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Start />} />
                <Route path="/play" element={<Play />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
};

export { App };