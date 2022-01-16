import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./sass/Start.sass";

const Start: FC = () => {
    return(
        <section className="choice">
            <div className="choice__info">Выберите уровень сложности</div>
            <nav className="choice__list">
                <NavLink className="choice__link-light" to="/light"> Лёгкий </NavLink>
                <NavLink className="choice__link-difficult" to="/difficult"> Сложный </NavLink>
                <NavLink className="choice__link-heavy" to="/heavy"> Тяжелый </NavLink>
            </nav>
        </section>
    )
};

export { Start };