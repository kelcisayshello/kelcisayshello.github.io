import '../css/pages/contact.css'
import img_home from "../assets/imgs/home.png"
import img_document from "../assets/imgs/document.png"
import Tilt from 'react-parallax-tilt';
import { useState, useEffect } from 'react';
import { POC, POCNoLink } from "../components/Contact";
import { PageLoader } from "../components/ReusableComponents";

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
                  <img className="contact-image" src={img_home} />
                </div>
              </a>
            </Tilt>

            <Tilt tiltReverse={true}>
              <a className="tilt-box" href="/#/resume">
                <div id="box-resumebox" className="padding">
                  <p>View my resume</p>
                  <img className="contact-image" src={img_document} />
                </div>
              </a>
            </Tilt>

            <div id="box-text" className="padding">
              <p>Let's stay connected! <br/> Send an email or get in touch with me through LinkedIn or Twitter :)</p>
            </div>

            <div id="box-email" className="padding">
              <POCNoLink method="e-mail" content="kelcimensah@gmail.com" />
            </div>

            <div className="padding" id="box-social">
              <POC method="Twitter" content="@kelcisayshello" link="https://www.twitter.com/kelcisayshello" />
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
