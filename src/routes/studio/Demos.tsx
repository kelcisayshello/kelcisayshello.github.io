import { useState, useEffect } from 'react';
import { Footer, NavigationBar, PageLoader } from '../../components/SharedLayout'
import '../../css/w3.css'
import "../../css/pages/demos.css"
import { GridBox } from '../../components/Studio';

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
                <GridBox title="Sample Demo" link='https://www.google.com' />
                <GridBox title='B' />
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

export default Demos;