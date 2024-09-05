import { useScroll, motion, useTransform, AnimatePresence } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useGetProjectByServiceIdQuery } from '../../utils/redux/services/projecsApi'


interface RelatedProjectProps {
    serviceId: string;
    service_name: string;
}
const RelatedProject: React.FC<RelatedProjectProps> = ({ serviceId, service_name }) => {
    const { data, isSuccess } = useGetProjectByServiceIdQuery(Number(serviceId))
    const [scrollLength, setScrollLength] = useState(0)
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })
    const x = useTransform(scrollYProgress, [0, 1], ['0vh', `-${scrollLength - 38}vh`]);
    const transformX = isSuccess && data.data.length > 1 ? x : 0
    useEffect(() => {

        if (isSuccess) {
            setScrollLength(data.data.length * 100)
        }

    }, [isSuccess])

    return (
        <>
            {isSuccess && data.data.length > 0 ?
                <div ref={targetRef} className="horizontalScrollContainer" style={window.innerWidth > 1080 ? { height: `${scrollLength}` } : { height: 'auto' }}>
                    <div className="horizontalScroll">
                        <div className="relatedTitle">Related Projects</div>
                        <motion.div className='horizontalContent' style={window.innerWidth > 1080 ? { x: transformX } : { x: 0 }}>
                            {isSuccess && data.data.map((item:{id: number, name: string, banner_project_path: string, created_at: string, case_study: string}, index:number) => (
                                <ProjectCard key={item.id} id={item.id} total={data.data.length} index={index + 1} project_name={item.name} service_name={service_name} banner_project={item.banner_project_path} created_at={item.created_at} case_study={item.case_study} />
                            ))}
                        </motion.div>
                    </div>
                </div> : ""
            }
        </>
    )
}



type projectType = {
    id: number,
    index: number,
    banner_project: string,
    project_name: string,
    service_name: string,
    created_at: string,
    case_study: string,
    total: number
}

const ProjectCard = (Props: projectType) => {
    const [isHovered, setIsHovered] = useState(false)
    const { banner_project, service_name, case_study, created_at, project_name, index, total, id } = Props

    useEffect(() => {
        if (window.innerWidth < 1080) {
            setIsHovered(true)
        }
    }, [])

    const indikatorRender = () => {
        const indikator: JSX.Element[] = []
        for (let i = 0; i < total; i++) {
            indikator.push(<li key={i} className={i + 1 === index ? 'active indikator' : 'indikator'}></li>)
        }
        return indikator
    }
    return (
        <motion.a className="content" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} href={`/project/${id}`}>
            <AnimatePresence>
                {
                    isHovered && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }} className='hoverWrapper'>
                            <motion.div className='subCard' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} exit={{ opacity: 0, y: 100 }}>
                                <div className="headerCard">
                                    <div className="title">{project_name}</div>
                                    <div className="date">{created_at.split('T')[0].split('-')[0]}</div>
                                </div>
                                <div className="bodyCard">{case_study.split('.')[0]}</div>
                                <span className='footerCard'>{service_name}</span>
                            </motion.div>
                            <motion.ul className='indikatorWrapper' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} exit={{ opacity: 0, y: 100 }}>
                                {indikatorRender()}
                                <li className='total'>{index}/{total}</li>
                            </motion.ul>
                        </motion.div>
                    )
                }
            </AnimatePresence>
            <img src={banner_project} alt={'Banner of ' + service_name} width={1000} height={1000} />
        </motion.a>
    )
}

export default RelatedProject