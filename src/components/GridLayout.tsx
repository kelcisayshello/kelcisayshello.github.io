import Title from "../components/Title";
import '../css/gridlayout.css'

export default function GridLayout() {
    return (
        <>
            <div className="grid-background">
                <div id="box-title" className="blue ">
                    <Title />
                </div>
                <div className="orange ">

                </div>
                <div className="blue ">

                </div>
                <div className="green ">

                </div>

                <div className="flicker red"> </div>
                <div className="yellow "> </div>
                <div className="orange "> </div>
                <div className="blue "> </div>

                <div className="green "> </div>
                <div className="blue"> </div>
                <div className="yellow"> </div>
                <div className="red "> </div>
            </div>
        </>
    );
}