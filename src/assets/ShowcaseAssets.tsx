import "../css/showcase.css"

interface Params {
    content: string;
}


export function Heading({content} : Params) {
    return (
        <>
            <h2 className="section-headings">{content}</h2>
        </>
    );
}