import { motion, useInView } from 'framer-motion'
import "./abaout.scss";
import HeaderWording from '../../components/header-wording'
import Dummyimg from "../../assets/img/dummy/about-profile.png";
import Dummyimg2 from "../../assets/img/dummy/about.png";
import Dummyimg3 from "../../assets/img/dummy/dummy-2.png";
import Gap from '../../components/gap';
import { useRef, useState } from 'react';
import ArrowAnimate from '../../components/arrowAnimate';
const About = () => {
    const [isHovered, setIsHovered] = useState(false)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const isInView = useInView( ref1, {
        margin: '0px 0px -25% 0px',
        once: true
    })
    const isInView2 = useInView( ref2, {
        margin: '0px 0px -60% 0px',
        once: true
    })

    const stacks = {
        active: (custom: number) => ({ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0, transition: { duration: 0.5, delay: custom * 0.2 } }),
        inActive: { y: 50, opacity: 0 },
    }
    const stacks2 = {
        active: (custom: number) => ({ y: isInView2 ? 0 : 50, opacity: isInView2 ? 1 : 0, transition: { duration: 0.5, delay: custom * 0.2 } }),
        inActive: { y: 50, opacity: 0 },
    }


    const dataDummy = [
        {
            id: 1,
            img: Dummyimg,
            role: 'CEO - Founder',
            title: 'Achmad Anshori',
            desc: 'Content Creation, Website Traffic Analysis, Social Media Management'
        },
        {
            id: 2,
            img: Dummyimg2,
            role: 'CEO - Founder',
            title: 'Novan',
            desc: 'Content Creation, Website Traffic Analysis, Social Media Management'
        },
        {
            id: 3,
            img: Dummyimg3,
            role: 'CEO - Founder',
            title: 'Reihan',
            desc: 'Content Creation, Website Traffic Analysis, Social Media Management'
        },
        
    ]

    return (
        <motion.main  id='about' >
            <HeaderWording
                width={79}
                headline1='THE ACHITECTS'
                headline2='CREATING MAGIC'
                desc='We believe that every brand has a unique story to tell, and we are here to help you amplify that story through innovative and effective digital strategies.'
            />

            
            <Gap height={60} />
            <section  ref={ref1} className='container'>
                <motion.div initial="inActive" variants={stacks} animate="active" custom={1} className='team-name'>Team Members</motion.div>
                <motion.div initial="inActive" variants={stacks} animate="active" custom={2} className='team-desc'>We believe that every brand has a unique story to tell, and we are here to help you amplify that story through innovative and effective digital strategies.</motion.div>
            </section>
            <Gap height={48} />

            <section className="container">
                <div id='wrapper-main' className="wrapper-main" >
                    {
                        dataDummy.map((data) => <CardImage key={data.id} {...data} lenght={dataDummy.length} />)
                    }
                </div>
            </section>
            <section ref={ref2} className="container about-wrapper__info">
                <div className="about-info">
                    <motion.div initial="inActive" variants={stacks2} animate="active" custom={1} className='title__info'>WE BELIEVE IN
                    CREATING MAGIC </motion.div>
                    <motion.div initial="inActive" variants={stacks2} animate="active" custom={2} className='desc__info'>
                    We believe that every brand has a unique story to tell, and we are here to help you amplify that story through innovative and effective digital strategies.
                    </motion.div>

                    <motion.a initial="inActive" variants={stacks2} animate="active" custom={3} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} href='/about' className='show-more__about'>What we do <ArrowAnimate gap={20} width={19.38} height={16.62} isHovered={isHovered} /></motion.a>
                </div>
            </section>
            <Gap height={118} />
        </motion.main>
    )
}


interface Props {
    id: number,
    img: string,
    role: string,
    title: string,
    desc: string,
    lenght: number
}
const CardImage = ({ id, img, role, title, desc, lenght }: Props) => {
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    return (
        <motion.div style={window.innerWidth > 1080 ?{width: `calc(100% / ${lenght})`}:{width: '100%'}} onMouseEnter={() => setHoveredId(id)} onMouseLeave={() => setHoveredId(null)}  whileHover={{ flexBasis: '549px', flexShrink: 0 }}  transition={{ duration: 1,  delay: 0.3 }} className={`img-item ${hoveredId == id ? 'active' : ''}`} >
            <img src={img} alt="img" loading='lazy' width={549} height={793} />
            <div className="info">
                <motion.div className='number'>0{id}</motion.div>
                <motion.div initial={window.innerWidth > 1080 ? {  opacity: 0, y:20, }:{opacity: 1, y:0}} animate={window.innerWidth > 1080 ? { opacity: hoveredId == id ? 1 : 0, y: hoveredId == id ? 0 : 20 }: ''} transition={hoveredId == id ? {duration: 0.3, delay: 1.8 } : { duration: 0.3, delay: 0 }} className='role'>{role}</motion.div>
                <motion.div initial={window.innerWidth > 1080 ? {  opacity: 0, y:20, }:{opacity: 1, y:0}} animate={window.innerWidth > 1080 ? { opacity: hoveredId == id ? 1 : 0, y: hoveredId == id ? 0 : 20 }: ''} transition={hoveredId == id ? {duration: 0.3, delay: 2.1 } :{ duration: 0.3, delay: 0}} className="title">{title}</motion.div>
                <motion.div initial={window.innerWidth > 1080 ? {  opacity: 0, y:20, }:{opacity: 1, y:0}} animate={window.innerWidth > 1080 ? { opacity: hoveredId == id ? 1 : 0, y: hoveredId == id ? 0 : 20 }: ''} transition={hoveredId == id ? {duration: 0.3, delay: 2.4 } :{ duration: 0.3, delay: 0}} className="desc">{desc}</motion.div>
            </div>
        </motion.div>
    )
}

export default About