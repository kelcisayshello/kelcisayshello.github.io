import { useState, useEffect } from 'react';
import { Footer, NavigationBar, PageLoader } from '../../components/SharedLayout'
import '../../css/w3.css'
import "../../css/pages/demos.css"
import { GridBox } from '../../components/Demos';

function Demos() {
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

              {/* <p className='route-page-summary'>Sample text here.</p> */}

              <div className="demos-grid">
                <GridBox title="P90 – A Visual Studio Code Theme" link='https://www.google.com'/>
                <GridBox>
                  B
                </GridBox>
                <GridBox>
                  C
                </GridBox>
                <GridBox>
                  D
                </GridBox>
                <GridBox>
                  E
                </GridBox>
                <GridBox>
                  F
                </GridBox>
              </div>

            </div>
          </div>

          <Footer />
        </div>

      )}

    </>
  )
}

export default Demos;