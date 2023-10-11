import AnimatedBackground from "../components/AnimatedBackground"
import Footer from "../components/Footer"
import NavigationBar from "../components/NavigationBar"
import PageLoader from "../components/PageLoader";
import { useState, useEffect } from 'react';

import '../css/generic.css'
import '../css/home.css'

function Home() {
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

          <div className="home-content">
            <h1>Hi, I'm<br />Kelci Mensah.</h1>
          </div>

          <Footer />

          <AnimatedBackground />
        </div>
      )}

    </>
  )
}

export default Home
