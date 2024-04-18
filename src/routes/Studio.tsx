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

              <div className="studio-title-container">
                <h1 className="h1-header">Studio Showcase.</h1>
              </div>

              <p className='studio-summary'>Explore my studio! This space hosts a growing collection of hobby projects, learning resources, articles, and other technical content.</p>

              <div className="studio-grid">
                <Tilt className="s-demos tilt-tile" tiltReverse={true}>
                  <a href="/#/studio/demos">
                    <div className="padding">
                      <h1 className='tile-header'>Demos</h1>
                      <p>Take a look at my playground of interactive demos and visualizations, showcasing some of my coolest personal projects. They're live and ready for clicks.</p>
                    </div>
                  </a>
                </Tilt>

                <Tilt className="s-articles tilt-tile" tiltReverse={true}>
                  <a target="_blank">
                    <div className="padding">
                      <h1 className='tile-header'>Articles</h1>
                      <p>This space is for informative, opinionated, or hobby-interest technical writing pieces. Mostly for me but feel free to take a look!</p>
                    </div>
                  </a>
                </Tilt>

                <Tilt className="s-projects tilt-tile" tiltReverse={true}>
                  <a target="_blank">
                    <div className="padding">
                      <h1 className='tile-header'>Projects</h1>
                      <p>Browse through a collection of personal projects built from college-days to the present. Subject matter topics include front-end design and web development, data structures and algorithms, machine learning, cloud computing, and data science.</p>
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