import { motion, useInView } from 'framer-motion'
import "./abaout.scss";
import HeaderWording from '../../components/header-wording'
import Gap from '../../components/gap';
import { useRef, useState } from 'react';
import ArrowAnimate from '../../components/arrowAnimate';
import { useAppSelector } from '../../utils/reduxHooks';
import { useGetUsersQuery } from '../../utils/redux/services/usersApi';
import { NavLink } from 'react-router-dom';
import Marquee from '../../components/marque';

interface Props {
    id: number,
    name: string,
    role: string,
    img_path: string,
    desc: string,
}
const About = () => {

    const [isHovered, setIsHovered] = useState(false)
    const { settings } = useAppSelector(state => state.settings)
    const { data, isSuccess } = useGetUsersQuery({ keywords: '' })
    const ref1 = useRef<HTMLElement | null>(null)
    const ref2 = useRef(null)
    const isInView = useInView(ref1, {
        margin: '0px 0px -25% 0px',
        once: true
    })
    const isInView2 = useInView(ref2, {
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


    return (
        <motion.main id='about' >
            <HeaderWording
                scrollTo={() => ref1.current && ref1.current.scrollIntoView({ behavior: 'smooth' })}
                width={79}
                headline1='THE ACHITECTS'
                headline2='CREATING MAGIC'
                desc='We believe that every brand has a unique story to tell, and we are here to help you amplify that story through innovative and effective digital strategies.'
            />

            <Gap height={60} />
            <section ref={ref1} className='container'>
                <motion.div initial="inActive" variants={stacks} animate="active" custom={1} className='team-name'>Team Members</motion.div>
                <motion.div initial="inActive" variants={stacks} animate="active" custom={2} className='team-desc'>
                    <div className='team-desc__wrapper'>
                        {settings.team_member_desc}
                    </div>
                </motion.div>
            </section>
            <Gap height={52} />

            <Marquee>
                <div id='wrapper-main' className="wrapper-main" >
                    {
                        isSuccess && data?.data.map((user: Props) => <CardImage key={user.id} {...user}/>)
                    }
                </div>
            </Marquee>

            <Gap height={155} />

            <section ref={ref2} className="container about-wrapper__info">
                <div className="about-info">
                    <motion.div initial="inActive" variants={stacks2} animate="active" custom={1} className='title__info'>WE BELIEVE IN
                        CREATING MAGIC </motion.div>
                    <motion.div initial="inActive" variants={stacks2} animate="active" custom={2} className='desc__info'>{settings.what_we_do_desc}</motion.div>

                    <NavLink onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} to={'/services'} className='show-more__about'>What we do <ArrowAnimate gap={20} width={19.38} height={16.62} isHovered={isHovered} /></NavLink>
                </div>
            </section>
            <Gap height={118} />
        </motion.main>
    )
}



const CardImage = ({ img_path, role, name, desc }: Props) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <motion.div className={`img-item`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            <motion.img className={isHovered ? 'hovered' : ''}  src={img_path} alt="img" loading='lazy' />
            <motion.div className="info" >
                <motion.div className='role' >{role}</motion.div>
                <motion.div className="title" >{name}</motion.div>
                <motion.div className="desc" >{desc}</motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About