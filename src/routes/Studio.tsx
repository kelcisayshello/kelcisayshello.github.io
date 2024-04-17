import Footer from '../components/Footer'
import PageLoader from '../components/PageLoader'
import NavigationBar from '../components/NavigationBar';
import { useState, useEffect } from 'react';
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
                <h1 className="h1-header">Studio Showcase</h1>
              </div>

              <p>sample text here</p>

            </div>
          </div>

          <Footer />
        </div>

      )}

    </>
  )
}

export default Studio;