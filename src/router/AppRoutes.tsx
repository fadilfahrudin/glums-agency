import { Route, Routes, useLocation } from "react-router-dom"
import WelcomePage from "../page/wp"
import Header from "../components/header"
import Footer from "../components/footer"
import { ReactLenis } from "lenis/react"
import Services from "../page/service"
import About from "../page/about"
import { AnimatePresence } from "framer-motion"
import Menu from "../components/menu"
import { useAppDispatch, useAppSelector } from "../utils/reduxHooks"
import ContactPage from "../page/contact"
import Loading from "../components/loading"
import { useEffect, useState } from "react"
import { useGetSettingsQuery } from "../utils/redux/services/settingsApi"
import { setLoading } from "../utils/redux/slice/loadingSlice"
import { setSettings } from "../utils/redux/slice/settingsSlice"
import Detail from "../page/service/detail"
import Project from "../page/project"

const AppRoutes = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    const { isBurgeMenu } = useAppSelector(state => state.burgerMenu)
    const { isLoading } = useAppSelector(state => state.loading)
    const { data, isSuccess, isLoading: loading } = useGetSettingsQuery()
    const [startTime, setStartTime] = useState(0);
    const [fetchDuration, setFetchDuration] = useState(0);

    useEffect(() => {
        if (loading) {
            setStartTime(performance.now());
            dispatch(setLoading(true))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    useEffect(() => {
        if (isSuccess && startTime > 0) {
            const endTime = performance.now();
            dispatch(setSettings(data.settings[0]))
            setFetchDuration(endTime - startTime);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess, startTime]);


    return (
        <>
            <AnimatePresence>
                {isLoading &&
                    (<Loading fetchDuration={fetchDuration} />)
                }
            </AnimatePresence>
            {!isLoading && (
                <ReactLenis root>
                    <Header />
                    <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<WelcomePage />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/service/detail/:id" element={<Detail />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/project/:id" element={<Project />} />
                        </Routes>
                    </AnimatePresence>
                    <Footer />
                    <AnimatePresence>
                        {isBurgeMenu &&
                            (<Menu />)
                        }
                    </AnimatePresence>
                </ReactLenis>
            )}
        </>

    )
}

export default AppRoutes