import Footer from '../components/Footer'
import profile from '../assets/profile.jpg'
import PageLoader from '../components/PageLoader'
import NavigationBar from '../components/NavigationBar';
import { useState, useEffect } from 'react';
import { Widget, WidgetLinked, InvolvementItem } from '../components/Resume'
import { GoogleInternship, NASAInternship, USArmyInternship } from '../assets/ResumeAssets'
import '../css/w3.css'
import '../css/pages/resume.css'

function Resume() {
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
          <div className="resume-container w3-content">
            <div className="w3-row-padding">

              {/* resume title container */}
              <div className="title-container">
                <h1 className="titleheader">Resume</h1>
                <div className="btn-download">
                  <a href="https://docs.google.com/document/d/1aRP5LGOwz1ywaAzwiP_AlnI-LAGG3Q0VKHdKFPD7Hfg/edit?usp=sharing"
                    target="_blank">Download</a>
                </div>
              </div>


              <div className="w3-third">
                {/* about me container */}
                <div className="w3-card-4">

                  {/* photo container > about me container */}
                  <div className="w3-display-container photo-container">
                    <img src={profile} alt="Avatar" />
                    <div className="w3-display-bottomleft w3-container">
                      <h2>Kelci Mensah</h2>
                    </div>
                  </div>

                  {/* information > about me */}
                  <div className="w3-container aboutme-container">

                    <Widget icon="fa-regular fa-map" content="Atlanta, GA" />
                    <WidgetLinked icon="fa-brands fa-github fa-fw" content="@kelcisayshello" link="https://www.github.com/kelcisayshello" />
                    <WidgetLinked icon="fa-regular fa-paper-plane fa-fw" content="kelcimensah@gmail.com" link="mailto:kelcimensah@gmail.com" />
                    <WidgetLinked icon="fa-brands fa-linkedin-in fa-fw" content="Kelci Mensah" link="https://www.linkedin.com/in/kelcimensah" />

                    <hr />

                    {/* education > about me container */}
                    <h3 className="subheader" style={{ color: "#345D98" }}>Education.</h3>

                    <div className="education-item">
                      <p>Dual Bachelors in Computer Science and Cognitive Science, High Honors</p>
                      <p className="location">
                        <a href="https://www.rutgers.edu/" className="hyperlink" target="_blank" style={{ color: "#CC0033" }}>Rutgers
                          University</a>, New Brunswick, NJ
                      </p>
                      <p className="date"><i className="fa-regular fa-calendar"></i> 2019 - 2023</p>
                    </div>

                    {/* skills > about me container */}
                    <h3 className="subheader" style={{ color: "#EC8248" }}>Skills.</h3>

                    <div className="education-item">
                      <h4>Languages + Libraries</h4>
                      <p>Python, HTML (HyperText Markup Language), JavaScript, CSS (Cascading Style Sheets), React (React.js), SQL, Java, TypeScript, Git</p>
                    </div>

                    <div className="education-item">
                      <h4>Software + Digital Tools</h4>
                      <p>Figma, Adobe Photoshop, Procreate iOS, Microsoft Office 365, Google Workspace</p>
                    </div>

                    <br />
                    <br />

                  </div>
                </div>
              </div>


              <div className="w3-twothird">
                {/* work experience container */}
                <div className="experience-container w3-container w3-card w3-margin-bottom">

                  <h2 className="subheader" style={{ color: "#DA4E3F", margin: "2.5rem 0 1rem" }}>
                    Work Experience.
                  </h2>

                  {/* google internship */}
                  <GoogleInternship />

                  <hr />

                  {/* nasa internship */}
                  <NASAInternship />

                  <hr />

                  {/* apg internship */}
                  <USArmyInternship />

                  <br />
                </div>

                {/* professional involvement container */}
                <div className="involvement-container w3-container w3-card w3-margin-bottom">

                  <h2 className="subheader" style={{ color: "#3A7359", margin: "2.5rem 0 1rem" }}>Professional Involvement.</h2>

                  <InvolvementItem title="Minority Engineering Educational Task (MEET) - Rutgers University NSB Chapter" date="2019 - 2023" content="Pre-professional student organization for Black, Hispanic, Asian, and other minority-representing student identities within engineering and other technology-based STEM fields." />

                  <InvolvementItem title="Douglass-DIMACS Computer Science Living Learning Community" date="2019 - 2023" content="A curated living-learning center and community for women-representing undergraduate students majoring in computer science." />

                  <br />
                  <br />
                </div >
              </div >
            </div >
          </div >

          <Footer />
        </div>
      )}

    </>
  )
}

export default Resume;