import { FC } from "react";
import { Game } from "../components/Game/Game";
import { ArrowBack } from "../components/ArrowBack/ArrowBack";

const Light: FC = () => {
    return(
        <>
            <ArrowBack />
            <Game difficulty="light" />
        </>
    )
};

export { Light };