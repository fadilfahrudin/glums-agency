import { Route, Routes } from "react-router-dom"
import WelcomePage from "../page/wp"
import Header from "../components/header"
import Footer from "../components/footer"
import { ReactLenis } from "lenis/react"
import Services from "../page/service"
import About from "../page/about"

const AppRoutes = () => {
    return (
        <ReactLenis root>
            <Header />
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </ReactLenis>
    )
}

export default AppRoutes