import '../css/pages/contact.css'
import img_home from "../assets/imgs/home.png"
import img_document from "../assets/imgs/document.png"
import Method from "../components/MethodOfContact";
import { PageLoader } from "../components/ReusableComponents";
import { ActionBlock } from "../components/GridBlocks";
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
                            plain_text='Go home'
                            block_id='box-home'
                            css_class='padding'
                            img_css='contact-image'
                            img_src={img_home}
                        />

                        <ActionBlock
                            href_link='/#/resume'
                            plain_text='View my resume'
                            block_id='box-resumebox'
                            css_class='padding'
                            img_css='contact-image'
                            img_src={img_document}
                        />

                        <div id="box-text" className="padding">
                            <p>Let's stay connected! <br /> Send me an email or get in touch on LinkedIn and Twitter :)</p>
                        </div>

                        <div id="box-email" className="padding">
                            <Method method="e-mail" plain_text="kelcimensah@gmail.com" />
                        </div>

                        <div className="padding" id="box-social">
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
