import { motion } from 'framer-motion'
import "./services.scss";
import HeaderWording from '../../components/header-wording'
import Gap from '../../components/gap';
import { useState } from 'react';
import { useGetServicesQuery } from '../../utils/redux/services/serviceApi';
interface Props {
    id: number,
    i: number,
    service_banner_path: string,
    service_name: string,
    excerpt: string
    sub_excerpt: string
}
const Services = () => {
    const { data, isSuccess } = useGetServicesQuery({ keywords: "" })
    return (
        <motion.main id='services' >
            <HeaderWording
                width={79}
                headline1='WE BELIEVE IN'
                headline2='CREATING MAGIC'
                desc='We believe that every brand has a unique story to tell, and we are here to help you amplify that story through innovative and effective digital strategies.'
            />

            <div className="container">
                <div id='wrapper-main' className="wrapper-main" >
                    {
                        isSuccess && data?.data.map((data: Props, i: number) => <CardImage key={data.id} id={data.id} service_banner_path={data.service_banner_path} service_name={data.service_name} excerpt={data.excerpt} sub_excerpt={data.sub_excerpt} i={i} />)
                    }
                </div>
            </div>
            <Gap height={118} />
        </motion.main>
    )
}



const CardImage = ({ id, service_banner_path, service_name, excerpt, sub_excerpt, i }: Props) => {
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    return (
        <motion.a href={`service/detail/${id}`} onMouseEnter={() => setHoveredId(id)} onMouseLeave={() => setHoveredId(null)} whileHover={{ flexBasis: '549px', flexShrink: 0 }} transition={{ duration: 0.5 }} className={`img-item ${hoveredId == id ? 'active' : ''}`} >
            <img src={service_banner_path} alt="img" loading='lazy' width={549} height={793} />
            <div className="info">
                <motion.div className='number'>0{i + 1}</motion.div>
                <motion.div initial={window.innerWidth > 1080 ? { opacity: 0 } : { opacity: 1 }} animate={window.innerWidth > 1080 ? { opacity: hoveredId == id ? 1 : 0 } : ''} transition={hoveredId == id ? { duration: 0.3 } : { duration: 0.3 }} className='role'>{service_name}</motion.div>
                <motion.div initial={window.innerWidth > 1080 ? { opacity: 0 } : { opacity: 1 }} animate={window.innerWidth > 1080 ? { opacity: hoveredId == id ? 1 : 0 } : ''} transition={hoveredId == id ? { duration: 0.3 } : { duration: 0.3 }} className="title">{excerpt}</motion.div>
                <motion.div initial={window.innerWidth > 1080 ? { opacity: 0 } : { opacity: 1 }} animate={window.innerWidth > 1080 ? { opacity: hoveredId == id ? 1 : 0 } : ''} transition={hoveredId == id ? { duration: 0.3 } : { duration: 0.3 }} className="desc">{sub_excerpt}</motion.div>
            </div>
        </motion.a>
    )
}

export default Services