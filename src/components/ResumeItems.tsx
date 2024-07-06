interface AboutMeLinkArgs {
    icon?: string;
    plain_text: string;
    href_link?: string;
    date?: string;
    title?: string;
}

export function AboutMeLink({ icon, plain_text, href_link }: AboutMeLinkArgs) {
    return (
        <>

            {href_link ? (<p className="widget"><i className={"w3-margin-right " + icon}></i>{plain_text}</p>)
            : (<a className="widget" href={href_link} target="_blank">
                <p className="widget"><i className={"w3-margin-right " + icon}></i>{plain_text}</p>
                </a>)}

        </>
    );
}

interface ExperienceArgs {
    children: React.ReactNode;
    experience: string;
}

export function ExperienceItem({experience, children } : ExperienceArgs) {
    return (
        <div className="experience-item">
                <h4 className="title">{experience}</h4>
                {children}
            </div>
    )
}

interface CertArgs {
    certificate_name: string;
    date_issued: string;
}

export function Certification({ certificate_name, date_issued, credential_id }: CertArgs) {
    return (
        <>
            <div className="certification">
                <img src="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png" />
                <p className="certname">{certificate_name}</p>
                <p className="issued">Issued in {date_issued}</p>
            </div>
        </>
    );
}

interface AcademicInvolvementArgs {
    description: string;
    active_dates?: string;
    involvement?: string;
}

export function AcademicInvolvement({ involvement, description, active_dates }: AcademicInvolvementArgs) {
    return (
        <>
            <div className="involvement-item">
                <h4 className="title">{involvement}</h4>
                <p className="date"><i className="fa-regular fa-calendar"></i> {active_dates}</p>
                <p className="description">{description}</p>
            </div>
        </>
    );
}

export function Google() {
    return (
        <>
            <p className="company-logos google"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></p>
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

export function USArmy() {
    return (
        <>
            <p className="company-logos army">U.S. ARMY</p>
        </>
    );
}