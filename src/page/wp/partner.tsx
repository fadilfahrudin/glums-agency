import { useRef } from 'react'
import { motion, useInView } from "framer-motion"
import { useGetProjectsQuery } from '../../utils/redux/services/projecsApi';

const PartnerWP = () => {
    const {data, isSuccess} = useGetProjectsQuery({keywords:''})
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "0px 0px -20% 0px",
        once: true
    })

    const stacks = {
        active: (custom: number) => ({ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0, transition: { duration: 0.5, delay: custom * 0.2 } }),
        inActive: { y: 50, opacity: 0 },
    }
    return (
        <motion.section ref={ref} className='section-partner__wp' >
            <motion.div initial="inActive" animate="active" variants={stacks} className='headeline__text'>Trusted by the top companies in this industry</motion.div>
            <ul className='list__partner'>
                {isSuccess&&data?.data?.map((logo: { id: number, name: string, logo_project_path: string }, i: number) => (
                    <motion.li initial="inActive" animate="active" variants={stacks} custom={i + 1} className='item__partner' key={logo.id}><img src={logo.logo_project_path} alt={logo.name} height={80} /></motion.li>
                ))}
            </ul>
        </motion.section>
    )
}

export default PartnerWP