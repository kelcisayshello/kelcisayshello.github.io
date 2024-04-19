import Tilt from 'react-parallax-tilt';

// steel blue, sinopia, burnt sienna, hyunyadi yellow, cinnabar, hooker's green, lapis lazuli
const colors = ['#4F7CAC', "#C73E1D", '#E07B4A', '#F4C672', "#E15F40", "#3A7359", "#345D98"];

// Fisher-Yates Shuffle Algorithm: All colors have an equal chance of being picked regardless of their position in the original array.
function fisherYatesShuffle(colors) {
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
    const gridStyles = {
        borderColor: randomColor,
        borderWidth: "2px",
    };

    return (

        <Tilt className="gridbox" style={gridStyles}>
            <a target="_blank" href={link}>
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    {children}
                </div>
            </a>
        </Tilt>

    );
}