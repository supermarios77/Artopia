import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Art from "./pages/Art/Art";
import Home from "./pages/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./pages/Dashboard/Dashboard";


const App = () => {
  return (
    <div>
      <SideBar />
    <Routes>
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
      <Route path="/art" Component={Art} />
      <Route path="/" Component={Home} />
      <Route path="/dashboard" Component={Dashboard} />
    </Routes>
    </div>
  )
}

export default App
