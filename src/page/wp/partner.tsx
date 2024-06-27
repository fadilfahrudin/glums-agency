import { useRef } from 'react'
import TwoStar from "../../assets/img/icon/two-start.png"
import { motion, useInView } from "framer-motion"
import PartnerLogo1 from "../../assets/img/BlackRock, Inc..png";
import PartnerLogo2 from "../../assets/img/Delta Air Lines, Inc..png";
import PartnerLogo3 from "../../assets/img/Honeywell International Inc..png";
import PartnerLogo4 from "../../assets/img/Marriott International.png";
import PartnerLogo5 from "../../assets/img/Moderna, Inc..png";
const partnerLogo = [
    {
        id: 1,
        img: PartnerLogo1,
        name: 'BlackRock'
    },
    {
        id: 2,
        img: PartnerLogo2,
        name: 'Delta Air Lines'
    },
    {
        id: 3,
        img: PartnerLogo3,
        name: 'Honeywell International'
    },
    {
        id: 4,
        img: PartnerLogo4,
        name: 'Marriott International'
    },
    {
        id: 5,
        img: PartnerLogo5,
        name: 'Moderna'
    }
]
const PartnerWP = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "0px 0px -80% 0px",
        once: true
    })

    const stacks = {
        active: (custom: number) => ({ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0, transition: { duration: 0.5, delay: custom * 0.2 } }),
        inActive: { y: 50, opacity: 0 },
    }
    return (
        <motion.section ref={ref} className='section-partner__wp' >
            <div className='headeline__partner'>
                <motion.img src={TwoStar} width={98} height={79} style={{ scaleX: -1 }} />
                <span className='headeline__text'><span>Our Partner</span> Who Has Put Their Trust In Us</span>
                <motion.img src={TwoStar} width={98} height={79} /> </div>
            <ul className='list__partner'>
                {partnerLogo.map((logo, i) => (
                    <motion.li initial="inActive" animate="active" variants={stacks} custom={i + 1} className='item__partner' key={logo.id}><img src={logo.img} alt={logo.name} height={80} /></motion.li>
                ))}
            </ul>
        </motion.section>
    )
}

export default PartnerWP