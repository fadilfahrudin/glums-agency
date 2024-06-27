import { Route, Routes } from "react-router-dom"
import WelcomePage from "../page/wp"
import Header from "../components/header"
import Footer from "../components/footer"
import { ReactLenis } from "lenis/react"

const AppRoutes = () => {
    return (
        <ReactLenis root>
            <Header />
            <Routes>
                <Route path="/" element={<WelcomePage />} />
            </Routes>
            <Footer />
        </ReactLenis>
    )
}

export default AppRoutes