import "../css/components.css"

export function Google() {
    return (
        <>
            <p className="company-logos google"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></p>
        </>
    );
}

export function GoogleInternship() {
    return (
        <>
            <div className="experience-item">
                <h4 className="title">Developer Relations Engineer Intern</h4>
                <p className="location"><Google />, New York City, NY</p>
                <p><i className="fa-regular fa-calendar"></i> May 2022 - August 2022</p>

                <ul>
                    <li>
                        Developed an <a style={{ color: "#DA4E3F" }} className="hyperlink" href="https://console.cloud.google.com/getting-started?walkthrough_id=functions--first-function-python" target="_blank">interactive Python web-based tutorial</a> to help beginner cloud developers get started writing functions with Google Cloud.
                    </li>
                    <li>
                        Created audio and visual media content to advocate the Google Cloud developer and enterprise partnership.
                        <ul>
                            <li>
                                Contributed to the production life cycle of YouTube content for Google Cloud including contextual research, scripting, and starring in visual media. [<a className="hyperlink" href="#" style={{ color: "#cc0033"}}>view</a>]
                            </li>
                            <li>
                                Supported the production lifecycle of audio content for Google Cloud Platform by starring in podcasts featuring internal and external clients.
                            </li>
                            <li>
                                Published a technical blog piece advocating benefits of student and entry-level developers using Google Cloud Platform’s (GCP) Platform-as-a-Service (PaaS) <a style={{ color: "#D01CB3" }} href="https://cloud.google.com/bigquery/" className="hyperlink" target="_blank">Big Query</a> tool. [<a className="hyperlink" href="#" style={{ color: "#0057E7"}}>view</a>]
                            </li>
                        </ul>
                    </li>
                    <li>
                        Contributed to the <a style={{ color: "#00B0E7" }} href="https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute" className="hyperlink" target="_blank">Google Computer Science Summer Institute</a> program as a teacher’s assistant (TA) for the computer science principles curriculum.
                    </li>
                </ul>
            </div>
        </>
    );
}

export function NASA() {
    return (
        <>
            <p className="company-logos nasa">NASA</p>
        </>
    );
}

export function NASAInternship() {
    return (
        <>
            <div className="experience-item">
                <h4 className="title">Graphics and Visualization Lab Intern</h4>
                <p className="location"><NASA />, Cleveland, Ohio</p>
                <p><i className="fa-regular fa-calendar"></i> August 2020 - August 2021</p>

                <ul>
                    <li>
                        Integrated Wordpress CMS tools with HTML, CSS, and JavaScript programming to develop and maintain team content on the official website for the NASA Glenn Graphics and Visualization Lab.
                        <ul>
                            <li>
                                Monitored site metrics using web analytics tools to gauge public interest on projects.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Developed K-12 STEM education curriculums for virtual audiences using Python and Java programming languages with a focus on data structure algorithms, web development, and hands-on robotics programming.
                    </li>
                    <li>
                        Created digital iconography for internal tools while practicing government-standard design principles.
                    </li>
                </ul>
            </div>
        </>
    );
}

export function ARMY() {
    return (
        <>
            <p className="company-logos army">U.S. ARMY</p>
        </>
    );
}

export function USArmyInternship() {
    return (
        <>
            <div className="experience-item">
                <h4 className="title">Cyber Security Intern</h4>
                <p className="location"><ARMY /> (Aberdeen Proving Ground), Aberdeen, MD</p>
                <p><i className="fa-regular fa-calendar"></i> July 2018</p>

                <ul>
                    <li>
                        Assisted cyber-security specialists within the Department of Defense (D.O.D) in maintaining sensitive digital safety on military-grade operating systems. 
                        <ul>
                            <li>
                                Preserved IP address anonymity and practiced invasive malware defense strategies using Linux command line tools.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}