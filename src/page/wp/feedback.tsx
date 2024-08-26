import { Fragment, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useMotionValue } from 'framer-motion'
const feedbackData = [
    {
        id: 0,
        client: 'Pritviva Sandani - Somay Depan',
        message: 'The service was very very good. Glums team understood all the details I needed and quickly helped me out with whatever I needed. The service was also very much on time and adaptability was done very smoothly. Good job and well done!'
    },
    {
        id: 1,
        client: 'Kang Somay - Somay Sindo',
        message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed totam quaerat necessitatibus quisquam blanditiis! Placeat nostrum iure dolor nobis sed.'
    },
    {
        id: 2,
        client: 'Kang Bakso - Gondangdia',
        message: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptates libero aspernatur perspiciatis, saepe adipisci animi ad dolorum necessitatibus! Repellendus natus quas officia dolor. Nesciunt recusandae distinctio officiis quod inventore ab qui ullam consequatur vel, debitis blanditiis quam libero architecto.'
    },
]
const FeedbackComponent = () => {
    const [slideId, setSlideId] = useState(1)
    const ref = useRef<HTMLDivElement>(null)
    const ref2 = useRef(null)
    const x = useMotionValue(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (slideId >= feedbackData.length) {
                setSlideId(1)
                x.set(0)
            } else {
                if (ref.current) {
                    setSlideId(slideId + 1)
                    x.set(-ref.current.clientWidth * slideId)
                }
            }
        }, 5000); // Interval 5 detik
        return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
    }, [slideId, setSlideId, x]);



    const isInView = useInView(ref2, {
        margin: '0px 0px -60% 0px',
        once: true
    })
    const stacks = {
        active: (custom: number) => ({ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0, transition: { duration: 0.5, delay: custom * 0.2 } }),
        inActive: { y: 50, opacity: 0 },
    }
    return (
        <Fragment>
            <AnimatePresence>
                <section ref={ref2} className="section__feedback">
                    <motion.div initial="inActive" variants={stacks} animate="active" custom={1} className='section__title'>What They Say About Us</motion.div>
                    <div ref={ref} className="feedback__content">
                        <motion.div style={{ x: x.get() }} className="feedback__slider">
                            {
                                feedbackData.map((item) => (
                                    <Child
                                        key={item.id}
                                        desc={item.message}
                                        client={item.client}
                                    />
                                ))
                            }
                        </motion.div>
                        <div className="indicator__wrapp" ref={ref2}>
                            {
                                feedbackData.map((item, i) => (
                                    <motion.span initial="inActive" variants={stacks} animate="active" custom={4} key={i} className={`indicator ${item.id + 1 === slideId ? 'active' : ''}`}></motion.span>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </AnimatePresence>
        </Fragment>
    )
}

export default FeedbackComponent


const Child = ({ desc, client }: { desc: string, client: string }) => {
    const ref2 = useRef(null)

    const isInView = useInView(ref2, {
        margin: '0px 0px -30% 0px',
        once: true
    })
    const stacks = {
        active: (custom: number) => ({ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0, transition: { duration: 0.5, delay: custom * 0.2 } }),
        inActive: { y: 50, opacity: 0 },
    }
    return (
        <Fragment>
            <div ref={ref2} className="feedback__item">
                <motion.div initial="inActive" variants={stacks} animate="active" custom={3} className='feedback__desc'>"{desc}"</motion.div>
                <motion.div initial="inActive" variants={stacks} animate="active" custom={4} className='feedback__client'>{client}</motion.div>
            </div>
        </Fragment>
    )
}