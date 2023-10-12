import PageLoader from "../components/PageLoader";
import { useState, useEffect } from 'react';
import NavigationBar from "../components/NavigationBar";
import Title from "../components/Title";
import 'animate.css';

import '../css/generic.css'
import '../css/home.css'
import GridBackground from "../components/GridBackground";

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

        <div className="route-container home">

          <NavigationBar />
          <div className="home-content">
            <Title />
          </div>

          <GridBackground />
          
          {/* <AnimatedBackground /> */}
        </div>
      )}
    </>
  )
}

export default Home
