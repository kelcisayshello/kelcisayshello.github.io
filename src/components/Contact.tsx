interface Props {
    method: string;
    content: string;
    link?: string;
}

export function POC({method, content, link}: Props) {
    return (
        <>
            <div className="poc">
                <h3>{method}</h3>
                <a href={link} target="_blank"><p>{content}</p></a>
            </div>
        </>
    );
}

export function POCNoLink({method, content}: Props) {
    return (
        <>
            <div className="poc">
                <h3>{method}</h3>
                <p>{content}</p>
            </div>
        </>
    );
}