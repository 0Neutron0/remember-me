import { FC, useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { GameSlice } from "../../redux/reducers/slices/GameSlice";
import { openCardTimer } from "../../redux/reducers/asyncActionsCreator";
import { ICard } from "../../models/ICard";
import { IGame } from "../../models/IGame";
import "./Game.sass";

interface T {
    difficulty: string
};

const Game: FC<T> = ({difficulty}) => {
    const {inutialGame, rotateAll, rotateCard} = GameSlice.actions;

    const dispatch = useAppDispatch();

    const game: IGame = useAppSelector(state => state.GameSlice);
    const cards: ICard[] = game.cards;
    console.log(cards);

    const [stateCards, setStateCards] = useState<ICard[]>([]);

    const counter: Function = useCallback( (time: number): void => {
        const counter = document.querySelector('.game__counter');
        const info = document.querySelector('.game__score');
        const block = document.querySelector('.game__block');
        const timer = setInterval(() => {
            if(--time >= 0){
                console.log(time);
                (counter as HTMLElement).innerText = time.toString();
            }else{
                counter?.classList.add('invisible');
                info?.classList.remove('invisible');
                block?.classList.add('invisible');
                clearInterval(timer);
                dispatch(rotateAll(false));
            }
        }, 1000);
    },[rotateAll, dispatch]);

    useEffect(() => {
        counter(3);
    }, [counter]);

    useEffect(() => {
        dispatch(inutialGame(difficulty));
    }, [difficulty, inutialGame, dispatch]);

    useEffect(() => {
        setStateCards(cards);
    }, [cards]);

    const openCard: Function = (card: ICard): void => {
        dispatch(rotateCard(card));
        dispatch(openCardTimer(card));
    };

    const items: JSX.Element[] = stateCards.map(card => { 
        return(
            <div className="game__item" key={card.id}>
                <div className="game__card">
                    <div 
                        className={card.status ? "game__card-front game__card-front-" + difficulty + " game__card-front--rotate" : "game__card-front game__card-front-" + difficulty}
                        onClick={() => openCard(card)}
                    >
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
                    Количество сделанных ходов: <span className="game__score-info">{game.countSteps}</span>
                </div>
            </div>
            
            <div className={"game__list game__list-" + difficulty}>
                {items}
            </div>
        </section>
    )
};

export { Game };