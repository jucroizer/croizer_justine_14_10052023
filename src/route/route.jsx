import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CreateEmployees from "../pages/CreateEmployees";
import Error from "../pages/Error";

function RouteManager(){
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<CreateEmployees />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Router>
      );
}
export default RouteManager;