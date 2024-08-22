import "./footer.scss"
import Marquee from '../marque'
import { Link } from "react-router-dom";
import { useAppSelector } from "../../utils/reduxHooks";

const Footer = () => {
    const { settings } = useAppSelector(state => state.settings)

    return (
        <footer className='footer'>
            <div className="container">
                <Marquee>
                    <span>{settings.marquee} . &nbsp;</span>
                </Marquee>
                <div className="lets-talk">
                    <span>Let’s Talk.</span>
                </div>
                <ul className="menu-footer">
                    <li className="footer-list">
                        <Link className="footer-list-a" to="/">Home</Link>
                        <Link className="footer-list-a" to="/about">About</Link>
                        <Link className="footer-list-a" to="/services">Services</Link>
                        <Link className="footer-list-a" to="/library">Works</Link>
                    </li>
                    <li className="footer-list">
                        <Link className="footer-list-a" target="_blank" rel="noreferrer" to="mailto:glums-agency@gmail.com">Email</Link>
                        <Link className="footer-list-a" target="_blank" rel="noreferrer" to="http://www.instagram.com/fadilfahrudin/" >Instagram</Link>
                        <Link className="footer-list-a" target="_blank" rel="noreferrer" to="https://www.linkedin.com/in/fadillahfahrudin/">LinkedIn</Link>
                    </li>
                </ul>
                <div className="footer-licence ">
                    <a href="/privacy-police">Privacy Policy</a>
                    <a href="/">{settings.copy_right}</a>
                    <a href="/term">Term & Conditions</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer