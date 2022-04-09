import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Register from "./components/Register/Register";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/orders" element={<Orders></Orders>} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
    </div>
  );
}

export default App;
