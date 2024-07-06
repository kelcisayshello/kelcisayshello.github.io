import Tilt from 'react-parallax-tilt';

interface BlockArgs {
    css_class?: string;
    href_link?: string;
    plain_text?: string;
    block_id?: string;
    icons?: string;
    img_css?: string;
    img_src?: string;
    children?: React.ReactNode;
}

export function Block({ block_id, css_class, children }: BlockArgs) {
    return (
        <div id={block_id} className={css_class}>
            {children}
        </div>
    );
};

export function ActionBlock({ css_class, href_link, block_id, plain_text, icons, img_css, img_src }: BlockArgs) {
    return (
        <Tilt tiltReverse={true}>
            <a className="tilt-box" href={href_link}>
                <div id={block_id} className={css_class}>
                    <p>{plain_text}<i className={icons} /></p>
                    <img className={img_css} src={img_src} />
                </div>
            </a>
        </Tilt>
    );
};