import { FC } from "react";
import { ArrowBack } from "../components/ArrowBack/ArrowBack";
import { Game } from "../components/Game/Game";

const Difficult: FC = () => {
    return(
        <>
            <ArrowBack />
            <Game difficulty="difficult" time={5}  />
        </>
    )
};

export { Difficult };