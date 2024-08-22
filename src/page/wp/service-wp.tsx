import { AnimatePresence, motion } from "framer-motion"
import { useState } from 'react'
import { useGetServicesQuery } from "../../utils/redux/services/serviceApi"
import ArrowAnimate from '../../components/arrowAnimate';


const ServiceWP = () => {
    const [servImg, setServImg] = useState('')
    const { data, isSuccess } = useGetServicesQuery({ keywords: "" })
    const [isHovered, setIsHovered] = useState(false)
    return (
        <motion.section className='section-service__wp' >
            <AnimatePresence>  {servImg && <motion.img animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className='bg__service' src={servImg} alt="menu" width={'100%'} height={'100%'} loading='lazy' />}</AnimatePresence>
            <div className="titleWrapper">
                <motion.div className="title">What We do ?</motion.div>
                <motion.p className="desc">We're a blend of creative minds and data wizards who love creating beautiful, results-driven experiences.</motion.p>
            </div>

            <div className="navigation__service">
                {isSuccess && data?.data?.map((item: { id: number, service_name: string, service_banner_path: string }) => (
                    <motion.a key={item.id} href={`/service/detail/${item.id}`} className="navlist" onMouseOver={() => setServImg(item.service_banner_path)} onMouseOut={() => setServImg('')} >{item.service_name} / </motion.a>
                ))}
                <AnimatePresence>{servImg && <motion.img animate={{ opacity: 1, scaleY: 1 }} initial={{ opacity: 0, scaleY: 0 }} exit={{ opacity: 0, scaleY: 0 }} transition={{ duration: 0.6 }} src={servImg} className='thumb__service' alt="menu services" width={238} height={295} loading='lazy' />} </AnimatePresence>
            </div>
            <motion.a onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} href='/about' className='show-more__service'>Show me more <ArrowAnimate gap={20} width={19.38} height={16.62} isHovered={isHovered} /></motion.a>

        </motion.section>
    )
}

export default ServiceWP