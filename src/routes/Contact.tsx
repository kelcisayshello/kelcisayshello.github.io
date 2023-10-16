import PageLoader from "../components/PageLoader";
import Tilt from 'react-parallax-tilt';
import { useState, useEffect } from 'react';
import '../css/pages/contact.css'
import home from "../assets/grid/home.png"
import document from "../assets/grid/document.png"
import {POC, POCNoLink} from "../assets/ContactAssets";


function Home() {
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

        <div className="route-container contact">
          {/* <NavigationBar /> */}

          <div className="contact-container">

            <Tilt tiltReverse={true}>
              <a className="tilt-box" href="/">
                <div id="box-home" className="padding">
                  <p>Go home</p>
                  <img className="contact-image" src={home} />
                </div>
              </a>
            </Tilt>

            <Tilt tiltReverse={true}>
              <a className="tilt-box" href="/#/resume">
                <div id="box-resumebox" className="padding">
                  <p>View my resume</p>
                  <img className="contact-image" src={document} />
                </div>
              </a>
            </Tilt>

            <div id="box-text" className="padding">
              <p>Let's keep in contact! <br/> Get in touch with me I'll try to get back to you ASAP :)</p>
            </div>

            <div className="padding" id="box-information">
              <POCNoLink method="e-mail" content="kelcimensah@gmail.com" />
              <POC method="LinkedIn" content="in/kelcimensah" link="https://www.linkedin.com/in/kelcimensah" />
              <POC method="GitHub" content="@kelcisayshello" link="https://www.github.com/kelcisayshello" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
