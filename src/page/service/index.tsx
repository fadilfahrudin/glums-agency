import { useEffect, useRef } from 'react';
import { motion, useTransform, useScroll, useMotionValue, AnimatePresence, useMotionValueEvent } from 'framer-motion'
import "./services.scss";
import HeaderWording from '../../components/header-wording'
import Dummyimg from "../../assets/img/dummy/service.png";
import Dummyimg2 from "../../assets/img/dummy/dummy-1.png";
import Dummyimg3 from "../../assets/img/dummy/dummy-2.png";
import Dummyimg4 from "../../assets/img/dummy/dummy-3.png";
import Gap from '../../components/gap';
const Services = () => {
    

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const width1 = useTransform(scrollYProgress, [0, 0.2], ['100%', '30%']);
    const width2 = useTransform(scrollYProgress, [0, 0.3], ['30%', '100%']);
    const width3 = useTransform(scrollYProgress, [0, 0.4], ['30%', '200%']);
    const width4 = useTransform(scrollYProgress, [0.4, 1], ['30%', '300%']);

    const flexShrink1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const flexShrink2 = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const flexShrink3 = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const flexShrink4 = useTransform(scrollYProgress, [0.4, 1], [1, 0]);

    const flexBasis1 = useTransform(scrollYProgress, [0, 0.2], ['none', '263px']);
    const flexBasis2 = useTransform(scrollYProgress, [0, 0.3], ['none', '263px']);
    const flexBasis3 = useTransform(scrollYProgress, [0, 0.4], ['none', '263px']);
    const flexBasis4 = useTransform(scrollYProgress, [0.4, 1], ['none', '263px']);

    
    return (
        <motion.main id='services' >
            <HeaderWording
                width={79}
                headline1='WE BELIEVE IN'
                headline2='CREATING MAGIC'
                desc='We believe that every brand has a unique story to tell, and we are here to help you amplify that story through innovative and effective digital strategies.'
            />

            <div className="container">
                <div id='wrapper-main' ref={ref} className="wrapper-main" style={{ height: '400vh' }}>
                    <div className="container-image">
                        <motion.div className="img-item" style={{width: width1}} transition={{duration: 0.5}}>
                            <img src={Dummyimg} alt="img" loading='lazy' width={549} height={793} />
                            <div className="info">
                                <div className='number'>01</div>
                                <div className='role'>Digital Marketing</div>
                                <div className="title">Grow your business. Elevate your brand</div>
                                <div className="desc">Content Creation, Website Traffic Analysis, Social Media Management</div>
                            </div>
                        </motion.div>
                        <motion.div  className="img-item" style={{width: width2}} transition={{duration: 0.5}}>
                            <img src={Dummyimg2} alt="img" loading='lazy' width={549} height={793} />
                            <div className="info">
                                <div className='number'>01</div>
                                <div className='role'>Digital Marketing</div>
                                <div className="title">Grow your busines. Elevate your brand</div>
                                <div className="desc">Content Creation, Website Traffic Analysis, Social Media Management</div>
                            </div>
                        </motion.div>
                        <motion.div style={{width: width3}} transition={{duration: 0.5}} className="img-item">
                            <img src={Dummyimg3} alt="img" loading='lazy' width={549} height={793} />
                            <div className="info">
                                <div className='number'>01</div>
                                <div className='role'>Digital Marketing</div>
                                <div className="title">Grow your business. Elevate your brand</div>
                                <div className="desc">Content Creation, Website Traffic Analysis, Social Media Management</div>
                            </div>
                        </motion.div>
                        <motion.div style={{width: width4}} transition={{duration: 0.5}} className="img-item">
                            <img src={Dummyimg4} alt="img" loading='lazy' width={549} height={793} />
                            <div className="info">
                                <div className='number'>01</div>
                                <div className='role'>Digital Marketing</div>
                                <div className="title">Grow your business. Elevate your brand</div>
                                <div className="desc">Content Creation, Website Traffic Analysis, Social Media Management</div>
                            </div>
                        </motion.div>

                        {/* <CardImage id={1} scrollY={scrollY} scrollYProgress={scrollYProgress} />
                        <CardImage id={2} scrollY={scrollY} scrollYProgress={scrollYProgress} />
                        <CardImage id={3} scrollY={scrollY} scrollYProgress={scrollYProgress} />
                        <CardImage id={4} scrollY={scrollY} scrollYProgress={scrollYProgress} /> */}
                    </div>
                </div>
            </div>
            <Gap height={118} />
        </motion.main>
    )
}

const CardImage = ({ scrollYProgress, scrollY, id }) => {
    const flexBasis = useTransform(scrollYProgress, [0, 1], ['549px', '263px'])
    return (
        <motion.div id={id} style={{ flexBasis: id }} className="img-item" >
            <img src={Dummyimg} alt="img" loading='lazy' width={549} height={793} />
            <div className="info">
                <div className='number'>01</div>
                <div className='role'>Digital Marketing</div>
                <div className="title">Grow your business. Elevate your brand</div>
                <div className="desc">Content Creation, Website Traffic Analysis, Social Media Management</div>
            </div>
        </motion.div>
    )
}

export default Services