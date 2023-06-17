import { Link } from "react-router-dom";
import "../styles/Error.css";

/** Error function
 *
 * retrieve error with a link
 *
 * @returns the Error page
*/
function Error(){
    return (
        <div className="container-error">
          <Link to="/" className="link-error">Oups! Revenez à la page d'accueil</Link>
        </div>
    )
}

export default Error;