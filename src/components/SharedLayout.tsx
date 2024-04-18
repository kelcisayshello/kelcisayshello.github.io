import logo from "../assets/imgs/logo.png"
import { Link } from "react-router-dom";
import "../css/sharedlayout.css"

export function PageLoader() {
    return (
        <>
            <div className="loader"></div>
        </>
    );
}

export function Footer() {
    const date = new Date();
    return (
        <>
            <div className="footer-container">
                <footer>
                    <p>Copyright © {date.getFullYear()} • Made with a :)</p>
                </footer>
            </div>
        </>
    );
}

export function NavigationBar() {
    return (
        <>
            <div className="navigation-container">
                <nav>
                    <ul>
                        <li><Link className="link home" to="/">Home</Link></li>
                        <li><Link className="link studio" to="/studio">Studio</Link></li>
                        <li><Link className="link resume" to="/resume">Resume</Link></li>
                        <li><Link className="link contact" to="/contact">Contact</Link></li>
                        <li className="logo"> <img src={logo} alt="Colorful personal website logo with the initials KLËMM" /> </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}