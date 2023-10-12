import PageLoader from "../components/PageLoader";
import { useState, useEffect } from 'react';
import NavigationBar from "../components/NavigationBar";
import Title from "../components/Title";
import 'animate.css';
import '../css/generic.css'
import '../css/home.css';
import esquiggle from "../imgs/esquiggle.svg"
import vsquiggle from "../imgs/vsquiggle.svg"
import csquiggle from "../imgs/csquiggle.svg"



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
          <img className="squiggle e" src={esquiggle} />
          <img className="squiggle c" src={csquiggle} />
          <img className="squiggle v" src={vsquiggle} />



        </div>
      )}
    </>
  )
}

export default Home
