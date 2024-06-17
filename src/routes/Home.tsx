import 'animate.css';
import '../css/pages/home.css';
import Tilt from 'react-parallax-tilt';
import Title from "../components/Home";
import img_blocks from "../assets/imgs/blocks.png"
import img_people from "../assets/imgs/people.png"
import { PageLoader } from "../components/SharedLayout";
import { useState, useEffect } from 'react';

function Home() {
  const date = new Date();
  let ampm = date.getHours() >= 12 ? 'pm' : 'am';
  let hours = (date.getHours() <= 9 ? '0' : '') + date.getHours();
  let minutes = (date.getMinutes() <= 9 ? '0' : '') + date.getMinutes();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (

        <div className="route-container home">
          <div className="grid-background">
            <div id="box-title" className="firstbox fully-centered">
              <Title />
            </div>

            <Tilt tiltReverse={true}>
              <a className="tilt-box" href="/#/projects">
                <div id="box-projects" className="box-image gridpadding orange tilted-tiles">
                  <p>Projects</p>
                  <img className="image-box bks" src={img_blocks} />
                </div>
              </a>
            </Tilt>

            <div className="flicker blue"></div>
            <div id="box-date" className="green fully-centered">
              <p className="date">{date.getDate()} {date.toLocaleString('default', { month: 'short' })}</p>
              <p className="time">{hours + ":" + minutes} {ampm.toUpperCase()} <br /> {date.toString().match(/\(([A-Za-z\s].*)\)/)![1]}</p>
            </div>

            <div className="red"></div>

            <Tilt tiltReverse={true}>
              <a className="tilt-box" href="/#/resume">
                <div id="box-resume" className="fully-centered tilted-tiles">
                  <p>Take a look at my resume &nbsp;<i className="fa-solid fa-arrow-right"></i></p>
                </div>
              </a>
            </Tilt>


            <div className="orange "> </div>

            <Tilt tiltReverse={true}>
              <a className="tilt-box" href="/#/contact">
                <div id="box-contactme" className="box-image gridpadding blue tilted-tiles">
                  <p>Contact me</p>
                  <img className="image-box ppl" src={img_people} />
                </div>
              </a>
            </Tilt>

            <div className="flicker green" style={{ animationDelay: "7s" }}> </div>
            <div className="blue"> </div>
            <div className="yellow"> </div>
            <div className="flicker red " style={{ animationDelay: "4s" }}> </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
