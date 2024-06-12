import { Route, Routes } from "react-router-dom"
import WelcomePage from "../page/wp"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
        </Routes>
    )
}

export default AppRoutes