import IcBurger from "../../assets/img/icon/burger-menu.png";
import IcClose from "../../assets/img/icon/ic-close.png";
import { motion } from "framer-motion"
import "./header.scss";
import { useAppDispatch, useAppSelector } from '../../utils/reduxHooks';
import { setBurgerMenu } from '../../utils/redux/slice/burgerMenuSlice';

const Header = () => {
    const dispatch = useAppDispatch()
    const { isBurgeMenu } = useAppSelector(state => state.burgerMenu)
    const {settings} = useAppSelector(state => state.settings)

    const burgerMenuHandler = () => {
        dispatch(setBurgerMenu(!isBurgeMenu))
    }
    return (
        <motion.header className='header container'>
            <a href="/" aria-label='logo home'>
                {!isBurgeMenu &&
                    <img src={settings?.logo_website_path} alt="glums" width={51} height={51} />
                }
            </a>

            <div className="menu__header">
                <span className='small-pointer' style={{ color: isBurgeMenu ? '#F2F2F2' : '#212121' }}>{isBurgeMenu ? 'Close' : 'Menu'}</span>
                <button className='small-pointer' type='button' onClick={() => burgerMenuHandler()}>
                    {isBurgeMenu ?
                        <img className='small-pointer' src={IcClose} alt="Burger Menu" width={18.33} height={18.33} /> :
                        <img className='small-pointer' src={IcBurger} alt="Burger Menu" width={33} height={5} />
                    }
                </button>
            </div>
        </motion.header>
    )
}

export default Header