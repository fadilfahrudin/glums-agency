import { useRef, useState } from 'react'
import { motion, useInView } from "framer-motion";
import TwoStar from "../../assets/img/icon/two-start.png"
import Carousel from '../../components/carousel';
import DummyImgAbout from "../../assets/img/dummy/about.png";
import ArrowAnimate from '../../components/arrowAnimate';

const AboutWP = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: '0px 0px -65% 0px',
        once: true
    })

    const stacks = {
        active: (custom: number) => ({ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0, transition: { duration: 0.5, delay: custom * 0.2 } }),
        inActive: { y: 50, opacity: 0 },
    }

    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.section ref={ref} className='section-about__wp container' >
            <div className='body__about'>
                <div className="left-section__about">
                    <motion.div className='headeline__about' initial="inActive" variants={stacks} animate="active" custom={1}>About Us <img src={TwoStar} alt="star" width={98} height={79} /></motion.div>
                    <motion.div className="wording__about" initial="inActive" variants={stacks} animate="active" custom={2}>
                        <p className='wording__p'>We're Glums, a powerhouse of digital strategists driving businesses to online success. Our mission: Provide you with tools for brand awareness and to achieve your online goals. We're a blend of creative minds and data wizards who love creating beautiful, results-driven experiences.</p> <p className='wording__p'> Ready to dominate? Contact us now for a free consultation!</p></motion.div>
                    <motion.a onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} initial="inActive" variants={stacks} animate="active" custom={3} href='/about' className='show-more__about'>Show me more <ArrowAnimate gap={20} width={19.38} height={16.62} isHovered={isHovered} /></motion.a>

                </div>
                <Carousel>
                    <CardImage img={DummyImgAbout} name='Anthony Daniels' role='UI / UX Designer' />
                    <CardImage img={DummyImgAbout} name='Fadil F' role='UI / UX Designer' />
                    <CardImage img={DummyImgAbout} name='Johan' role='UI / UX Designer' />
                    <CardImage img={DummyImgAbout} name='Rais' role='UI / UX Designer' />
                </Carousel>
            </div>
        </motion.section>
    )
}

interface Profile {
    name: string
    role: string
    img: string
}
const CardImage = (profile: Profile) => {
    const { img, name, role } = profile;

    return (
        <div className="card-container__img">
            <img src={img} alt={name} width={400} height={400} loading='lazy' />

            <motion.div className='detail__img'>
                <motion.div className='card-name__img'>{name}</motion.div>
                <motion.div className='card-role__img'>{role}</motion.div>
            </motion.div>
        </div>
    )
}

export default AboutWP