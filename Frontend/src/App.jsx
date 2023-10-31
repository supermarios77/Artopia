import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Routes, Route, Switch } from "react-router-dom";


const App = () => {
  return (
    <Routes>
      <Switch>
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
      </Switch>
    </Routes>
  )
}

export default App
