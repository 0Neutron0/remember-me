import { FC, useEffect } from "react";
import "./Game.sass";

const Game: FC = () => {
    const counter: Function = (time: number): void => {
        const counter = document.querySelector('.game__counter');
        const info = document.querySelector('.game__score');
        setInterval(() => {
            if(--time >= 0){
                console.log(time);
                (counter as HTMLElement).innerText = time.toString();
            }else{
                counter?.classList.add('invisible');
                info?.classList.remove('invisible');
            }
        }, 1000);
    };

    useEffect(() => {
        counter(3);
    }, []);

    return(
        <section className="game">
            <div className="game__info">
                <div className="game__counter">3</div>
                <div className="game__score invisible">
                    Количество сделанных ходов: <span className="game__score-info">0</span>
                </div>
            </div>
            
            <div className="game__list">
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front game__card-front--rotate">
                            <div className="game__icon-barcode"></div>
                        </div>
                        <div className="game__card-back game__card-back--rotate">
                            <div className="game__icon-code"></div>
                        </div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">
                            <div className="game__icon-barcode"></div>
                        </div>
                        <div className="game__card-back">
                            <div className="game__icon-code"></div>
                        </div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">
                            <div className="game__icon-barcode"></div>
                        </div>
                        <div className="game__card-back">
                            <div className="game__icon-code"></div>
                        </div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">
                            <div className="game__icon-barcode"></div>
                        </div>
                        <div className="game__card-back">
                            <div className="game__icon-code"></div>
                        </div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">
                            <div className="game__icon-barcode"></div>
                        </div>
                        <div className="game__card-back">
                            <div className="game__icon-code"></div>
                        </div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">
                            <div className="game__icon-barcode"></div>
                        </div>
                        <div className="game__card-back">
                            <div className="game__icon-code"></div>
                        </div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">
                            <div className="game__icon-barcode"></div>
                        </div>
                        <div className="game__card-back">
                            <div className="game__icon-code"></div>
                        </div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">
                            <div className="game__icon-barcode"></div>
                        </div>
                        <div className="game__card-back">
                            <div className="game__icon-code"></div>
                        </div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">
                            <div className="game__icon-barcode"></div>
                        </div>
                        <div className="game__card-back">
                            <div className="game__icon-code"></div>
                        </div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">
                            <div className="game__icon-barcode"></div>
                        </div>
                        <div className="game__card-back">
                            <div className="game__icon-code"></div>
                        </div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">
                            <div className="game__icon-barcode"></div>
                        </div>
                        <div className="game__card-back">
                            <div className="game__icon-code"></div>
                        </div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">
                            <div className="game__icon-barcode"></div>
                        </div>
                        <div className="game__card-back">
                            <div className="game__icon-code"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export { Game };