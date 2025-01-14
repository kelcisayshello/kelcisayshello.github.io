import '../css/pages/contact.css'
import img_home from "../assets/imgs/home.png"
import img_document from "../assets/imgs/document.png"
import Method from "../components/MethodOfContact";
import { PageLoader } from "../components/ReusableComponents";
import { Block, ActionBlock } from "../components/GridBlocks";
import { useState, useEffect } from 'react';

export default function Contact() {
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

                <div className="route-container contact">
                    <div className="contact-container">

                        <ActionBlock
                            href_link='/'
                            plain_text='Go home.'
                            block_id='block-home'
                            css_class='block-padding blue tilt-content-container'
                        />

                        <ActionBlock
                            href_link='/#/resume'
                            plain_text='Take a look at my resume &nbsp;'
                            block_id='block-resume'
                            css_class='centered-v-h tilt-content-container'
                            icons='fa-solid fa-arrow-right'
                        />

                        <Block css_class='centered-v-h' block_id='block-stay-connected'>
                            <p>Let's stay connected! <br /> Send me an email or get in touch on LinkedIn and Twitter :)</p>
                        </Block>

                        <div id="block-email" className="padding centered-v-h">
                            <Method method="e-mail" plain_text="kelcimensah@gmail.com" />
                        </div>

                        <div className="padding" id="block-social">
                            <Method method="Twitter" plain_text="@kelcisayshello" href_link='https://www.twitter.com/kelcisayshello' />
                            <Method method="LinkedIn" plain_text="in/kelcimensah" href_link='https://www.linkedin.com/in/kelcimensah' />
                            <Method method="GitHub" plain_text="@kelcisayshello" href_link='https://www.github.com/kelcisayshello' />
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};
