import { useState } from 'react'
import { motion, Variants } from "framer-motion"
import "./menu.scss"
import ArrowAnimate from '../arrowAnimate'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../utils/reduxHooks'
import { setBurgerMenu } from '../../utils/redux/slice/burgerMenuSlice'
const Menu = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const [hoverIndex, setHoverIndex] = useState<number | null>(null)
    const { settings } = useAppSelector(state => state.settings)

    const handleNavigation = (path: string) => {
        navigation(path)
        dispatch(setBurgerMenu(false))
    }

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
                    <motion.button initial="close" animate="open" variants={itemVariant} custom={item.id} onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave} key={item.id} onClick={() => handleNavigation(item.path)} className='nav__item'>
                        <motion.span className='item__name'>{item.name}</motion.span>
                        <ArrowAnimate black={true} gap={23} width={26} height={24} isHovered={hoverIndex === item.id} />
                    </motion.button>
                ))}
            </div>
            <div className="license">
                <span>{settings.pt_name}</span>
                <span>{settings.pt_address}</span>
            </div>
        </motion.nav>
    )
}

export default Menu