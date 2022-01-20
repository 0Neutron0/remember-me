import { FC } from "react";
import { Game } from "../components/Game/Game";
import { ArrowBack } from "../components/ArrowBack/ArrowBack";

const Heavy: FC = () => {
    return(
        <>
            <ArrowBack />
            <Game difficulty="heavy" />
        </>
    )
};

export { Heavy };