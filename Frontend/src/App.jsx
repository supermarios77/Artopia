import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Art from "./pages/Art/Art";
import Home from "./pages/Home/Home";


const App = () => {
  return (
    <Routes>
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
      <Route path="/art" Component={Art} />
      <Route path="/" Component={Home} />
    </Routes>
  )
}

export default App
