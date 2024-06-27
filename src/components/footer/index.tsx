import "./footer.scss"
import Marquee from '../marque'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <Marquee>
                    <span>WE ARE PROFESIONAL . &nbsp;</span>
                </Marquee>
                <div className="lets-talk">
                    <span>Let’s Talk.</span>
                </div>
                <ul className="menu-footer">
                    <li className='footer-list'><a className='list-footer' href="/">Home</a></li>
                    <li className='footer-list'><a className='list-footer' href="/about">About</a></li>
                    <li className='footer-list'><a className='list-footer' href="/">Services</a></li>
                    <li className='footer-list'><a className='list-footer' href="/">Works</a></li>
                    <li className='footer-list'><a className='list-footer' href="#">Email</a></li>
                    <li className='footer-list'><a className='list-footer' href="#">Instagram</a></li>
                    <li className='footer-list'><a className='list-footer' href="#">LinkedIn</a></li>
                </ul>
                <div className="footer-licence ">
                    <a href="/privacy-police">Privacy Policy</a>
                    <a href="/">Glums Agency 2024 © All Rights Reserved</a>
                    <a href="/term">Term & Conditions</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer