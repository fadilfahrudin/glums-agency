import { useRef } from 'react'
import "./wp.scss";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion"
import PartnerWP from './partner';
import HeaderWording from '../../components/header-wording';
import ServiceWP from './service-wp';
import VideoComponent from '../../components/VideoComponent';
import { useAppSelector } from '../../utils/reduxHooks';
import TwoStar from "../../assets/img/icon/two-start.png"
import videoAnimasi from "../../assets/video/Handwritter_1.mp4"
import FeedbackComponent from './feedback';
import ImgOne from "../../assets/img/dummy/img-one.png";
import ImgTwo from "../../assets/img/dummy/img-two.png";

const WelcomePage = () => {
    const ref = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const { settings } = useAppSelector(state => state.settings)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['-50vh', '50vh']   
    })
    const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])


    const isInView = useInView(ref2, {
        margin: '0px 0px -65% 0px',
        once: true
    })
    const isInView3 = useInView(ref3, {
        margin: '0px 0px -45% 0px',
        once: true
    })
    const isInView4 = useInView(ref4, {
        margin: '0px 0px -25% 0px',
        once: true
    })


    const stacks = {
        active: (custom: number) => ({ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0, transition: { duration: 0.5, delay: custom * 0.2 } }),
        inActive: { y: 50, opacity: 0 },
    }

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
            <AnimatePresence>
                <motion.section className='section-video__wp container' style={{ scale }}>
                    {settings && <VideoComponent src={settings.video_profile_path || ''} />}
                </motion.section>
            </AnimatePresence>
            {/* about */}
            <motion.section ref={ref2} className='section__wording'>
                <motion.div initial="inActive" variants={stacks} animate="active" custom={1} className='title'>Expertly Designed for Excellence and your Enduring Success</motion.div>
                <motion.div initial="inActive" variants={stacks} animate="active" custom={2} className='desc'>A Group Of Creative Thinkers</motion.div>
                <motion.div initial="inActive" variants={stacks} animate="active" custom={3}  className="animate-wording">
                    <motion.img className='star' src={TwoStar} alt="two star" width={67} height={53} />
                    <video width="234" height="93" autoPlay muted loop>
                        <source src={videoAnimasi} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </motion.section>

            <motion.section  className='section__more-about'>
                <div ref={ref3} className="content-one">
                    <motion.div initial={{x:-100, opacity:0}} animate={isInView3?{opacity: 1, x:0}:''} transition={{duration:0.5}}  className="img__one">
                        <img src={ImgOne} alt="one" width={1000} height={1000} />
                    </motion.div>
                    <motion.p initial={{x:100, opacity:0}} animate={isInView3?{opacity: 1, x:0}:''} transition={{duration:0.5}}  className='desc__one'>We're Glums, a powerhouse of digital strategists driving businesses to online success.  Our mission: Provide you with tools for brand awareness and to achieve your online goals</motion.p>
                </div>
                <div ref={ref4} className="content-two">
                    <motion.div initial={{x:-100, opacity:0}} animate={isInView4?{opacity: 1, x:0}:''} transition={{duration:0.5}} className='desc__two'>Making It Truly Unforgettable and Leaving a Lasting Impact on Your Audience</motion.div>
                    <motion.div initial={{x:100, opacity:0}} animate={isInView4?{opacity: 1, x:0}:''} transition={{duration:0.5}} className="img__two">
                        <img src={ImgTwo} alt="two" width={1000} height={1000} />
                    </motion.div>
                </div>
            </motion.section>
            {/* service */}
            <ServiceWP />
            {/* partner */}
            <FeedbackComponent />
            <PartnerWP />
        </motion.main>
    )
}




export default WelcomePage