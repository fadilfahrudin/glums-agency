import  { useEffect, useRef, useState } from 'react'
import "./project.scss"
import { useParams } from 'react-router-dom'
import { useGetProjectByIdQuery } from '../../utils/redux/services/projecsApi'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import HeaderWording from '../../components/header-wording'
import InViewSection from '../../components/inview-section/inview-section'
import { useAppSelector } from '../../utils/reduxHooks'
import ArrowAnimate from '../../components/arrowAnimate'
import { useGetServiceByIdQuery } from '../../utils/redux/services/serviceApi'
const Project = () => {
    const { id } = useParams()
    const { data, isSuccess } = useGetProjectByIdQuery(id)
    const { settings } = useAppSelector(state => state.settings)
    const ref = useRef(null)
    const [projectName, setProjectName] = useState()
    const [bannerProject, setBannerProject] = useState()
    const [caseStudy, setCaseStudy] = useState()
    const [images, setImages] = useState<string[]>([])
    const [desc, setDesc] = useState()
    const [serviceName, setServiceName] = useState()
    const [serviceId, setServiceId] = useState()
    const [whyDesc, setWhyDesc] = useState()
    const [imgWhy, setImgWhy] = useState()
    const [isHovered, setIsHovered] = useState(false)
    const { data:service } = useGetServiceByIdQuery(Number(serviceId))

    useEffect(() => {
        if (isSuccess) {
            setCaseStudy(data.project.case_study)
            setDesc(data.project.desc)
            setProjectName(data.project.name)
            setBannerProject(data.project.banner_project_path)
            setImages(data.project.images.split(','))
            setImgWhy(data.project.img_why_path)
            setWhyDesc(data.project.why)
            setServiceId(data.project.service_id)
        }
    }, [isSuccess])


    useEffect(() => {
        if (service?.service) {
            setServiceName(service?.service.service_name)
        }
    }, [service])

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0vh', '50vh']
    })
    const width = useTransform(scrollYProgress, [0, 1], ['30%', '100%'])


    return (
        <motion.main id='detail-project'>
            <HeaderWording
                width={79}
                headline1='ELEVATE YOUR'
                headline2='DIGITAL EXPERIENCE'
                desc='We believe that every brand has a unique story to tell, and we are here to help you amplify that story through innovative and effective digital strategies.'
            />

            <motion.div ref={ref} className='section__banner'>
                <motion.img style={{ width }} className='banner__project' src={bannerProject} alt="banner" width={1000} height={1000} />
            </motion.div>

            <InViewSection initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='section__case_study'>
                <div className='title'>Case Study</div>
                <div className='detail'>{caseStudy}</div>
            </InViewSection>

            <div className="section__moreImage">
                <AnimatePresence>
                    {images && images.map((image, index) => (
                        <InViewSection initial={window.innerWidth > 1080 ? { opacity: 0, y: 520 } : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} key={index} className='imageitem'>
                            <img src={image} alt={caseStudy && caseStudy + index} width={373} height={431} />
                        </InViewSection>
                    ))}
                </AnimatePresence>
            </div>

            <InViewSection initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='section__desc'>
                <div className='title'>Description</div>
                <div className='detail'><span className='project__name'>{projectName}</span> {desc}</div>
            </InViewSection>

            <InViewSection initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='section__service'>
                <div className='title'>Service</div>
                <div className='detail'><span className='serviceName'>{serviceName}</span></div>
            </InViewSection>

            <motion.section className='section__why'>
                <InViewSection initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='title'>Why</InViewSection>
                <InViewSection initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='imgWhy'>
                    <img src={imgWhy} alt={projectName} width={1000} height={1000} />
                </InViewSection>
                <InViewSection initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='detail'>{whyDesc}</InViewSection>
            </motion.section>

            <section className="container about-wrapper__info">
                <div className="about-info">
                    <InViewSection initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <motion.div className='title__info'>WE BELIEVE IN
                            CREATING MAGIC</motion.div>
                    </InViewSection>
                    <InViewSection initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <motion.div className='desc__info'>{settings.what_we_do_desc}</motion.div>
                    </InViewSection>
                    <InViewSection initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <motion.a onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} href='/about' className='show-more__about'>What we do <ArrowAnimate gap={20} width={19.38} height={16.62} isHovered={isHovered} /></motion.a>
                    </InViewSection>
                </div>
            </section>
        </motion.main >
    )
}

export default Project