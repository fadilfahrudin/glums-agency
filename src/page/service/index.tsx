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
    const flexBasis = useMotionValue(0);
    const flexBasis2 = useMotionValue(1);
    const flexBasis3 = useMotionValue(1);
    const flexBasis4 = useMotionValue(1);

    const ref = useRef(null)
    const { scrollYProgress, scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const size1 = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
    const size2 = useTransform(scrollYProgress, [0.25, 0.5], [1, 0]);
    const size3 = useTransform(scrollYProgress, [0.5, 0.75], [1, 0]);
    const size4 = useTransform(scrollYProgress, [0.75, 1], [1, 0]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest < 1000) {
            flexBasis.set(0);
            flexBasis2.set(1);
        } else if (latest > 1000 && latest < 1400) {
            flexBasis.set(1);
            flexBasis2.set(0);
            flexBasis3.set(1);
            flexBasis4.set(1);
        } else if (latest > 1400 && latest < 1800) {
            flexBasis.set(0);
            flexBasis2.set(1);
            flexBasis3.set(0);
            flexBasis4.set(1);
        } else if (latest > 1800) {
            flexBasis3.set(1);
            flexBasis4.set(0);
        }
    })
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
                        <motion.div style={{ flexBasis }} animate={{ flexBasis: flexBasis }} transition={{ duration: 0.5 }} className="img-item">
                            <img src={Dummyimg} alt="img" loading='lazy' width={549} height={793} />
                            <div className="info">
                                <div className='number'>01</div>
                                <div className='role'>Digital Marketing</div>
                                <div className="title">Grow your business. Elevate your brand</div>
                                <div className="desc">Content Creation, Website Traffic Analysis, Social Media Management</div>
                            </div>
                        </motion.div>
                        <motion.div style={{ flexBasis: flexBasis2 }} className="img-item">
                            <img src={Dummyimg2} alt="img" loading='lazy' width={549} height={793} />
                            <div className="info">
                                <div className='number'>01</div>
                                <div className='role'>Digital Marketing</div>
                                <div className="title">Grow your business. Elevate your brand</div>
                                <div className="desc">Content Creation, Website Traffic Analysis, Social Media Management</div>
                            </div>
                        </motion.div>
                        <motion.div style={{ flexBasis: flexBasis3 }} className="img-item">
                            <img src={Dummyimg3} alt="img" loading='lazy' width={549} height={793} />
                            <div className="info">
                                <div className='number'>01</div>
                                <div className='role'>Digital Marketing</div>
                                <div className="title">Grow your business. Elevate your brand</div>
                                <div className="desc">Content Creation, Website Traffic Analysis, Social Media Management</div>
                            </div>
                        </motion.div>
                        <motion.div style={{ flexBasis: flexShrink4 }} className="img-item">
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