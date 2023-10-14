import Title from "../components/Title";
import '../css/gridlayout.css';
import Tilt from 'react-parallax-tilt';

export default function GridLayout() {
    const date = new Date();

    return (
        <>
            <div className="grid-background">
                <div id="box-title" className="firstbox fully-centered">
                    <Title />
                </div>
                <div className="orange "></div>
                <div className="flicker blue "></div>
                <div id="box-date" className="green fully-centered">
                    <p>{date.getDate()} {date.toLocaleString('default', { month: 'short' })}</p>
                </div>

                <div className="flicker red"> </div>

                <Tilt tiltReverse={true}>
                    <a className="tilt-box" href="https://www.kelcimensah.dev/#/resume" target="_blank">
                        <div id="box-resume" className="yellow fully-centered">
                            <p>Take a look at my resume &nbsp;<i className="fa-solid fa-arrow-right"></i></p>
                        </div>
                    </a>
                </Tilt>


                <div className="orange "> </div>
                <div className="blue "> </div>

                <div id="box-mwlove" className="fully-centered">
                    <p>Made with <br /> &lt;3</p>
                </div>
                <div className="blue"> </div>
                <div className="yellow"> </div>
                <div className="red "> </div>
            </div>
        </>
    );
}