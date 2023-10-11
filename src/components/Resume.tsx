interface Props {
    icon?: string;
    content: string;
    link?: string;
    date?: string;
    title?: string;
}

export function Widget({ icon, content }: Props) {
    return (
        <>
            <p className="widget">
                <i className={"w3-margin-right " + icon}></i>{content}
            </p>
        </>
    );
}

export function WidgetLinked({ icon, content, link }: Props) {
    return (
        <>
            <a className="widget" href={link} target="_blank">
                <p>
                    <i className={"w3-margin-right " + icon}></i>{content}
                </p>
            </a>
        </>
    );
}

export function InvolvementItem({ title, content, date }: Props) {
    return (
        <>
            <div className="involvement-item">
                <h4 className="title">{title}</h4>
                <p className="date"><i className="fa-regular fa-calendar"></i> {date}</p>
                <p className="description">{content}</p>
            </div>
        </>
    );
}