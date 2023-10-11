import Footer from "../components/Footer"
import NavigationBar from "../components/NavigationBar"
import PageLoader from "../components/PageLoader";
import { Heading } from "../assets/ShowcaseAssets";
import { useState, useEffect } from 'react';

import '../css/generic.css'
import '../css/showcase.css'

function Showcase() {
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

          <div className="showcase-content">
            <div className="section">
              <Heading content="Development" />
              <p>a PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDB</p>

            </div>

            <div className="section">
              <Heading content="Design" />
              <p>a PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDB</p>

            </div>

            <div className="section">
              <Heading content="Media Content" />
              <p>a PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDBa PWA for logging personal daily moods using IndexedDB</p>

            </div>
          </div>

          <Footer />

        </div>
      )}

    </>
  )
}

export default Showcase
