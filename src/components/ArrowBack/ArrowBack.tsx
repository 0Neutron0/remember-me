import { Link } from "react-router-dom";
import "./ArrowBack.sass";

const ArrowBack = () => {
    return(
        <Link className="arrow arrow__game" to="/" ></Link>
    )
};

export { ArrowBack };