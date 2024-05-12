import { useState, useEffect } from 'react';
import { Footer, NavigationBar, PageLoader } from '../../components/SharedLayout'
import { GridBox } from '../../components/Studio';
import '../../css/w3.css'
import "../../css/pages/projects.css"

function Projects() {
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

          <div className="projects-container w3-content">
            <div className="w3-row-padding">

              <div className="route-title-container">
                <h1>Projects.</h1>
              </div>

              <p className='route-page-summary'>Navigate to a project's source code by hovering over the box and clicking anywhere within the boundaries.</p>

              <div className="projects-grid">
                <GridBox 
                  title="P90 – A Visual Studio Code Theme" 
                  link='https://marketplace.visualstudio.com/items?itemName=kelcisayshello.p90'
                />
                <GridBox title='Pickr. Eye Dropper Google Chrome Extension Tool' link='https://github.com/kelcisayshello/pickr'/>
                <GridBox 
                  title="WordUp – Neumorphic Word Counter" 
                  link='https://github.com/kelcisayshello/wordup'
                />
              </div>

            </div>
          </div>

          <Footer />
        </div>

      )}

    </>
  )
}

export default Projects;