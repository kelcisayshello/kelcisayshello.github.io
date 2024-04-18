import { useState, useEffect } from 'react';
import { Footer, NavigationBar, PageLoader } from '../../components/SharedLayout'
import '../../css/w3.css'
import "../../css/pages/demos.css"

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

              <div className="">
                <h1 className="h1-header">Demos.</h1>
              </div>

              <p className='studio-summary'>sample text here</p>

            </div>
          </div>

          <Footer />
        </div>

      )}

    </>
  )
}

export default Demos;