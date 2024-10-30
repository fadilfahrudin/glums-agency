import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import "./services.scss";
import HeaderWording from '../../components/header-wording'
import Gap from '../../components/gap';
import React, { useEffect, useRef, useState } from 'react';
import { useGetServicesQuery } from '../../utils/redux/services/serviceApi';
interface Props {
    id: number,
    i: number,
    service_banner_path: string,
    service_name: string,
    excerpt: string
}


function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}
const Services = () => {
    const target = useRef<HTMLElement | null>(null)
    const { data, isSuccess } = useGetServicesQuery({ keywords: "" })

    return (
        <motion.main id='services' >
            <HeaderWording
                scrollTo={() => target.current && target.current.scrollIntoView({ behavior: 'smooth' })}
                width={79}
                headline1='WE BELIEVE IN'
                headline2='CREATING MAGIC'
                desc='We believe that every brand has a unique story to tell, and we are here to help you amplify that story through innovative and effective digital strategies.'
            />

            <motion.div ref={target as React.RefObject<HTMLDivElement>} className="container mainServices">
                <div id='wrapper-main' className="wrapper-main" >
                    {
                        isSuccess && data?.data.map((data: Props, i: number) => <CardImage key={data.id} id={data.id} service_banner_path={data.service_banner_path} service_name={data.service_name} excerpt={data.excerpt} i={i} />)
                    }
                </div>
            </motion.div>
            <Gap height={118} />
        </motion.main>
    )
}



const CardImage = ({ id, service_banner_path, service_name, excerpt, i }: Props) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['-100vh', '100vh'] })
    const y = useParallax(scrollYProgress, 1000)

    return (
        <motion.a href={`service/detail/${id}`} className={`img-item`} >
            <motion.div style={{ y }}  className="info">
                <motion.div className='number'>0{i + 1}</motion.div>
                <motion.div className="excerpt">{excerpt}</motion.div>
                <motion.div className='detail_service'>
                    <motion.div className='service_wrapper'>
                        <motion.div className='service_name'>{service_name}</motion.div>
                        <motion.div className="sub_service">Content Creation, Website Traffic Analysis, Social Media Management</motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <div ref={ref} className='imgWrapper'>
                <img src={service_banner_path} alt="img" loading='lazy' width={549} height={793} />
            </div>
        </motion.a>
    )
}

export default Services