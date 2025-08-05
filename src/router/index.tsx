import { Routes, Route } from "react-router-dom";
import Homescreen from "../pages/Homescreen";
import Layout from "../components/layout";


export default function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Homescreen />} />
                <Route path="/Homescreen" element={<Homescreen />} />
            </Route>
        </Routes>

    );
}