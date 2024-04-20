import { useState, useEffect } from 'react';
import { Footer, NavigationBar, PageLoader } from '../../components/SharedLayout'
import { GridBoxBorder } from '../../components/Studio';
import '../../css/w3.css';
import "../../css/pages/demos.css";

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

          <div className="demos-container w3-content">
            <div className="w3-row-padding">

              <div className="route-title-container demos-title">
                <h1>Demos.</h1>
              </div>

              <p className='route-page-summary'>To view the demo, click on the text. To view the source code, click on the GitHub icon.</p>

              <div className="demos-grid">
                <GridBoxBorder
                  title="HTML Elements Reference Sheet"
                  demo='https://www.kelcimensah.dev/htmlreference/'
                  source_code="https://github.com/kelcisayshello/htmlreference"
                />
                <GridBoxBorder 
                  title='WordUp – Neumorphic Word Counter' 
                  demo="https://www.kelcimensah.dev/wordup/"
                  source_code="https://github.com/kelcisayshello/wordup"
                />
                <GridBoxBorder title='' />
                <GridBoxBorder title='' />
                <GridBoxBorder title='' />
                <GridBoxBorder title='' />
                <GridBoxBorder title='' />
                <GridBoxBorder title='' />
                <GridBoxBorder title='' />
                <GridBoxBorder title='' />
                <GridBoxBorder title='' />
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