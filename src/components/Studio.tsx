import Tilt from 'react-parallax-tilt';
import { useState } from 'react';

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
    const [clr, setColor] = useState('#FBFAF5'); // default should be "snow white"
    const randomColor = getBorderColor();

    const handleHover = () => {
        setColor(randomColor);
    };
    const gridStyles = {
        borderColor: randomColor,
        borderWidth: "2px",
        backgroundColor: clr,
        transition: 'background-color 0.3s ease-in-out',
    };

    return (
        <Tilt className="gridbox" style={gridStyles} >
            <a target="_blank" href={link}>
                <div className="div-gridbox" onMouseOver={handleHover} onMouseLeave={() => setColor("#FBFAF5")}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    {children}
                </div>
            </a>
        </Tilt>

    );
}