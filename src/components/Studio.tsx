// steel blue, sinopia, burnt sienna, hyunyadi yellow, cinnabar, hooker's green, lapis lazuli, eerie black
const colors = ['#4F7CAC', "#C73E1D", '#E07B4A', '#F4C672', "#E15F40", "#3A7359", "#345D98", "#1F1F1F"];

// Fisher-Yates Shuffle Algorithm: All colors have an equal chance of being picked regardless of their position in the original array.
function fisherYatesShuffle(colors: string[]) {
    for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
    }
}

function getBorderColor() {
    fisherYatesShuffle(colors);
    return colors[0];
}

interface GridBoxProps {
    children?: React.ReactNode;
    link?: string;
    title?: string;
    description?: string;
}

export function GridBox({ children, link, title, description }: GridBoxProps) {
    const randomColor = getBorderColor();
    let fontColor = "#FBFAF5";
    const gridStyle = {
        backgroundColor: randomColor,
    };

    if (randomColor == "#F4C672") {
        fontColor = "#1F1F1F";
    }

    const textStyle = {
        color: fontColor
    }

    return (
        <a target="_blank" className="gridbox" style={gridStyle} href={link}>
            <div>
                <h1 style={textStyle}>{title}</h1>
                <p>{description}</p>
                {children}
            </div>
        </a>

    );
}

export function GridBoxBorder({ children, link, title, description }: GridBoxProps) {
    const randomColor = getBorderColor();

    const boxStyle = {
        color: "#1F1F1F",
        borderColor: randomColor, // Change color on hover
    }

    return (
        <div className="gridbox" style={boxStyle}>
            <a target="_blank" href={link}>
                <h1>{title}</h1>
                <p>{description}</p>
            </a>
            {children}
        </div>
    );
}