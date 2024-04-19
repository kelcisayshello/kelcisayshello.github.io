import { useState, useEffect } from 'react';
import { Footer, NavigationBar, PageLoader } from '../../components/SharedLayout'
import '../../css/w3.css'
import "../../css/pages/projects.css"
import { GridBox } from '../../components/Studio';

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

              <div className="route-title-container projects-title">
                <h1>Projects.</h1>
              </div>

              {/* <p className='route-page-summary'>Sample text here.</p> */}

              <div className="projects-grid">
                <GridBox title="P90 – A Visual Studio Code Theme" link='https://marketplace.visualstudio.com/items?itemName=kelcisayshello.p90' />
                <GridBox title='Pickr. Eye Dropper Google Chrome Extension Tool' />
                <GridBox title='C' />
                <GridBox title='D' />
                <GridBox title='E' />
                <GridBox title='F' />
                <GridBox title='G' />
                <GridBox title='H' />
                <GridBox title='I' />
                <GridBox title='J' />
                <GridBox title='K' />
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