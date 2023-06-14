import { Link } from "react-router-dom";
import "../styles/Error.css";

function Error(){
    return (
        <div className="container-error">
          <Link to="/" className="link-error">Oups! Revenez à la page d'accueil</Link>
        </div>
    )
}

export default Error;