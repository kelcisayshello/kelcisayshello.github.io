import { useState, useEffect } from 'react';
import { Footer, NavigationBar, PageLoader } from '../components/SharedLayout'
import Tilt from 'react-parallax-tilt';
import '../css/w3.css'
import '../css/pages/studio.css'

function Studio() {
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
        <div className="route-container">
          <NavigationBar />

          <div className="studio-container w3-content">
            <div className="w3-row-padding">

              <div className="route-title-container">
                <h1>Studio Showcase.</h1>
              </div>

              <p className='route-page-summary'>Explore my studio space which hosts a growing collection of side projects, learning resources, articles, and other technical content!</p>

              <div className="studio-grid">
                <Tilt className="s-demos tilt-tile" tiltReverse={true}>
                  <a href="/#/studio/demos">
                    <div className="padding">
                      <h1 className='tile-header'>Demos</h1>
                    </div>
                  </a>
                </Tilt>

                <Tilt className="s-articles tilt-tile" tiltReverse={true}>
                  <a href="#">
                    <div className="padding">
                      <h1 className='tile-header'>Articles</h1>
                    </div>
                  </a>
                </Tilt>

                <Tilt className="s-projects tilt-tile" tiltReverse={true}>
                  <a href="/#/studio/projects">
                    <div className="padding">
                      <h1 className='tile-header'>Projects</h1>
                    </div>
                  </a>
                </Tilt>
              </div>

            </div>
          </div>

          <Footer />
        </div>

      )}

    </>
  )
}

export default Studio;