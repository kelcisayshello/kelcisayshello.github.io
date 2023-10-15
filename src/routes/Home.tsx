import PageLoader from "../components/PageLoader";
import { useState, useEffect } from 'react';
import 'animate.css';
import '../css/pages/home.css';
import GridLayout from "../components/GridLayout";

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
          <GridLayout />
        </div>
      )}
    </>
  )
}

export default Home
