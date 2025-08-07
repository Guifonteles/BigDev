import { Routes, Route } from "react-router-dom";
import Homescreen from "../pages/Homescreen";
import Layout from "../components/layout";
import Login from "../components/Login";
import Signup from "../components/Signup";
import RestaurantPage from "../pages/RestaurantPage";
import ProfilePage from "../pages/ProfilePage";

export default function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Login />} /> 
                <Route path="/Homescreen" element={<Homescreen />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/restaurant/:name" element={<RestaurantPage />} /> 
                <Route path="/profile" element={<ProfilePage />} />
            </Route>
        </Routes>
    );
}