import { Route, Routes } from "react-router-dom"
import WelcomePage from "../page/wp"
import Header from "../components/header"
import Footer from "../components/footer"
import { ReactLenis } from "lenis/react"
import Services from "../page/service"

const AppRoutes = () => {
    return (
        <ReactLenis root>
            <Header />
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/services" element={<Services />} />
            </Routes>
            <Footer />
        </ReactLenis>
    )
}

export default AppRoutes