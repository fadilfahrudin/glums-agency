import { Route, Routes } from "react-router-dom"
import WelcomePage from "../page/wp"
import Header from "../components/header"
import Footer from "../components/footer"
import { ReactLenis } from "lenis/react"
import Services from "../page/service"
import About from "../page/about"
import { AnimatePresence } from "framer-motion"
import Menu from "../components/menu"
import { useAppSelector } from "../utils/reduxHooks"
import Contact from "../page/contact"

const AppRoutes = () => {
    const { isBurgeMenu } = useAppSelector(state => state.burgerMenu)

    return (
        <ReactLenis root>
            <Header />
            <Routes> 
                <Route path="/" element={<WelcomePage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <AnimatePresence>
                {isBurgeMenu &&
                    (<Menu />)
                }
            </AnimatePresence>
        </ReactLenis>
    )
}

export default AppRoutes