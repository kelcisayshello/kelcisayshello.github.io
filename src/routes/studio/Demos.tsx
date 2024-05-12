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

              <div className="route-title-container">
                <h1>Live Demos & Content.</h1>
              </div>

              <p className='route-page-summary'>To view the live project demo, hover over the box and click on the underlined text.</p>

              <div className="demos-grid">
                <GridBoxBorder
                  title="HTML Elements Reference Sheet"
                  link='https://www.kelcimensah.dev/htmlreference/'>
                </GridBoxBorder>
                <GridBoxBorder
                  title="Rutgers Universty CS112 – Data Structures & Algorithms"
                  link='https://www.kelcimensah.dev/CS112/'>
                </GridBoxBorder>
                <GridBoxBorder
                  title="WordUp – Neumorphic Word Counter"
                  link='https://www.kelcimensah.dev/wordup/'>
                </GridBoxBorder>
                <GridBoxBorder
                  title="Tip Calculator"
                  link='https://www.kelcimensah.dev/js-projects/demos/tc.html'>
                </GridBoxBorder>
                <GridBoxBorder
                  title="Randomize an HTML Background"
                  link='https://www.kelcimensah.dev/js-projects/demos/chbc.html'>
                </GridBoxBorder>
                <GridBoxBorder
                  title="JavaScript Alert, Prompt, and Confirm"
                  link='https://www.kelcimensah.dev/js-projects/demos/apcf.html'>
                </GridBoxBorder>
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