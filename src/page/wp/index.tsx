import { useRef, useState } from 'react'
import "./wp.scss";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import DummyImgService from "../../assets/img/dummy/dummy-1.png";
import DummyImgService2 from "../../assets/img/dummy/dummy-2.png";
import DummyImgService3 from "../../assets/img/dummy/dummy-3.png";
import DummyImgService4 from "../../assets/img/dummy/dummy-4.png";
import AboutWP from './about';
import PartnerWP from './partner';
import HeaderWording from '../../components/header-wording';

const WelcomePage = () => {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['-50vh', '50vh']
    })
    const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])

    const [servImg, setServImg] = useState('')
    return (
        <motion.main ref={ref} id='wp'  >
            {/* header */}
            <HeaderWording
                homeWp={true}
                headline1='BEYOND SOLUTION'
                headline2='BEYOND EXPECTATION'
                desc='Glums was founded with a vision to empower businesses of all sizes to thrive in the ever-evolving digital world.'
            />
            {/* video */}
            <motion.section className='section-video__wp container' style={{ scale }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Pc15hOD1ris?si=NRr9veZLi1eKfTkY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
            </motion.section>
            {/* about */}
            <AboutWP />
            {/* service */}
            <motion.section className='section-service__wp' >
                {servImg && <AnimatePresence><motion.img animate={{ opacity: 1}} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className='bg__service' src={servImg} alt="menu" width={'100%'} height={'100%'} loading='lazy' /> </AnimatePresence>}
                <div className="navigation__service">
                    <motion.a href='/detail' className="navlist" onMouseOver={() => setServImg(DummyImgService)} onMouseOut={() => setServImg('')} >Digital Marketing / </motion.a>
                    <motion.a href='/detail' className="navlist" onMouseOver={() => setServImg(DummyImgService2)} onMouseOut={() => setServImg('')} >Graphic Designing / </motion.a>
                    <motion.a href='/detail' className="navlist" onMouseOver={() => setServImg(DummyImgService3)} onMouseOut={() => setServImg('')}>Web & App Development / </motion.a>
                    <motion.a href='/detail' className="navlist" onMouseOver={() => setServImg(DummyImgService4)} onMouseOut={() => setServImg('')}>Video & Photo Branding  </motion.a>
                    {servImg && <AnimatePresence> <motion.img animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0 , scale: 0.5}} exit={{ opacity: 0 }}  transition={{ duration: 0.5 }} src={servImg} className='thumb__service' alt="menu services" width={238} height={295} loading='lazy' /> </AnimatePresence>}
                </div>
            </motion.section>
            {/* partner */}
            <PartnerWP />
        </motion.main>
    )
}




export default WelcomePage