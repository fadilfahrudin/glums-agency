import { useState } from 'react'
import { motion, Variants } from "framer-motion"
import "./menu.scss"
import ArrowAnimate from '../arrowAnimate'
const Menu = () => {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null)


    const handleMouseEnter = (index: number) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    const menu = [
        {
            'id': 1,
            'name': 'Home',
            'path': '/'
        },
        {
            'id': 2,
            'name': 'Service',
            'path': '/services'
        },
        {
            'id': 3,
            'name': 'Library',
            'path': '/library'
        },
        {
            'id': 4,
            'name': 'About',
            'path': '/about'
        },
        {
            'id': 5,
            'name': 'Contact',
            'path': '/contact'
        },
    ]

    const itemVariant: Variants = {
        open: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: custom * 0.2 }
        }),
        close: () => ({
            y: 50,
            opacity: 0,
            transition: { duration: 0.5 }
        })
    }

    return (
        <motion.nav initial={{ y: 1000 }} animate={{ y: 0 }} exit={{ y: -1000 }} transition={{ duration: 0.5 }} className='menu__nav'>
            <div className="list__nav">
                {menu.map((item) => (
                    <motion.a initial="close" animate="open" variants={itemVariant} custom={item.id} onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave} key={item.id} href={item.path} className='nav__item'>
                        <motion.span className='item__name'>{item.name}</motion.span>
                        <ArrowAnimate black={true} gap={23} width={26} height={24} isHovered={hoverIndex === item.id} />
                    </motion.a>
                ))}
            </div>
            <div className="license">
                <span>PT. Great Luminate Innovations</span>
                <span>Jl. Prof. DR. Satrio, RT.14/RW.4, Kuningan, Karet Kuningan, Setia Budi, Kota Jakarta Selatan, Daerah Khusu Ibukota Jakarta 12940</span>
            </div>
        </motion.nav>
    )
}

export default Menu