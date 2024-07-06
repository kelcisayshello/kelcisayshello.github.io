import { useState, useEffect } from 'react';
import { Footer, NavigationBar, PageLoader } from '../components/ReusableComponents'
import { RouteTitle } from '../components/ReusableComponents';
import '../css/w3.css'
import "../css/pages/projects.css"

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
          <div className="projects-container w3-content">
            <NavigationBar />

            <RouteTitle plain_text="Projects." />

            <div className="projects-content">
              <h2>Demos.</h2>

              <a target="_blank" href='https://www.kelcimensah.dev/wordup/'>
                <p>WordUp – Neumorphic Word Counter Tool</p>
              </a>

              <a target="_blank" href='https://www.kelcimensah.dev/htmlreference/'>
                <p>HTML Elements Reference Sheet</p>
              </a>

              <a target="_blank" href='https://www.kelcimensah.dev/js-projects/demos/tc.html'>
                <p>JavaScript Tip Calculator</p>
              </a>

              <h2>Articles & Technical Writing.</h2>

              <a target="_blank" href='https://cloud.google.com/blog/topics/developers-practitioners/leveling-your-data-analysis-skills-student'>
                <p>Google Cloud Blog - Leveling Up Your Data Analysis Skills As a Student</p>
              </a>

              <a target="_blank" href='https://www.kelcimensah.dev/CS112/'>
                <p>Rutgers Universty CS112 – Data Structures & Algorithms</p>
              </a>

              <h2>Misc.</h2>

              <a target="_blank" href='https://marketplace.visualstudio.com/items?itemName=kelcisayshello.p90'>
                <p>P90 – A Visual Studio Code Theme</p>
              </a>

              <a target="_blank" href='https://github.com/kelcisayshello/pickr'>
                <p>Pickr. Eye Dropper Google Chrome Extension Tool</p>
              </a>
            </div>

          </div >

          <Footer />
        </div>
      )}

    </>
  )
}

export default Projects;