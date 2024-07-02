import { motion } from 'framer-motion'
import "./services.scss";
import HeaderWording from '../../components/header-wording'
import Dummyimg from "../../assets/img/dummy/service.png";
import Dummyimg2 from "../../assets/img/dummy/dummy-1.png";
import Dummyimg3 from "../../assets/img/dummy/dummy-2.png";
import Dummyimg4 from "../../assets/img/dummy/dummy-3.png";
import Gap from '../../components/gap';
import { useState } from 'react';
const Services = () => {

    const dataDummy = [
        {
            id: 1,
            img: Dummyimg,
            role: 'Digital Marketing',
            title: 'Grow your business. Elevate your brand',
            desc: 'Content Creation, Website Traffic Analysis, Social Media Management'
        },
        {
            id: 2,
            img: Dummyimg2,
            role: 'Digital Marketing',
            title: 'Grow your business. Elevate your brand',
            desc: 'Content Creation, Website Traffic Analysis, Social Media Management'
        },
        {
            id: 3,
            img: Dummyimg3,
            role: 'Digital Marketing',
            title: 'Grow your business. Elevate your brand',
            desc: 'Content Creation, Website Traffic Analysis, Social Media Management'
        },
        {
            id: 4,
            img: Dummyimg4,
            role: 'Digital Marketing',
            title: 'Grow your business. Elevate your brand',
            desc: 'Content Creation, Website Traffic Analysis, Social Media Management'
        }
    ]

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
                        dataDummy.map((data) => <CardImage key={data.id} {...data} />)
                    }
                </div>
            </div>
            <Gap height={118} />
        </motion.main>
    )
}


interface Props {
    id: number,
    img: string,
    role: string,
    title: string,
    desc: string
}
const CardImage = ({ id, img, role, title, desc }: Props) => {
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    return (
        <motion.div onMouseEnter={() => setHoveredId(id)} onMouseLeave={() => setHoveredId(null)}  whileHover={{ flexBasis: '549px', flexShrink: 0 }} transition={{ duration: 1 }} className={`img-item ${hoveredId == id ? 'active' : ''}`} >
            <img src={img} alt="img" loading='lazy' width={549} height={793} />
            <div className="info">
                <motion.div initial={{ y: 150 }} animate={{ y: hoveredId == id ? 0 : 150 }}  className='number'>0{id}</motion.div>
                <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: hoveredId == id ? 1 : 0, y: hoveredId == id ? 0 : 20 }} transition={{ duration: 0.3 }} className='role'>{role}</motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: hoveredId == id ? 1 : 0, y: hoveredId == id ? 0 : 20 }} transition={{ duration: 0.3}} className="title">{title}</motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: hoveredId == id ? 1 : 0, y: hoveredId == id ? 0 : 20 }} transition={{ duration: 0.3}} className="desc">{desc}</motion.div>
            </div>
        </motion.div>
    )
}

export default Services