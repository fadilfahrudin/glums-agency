import { motion, useInView } from "framer-motion"
import HeaderWording from "../../components/header-wording"
import { useRef, useState } from "react"
import { useAppSelector } from "../../utils/reduxHooks"
import ArrowAnimate from "../../components/arrowAnimate"
import "./detail.scss"
import { useParams } from "react-router-dom"
import ImgStaticOne from "../../assets/img/dummy/img-two.png"
import ImgStaticTwo from "../../assets/img/dummy/img-one.png"
import ImgStaticThree from "../../assets/img/dummy/img-three.png"
import InViewSection from "../../components/inview-section/inview-section"
import ServiceCard from "./ServiceCard"
import { useGetServiceByIdQuery } from "../../utils/redux/services/serviceApi"
import RelatedProject from "./RelatedProject"
const Detail = () => {
    const { id } = useParams()
    const { settings } = useAppSelector(state => state.settings)
    const [isHovered, setIsHovered] = useState(false)
    const { data, isSuccess } = useGetServiceByIdQuery(id)
    const ref = useRef(null)

    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const isInView3 = useInView(ref3, {
        margin: '0px 0px -60% 0px',
        once: true
    })
    const isInView4 = useInView(ref4, {
        margin: '0px 0px -60% 0px',
        once: true
    })
    const isInView2 = useInView(ref2, {
        margin: '0px 0px -60% 0px',
        once: true
    })
    const isInView = useInView(ref, {
        margin: '0px 0px -60% 0px',
        once: true
    })
    const stacks2 = {
        active: (custom: number) => ({ y: isInView2 ? 0 : 50, opacity: isInView2 ? 1 : 0, transition: { duration: 0.5, delay: custom * 0.2 } }),
        inActive: { y: 50, opacity: 0 },
    }

    return (
        <motion.main id="detail-service">
            <HeaderWording
                width={79}
                headline1='ELEVATE YOUR'
                headline2='DIGITAL EXPERIENCE'
                desc='We believe that every brand has a unique story to tell, and we are here to help you amplify that story through innovative and effective digital strategies.'
            />
            {isSuccess && <ServiceCard data={data?.service} />}
            <div className="static-content-one">
                <div ref={ref} className="content-one">
                    <motion.div initial={{ opacity: 0, x: -100 }} animate={isInView ? { opacity: 1, x: 0 } : ''} transition={{ duration: 0.5 }} className="img-one">
                        <img src={ImgStaticOne} alt="one" width={1000} height={1000} />
                    </motion.div>
                    <motion.p initial={{ opacity: 0, x: -100 }} animate={isInView ? { opacity: 1, x: 0 } : ''} transition={{ duration: 0.5, delay: 0.5 }} className="desc-one">We're Glums, a powerhouse of digital strategists driving businesses to online success.  Our mission: Provide you with tools for brand awareness and to achieve your online goals</motion.p>
                </div>
                <div ref={ref4} className="content-two">
                    <motion.div initial={{ opacity: 0, x: 100 }} animate={isInView4 ? { opacity: 1, x: 0 } : ''} transition={{ duration: 0.5, delay: 0.5 }} className="desc-two">Clever marketing to cut through the noise.</motion.div>
                    <motion.div initial={{ opacity: 0, x: 100 }} animate={isInView4 ? { opacity: 1, x: 0 } : ''} transition={{ duration: 0.5 }} className="img-two">
                        <img src={ImgStaticTwo} alt="two" width={1000} height={1000} />
                    </motion.div>
                </div>
            </div>
            <div ref={ref3} className="static-content-two">
                <motion.div initial={{ opacity: 0, x: 100 }} animate={isInView3 ? { opacity: 1, x: 0 } : ''} transition={{ duration: 0.5, delay: 0.5 }} className="desc-three">Clever marketing to cut through the noise.</motion.div>
                <motion.div initial={{ opacity: 0, x: -100 }} animate={isInView3 ? { opacity: 1, x: 0 } : ''} transition={{ duration: 0.5 }} className="img-three">
                    <img src={ImgStaticThree} alt="one" width={1000} height={1000} />
                </motion.div>
                <motion.p initial={{ opacity: 0, x: -100 }} animate={isInView3 ? { opacity: 1, x: 0 } : ''} transition={{ duration: 0.5, delay: 0.5 }} className="desc-three-p">We're Glums, a powerhouse of digital strategists driving businesses to online success.  Our mission: Provide you with tools for brand awareness and to achieve your online goals</motion.p>
            </div>

            <div className="static-content-three" >
                <InViewSection animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 0.5 }} className="desc-static-three">Let's create a binge-worthy experience for your company.</InViewSection>
                <InViewSection animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 0.5 }} className="desc-static-three-p">A Group Of Creative Thinkers</InViewSection>
            </div>

            <div className="relatedProjectWrapp">
                {id && <RelatedProject service_name={data?.service.service_name} serviceId={id} />}
            </div>

            <section ref={ref2} className="container about-wrapper__info">
                <div className="about-info">
                    <motion.div initial="inActive" variants={stacks2} animate="active" custom={1} className='title__info'>WE BELIEVE IN
                        CREATING MAGIC</motion.div>
                    <motion.div initial="inActive" variants={stacks2} animate="active" custom={2} className='desc__info'>{settings.what_we_do_desc}</motion.div>

                    <motion.a initial="inActive" variants={stacks2} animate="active" custom={3} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} href='/about' className='show-more__about'>What we do <ArrowAnimate gap={20} width={19.38} height={16.62} isHovered={isHovered} /></motion.a>
                </div>
            </section>
        </motion.main>
    )
}

export default Detail