import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import "../css/components/navigationbar.css"

export default function NavigationBar() {

    return (
        <>
            <div className="navigation-container">
                <nav>
                    <ul>
                        <li><Link className="link home" to="/">Home</Link></li>
                        <li><Link className="link resume" to="/resume">Resume</Link></li>
                        <li><Link className="link contact" to="/contact">Contact</Link></li>
                        <li className="logo"> <img src={logo} alt="KLËMM logo" /> </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}