import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CurrentEmployees from "../pages/CurrentEmployees";
import Error from "../pages/Error";

function RouteManager(){
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/employee" element={<CurrentEmployees />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Router>
      );
}
export default RouteManager;