import 'animate.css';
import '../css/pages/home.css';
import Tilt from 'react-parallax-tilt';
import JumpingName from "../components/JumpingName";
import img_blocks from "../assets/imgs/blocks.png"
import img_people from "../assets/imgs/people.png"
import { PageLoader } from "../components/ReusableComponents";
import { useState, useEffect } from 'react';

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  let ampm = time.getHours() >= 12 ? 'pm' : 'am';
  let hours = (time.getHours() % 12) || 12;
  let minutes = (time.getMinutes() <= 9 ? '0' : '') + time.getMinutes();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  return (
    <>
      { loading ? (
        <PageLoader />
      ) : (
        <div className="route-container home">
          <div className="grid-layout">
            <div id="box-title" className="centered-v-h">
              <JumpingName />
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
              <p className="date">{time.toLocaleString('default', { month: 'short' })} {time.getDate()}</p>
              <p className="time">{hours}:{minutes} {ampm.toUpperCase()} <br /> {time.toString().match(/\(([A-Za-z\s].*)\)/)![1]}</p>
            </div>

            <div className="red"></div>

            <Tilt tiltReverse={true}>
              <a className="tilt-box" href="/#/resume">
                <div id="box-resume" className="centered-v-h tilted-tiles">
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
};