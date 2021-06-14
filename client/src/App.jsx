import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Auth/LogIn";
import SignUp from "./pages/Auth/SignUp";

export default function App() {
   return (
      <div>
         <Header />
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
         </Routes>
      </div>
   );
}
