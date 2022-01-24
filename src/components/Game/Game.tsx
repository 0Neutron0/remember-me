import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { GameSlice } from "../../redux/reducers/slices/GameSlice";
import { openCardTimer, startTimer } from "../../redux/reducers/asyncActionsCreator";
import { ICard } from "../../models/ICard";
import { IGame } from "../../models/IGame";
import "./Game.sass";

interface Props {
    difficulty: string;
    time: number;
};

const Game: FC<Props> = ({difficulty, time}) => {

    const {inutialGame, rotateCard, changeTimer} = GameSlice.actions;

    const dispatch = useAppDispatch();

    const game: IGame = useAppSelector(state => state.GameSlice);
    const cards: ICard[] = game.cards;

    useEffect(() => {
        dispatch(changeTimer(time));
        dispatch(startTimer(time));
    }, [time, dispatch, changeTimer]);

    useEffect(() => {
        dispatch(inutialGame(difficulty));
    }, [difficulty, inutialGame, dispatch]);

    const openCard: Function = (card: ICard): void => {
        dispatch(rotateCard(card));
        dispatch(openCardTimer(card));
    };

    const items: JSX.Element[] = cards.map(card => { 
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
            <div className={game.notClick ? "game__block" : "game__block invisible"}></div>
            <div className="game__info">
                <div className={game.renderScor ? "game__counter invisible" : "game__counter"} >{game.timer}</div>
                <div className={game.renderScor ? "game__score" : "game__score invisible"}>
                    Количество сделанных ходов: <span className="game__score-info">{game.countSteps}</span>
                </div>
            </div>
            
            <div className={"game__list game__list-" + difficulty}>
                {items}
            </div>
            <div className={game.gameStatus ? "victory visible" : "victory invisible"}>
                <div className="victory__info">
                    <div className="victory__title">
                        Поздравляем, Вы выиграли!
                    </div>
                    <div className="victory__score">
                        Всего сделанно ходов: <span className="victory__score-info">{game.countSteps}</span>
                    </div>
                    <div className="victory__nav">
                        <Link className="victory__choice" to="/">Выбрать уровень сложности</Link>
                        <div className="victory__restart" onClick={() => document.location.reload()}>Начать игру заново</div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export { Game };