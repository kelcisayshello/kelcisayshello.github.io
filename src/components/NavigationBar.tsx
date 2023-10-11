import logo from "../assets/logo.png"

export default function NavigationBar() {

    return (
        <>
            <div className="navigation-container">
                <nav>
                    <ul>
                        <li><a className="link home" href={`/`}>Home</a></li>
                        <li><a className="link resume" href={`/showcase/`}>Showcase</a></li>
                        <li><a className="link resume" href={`/resume/`}>Resume</a></li>
                        <li className="logo"> <img src={logo} alt="KLËMM logo" /> </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}