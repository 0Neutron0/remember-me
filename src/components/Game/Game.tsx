import { FC } from "react";
import "./Game.sass";

const Game: FC = () => {
    return(
        <section className="game">
            <div className="game__info">
                <div className="game__counter">Отсчет</div>
                <div className="game__score">Количество сделанных ходов</div>
            </div>
            
            <div className="game__list">
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front game__card-front--rotate">
                            <div className="game__icon-barcode"></div>
                        </div>
                        <div className="game__card-back game__card-back--rotate">back</div>
                    </div>
                </div>
                <div className="game__item">
                <div className="game__card">
                        <div className="game__card-front">
                            <div className="game__icon-barcode"></div>
                        </div>
                        <div className="game__card-back">back</div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">
                            <div className="game__icon-barcode"></div>
                        </div>
                        <div className="game__card-back">back</div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">front</div>
                        <div className="game__card-back">back</div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">front</div>
                        <div className="game__card-back">back</div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">front</div>
                        <div className="game__card-back">back</div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">front</div>
                        <div className="game__card-back">back</div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">front</div>
                        <div className="game__card-back">back</div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">front</div>
                        <div className="game__card-back">back</div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">front</div>
                        <div className="game__card-back">back</div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">front</div>
                        <div className="game__card-back">back</div>
                    </div>
                </div>
                <div className="game__item">
                    <div className="game__card">
                        <div className="game__card-front">front</div>
                        <div className="game__card-back">back</div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export { Game };