import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import Art from "./pages/Art/Art";


const App = () => {
  return (
    <Routes>
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
      <Route path="/art" Component={Art} />
    </Routes>
  )
}

export default App
