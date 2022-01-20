import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { GameSlice } from "../../redux/reducers/slices/GameSlice";
import { ICard } from "../../models/ICard";
import "./Game.sass";

interface IGeme {
    difficulty: string
};

const Game: FC<IGeme> = ({difficulty}) => {
    const {inutialGame} = GameSlice.actions;
    const dispatch = useAppDispatch();

    const cards: ICard[] = useAppSelector(state => state.GameSlice.cards);
    console.log(cards);

    const [stateCards, setStateCards] = useState<ICard[]>([]);

    const counter: Function = (time: number): void => {
        const counter = document.querySelector('.game__counter');
        const info = document.querySelector('.game__score');
        const block = document.querySelector('.game__block');
        setInterval(() => {
            if(--time >= 0){
                console.log(time);
                (counter as HTMLElement).innerText = time.toString();
            }else{
                counter?.classList.add('invisible');
                info?.classList.remove('invisible');
                block?.classList.add('invisible');
            }
        }, 1000);
    };

    useEffect(() => {
        counter(3);
    }, []);

    useEffect(() => {
        dispatch(inutialGame(difficulty));
    }, [difficulty, inutialGame, dispatch]);

    useEffect(() => {
        setStateCards(cards);
    }, [cards]);

    const items: JSX.Element[] = stateCards.map(card => { 
        return(
            <div className="game__item" key={card.id}>
                <div className="game__card">
                    <div className={card.status ? "game__card-front game__card-front-" + difficulty + " game__card-front--rotate" : "game__card-front game__card-front-" + difficulty}>
                        <div className="game__icon-barcode"></div>
                    </div>
                    <div className={card.status ? "game__card-back game__card-back--rotate" : "game__card-back"}>
                        <div className={"game__icon-" + card.type}></div>
                    </div>
                </div>
            </div>
        )
    });


    return(
        <section className="game">
            <div className="game__block"></div>
            <div className="game__info">
                <div className="game__counter">3</div>
                <div className="game__score invisible">
                    Количество сделанных ходов: <span className="game__score-info">0</span>
                </div>
            </div>
            
            <div className={"game__list game__list-" + difficulty}>
                {items}
            </div>
        </section>
    )
};

export { Game };