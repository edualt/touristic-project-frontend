import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import routes from "../consts/routes";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
