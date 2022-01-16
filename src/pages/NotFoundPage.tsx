import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./sass/NotFoundPage.sass";

const NotFoundPage: FC = () => {
    return(
        <div className="error-404">
            <div className="error-404__code">
                404
            </div>
            <div className="error-404__text">
                Ошибка
            </div>
            <NavLink className="error-404__link" to="/" > На главную </NavLink>
        </div>
    )
};

export { NotFoundPage };