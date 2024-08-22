import { useInView, motion } from 'framer-motion'
import React, { useRef } from 'react'


type initialType = {
    opacity?: number,
    y?: number,
    x?: number
}

type animateType = {
    opacity?: number,
    y?: number,
    x?: number
}

type transitionType = {
    duration?: number,
    delay?: number
}

interface Props {
    children: React.ReactNode
    initial?: initialType
    animate?: animateType
    transition?: transitionType
    className?: string
}

const InViewSection = ({ children, initial, animate, transition, className }: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: '0px 0px -10% 0px',
        once: true
    })

    return (
        <motion.div className={className} ref={ref} initial={initial} animate={isInView ? animate : ''} transition={transition}>
            {children}
        </motion.div>
    )
}

export default InViewSection