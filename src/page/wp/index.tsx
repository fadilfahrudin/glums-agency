import { useRef, useState } from 'react'
import "./wp.scss";
import { useAppSelector } from '../../utils/reduxHooks';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Menu from '../../components/menu';
import DummyImgService from "../../assets/img/dummy/menu-nav-1.jpg";
import DummyImgService2 from "../../assets/img/dummy/menu-nav-2.jpg";
import DummyImgService3 from "../../assets/img/dummy/menu-nav-3.jpg";
import DummyImgService4 from "../../assets/img/dummy/menu-nav-4.jpg";
import HeaderWP from './header';
import AboutWP from './about';
import PartnerWP from './partner';

const WelcomePage = () => {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['-30vh', '100vh']
    })
    const { isBurgeMenu } = useAppSelector(state => state.burgerMenu)
    const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])

    const [servImg, setServImg] = useState('')
    return (
        <motion.div ref={ref}  >
            <motion.main >
                {/* header */}
                <HeaderWP />
                {/* video */}
                <motion.section className='section-video__wp container' style={{ scale }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Pc15hOD1ris?si=NRr9veZLi1eKfTkY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                </motion.section>
                {/* about */}
                <AboutWP />
                {/* service */}
                <motion.section className='section-service__wp' >
                    {servImg && <img className='bg__service' src={servImg} alt="menu" width={'100%'} height={'100%'} loading='lazy' />}
                    <div className="navigation__service">
                        <a href='/detail' className="navlist" onMouseOver={() => setServImg(DummyImgService)} onMouseOut={() => setServImg('')} >Digital Marketing / </a>
                        <a href='/detail' className="navlist" onMouseOver={() => setServImg(DummyImgService2)} onMouseOut={() => setServImg('')} >Graphic Designing / </a>
                        <a href='/detail' className="navlist" onMouseOver={() => setServImg(DummyImgService3)} onMouseOut={() => setServImg('')}>Web & App Development / </a>
                        <a href='/detail' className="navlist" onMouseOver={() => setServImg(DummyImgService4)} onMouseOut={() => setServImg('')}>Video & Photo Branding  </a>
                        {servImg && <img src={servImg} className='thumb__service' alt="menu services" width={238} height={295} loading='lazy' />}
                    </div>
                </motion.section>
                {/* partner */}
                <PartnerWP />
            </motion.main>
            <AnimatePresence>
                {isBurgeMenu &&
                    (<Menu />)
                }
            </AnimatePresence>
        </motion.div >
    )
}




export default WelcomePage