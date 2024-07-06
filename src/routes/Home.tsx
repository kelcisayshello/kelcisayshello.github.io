import 'animate.css';
import '../css/pages/home.css';
import JumpingName from "../components/JumpingName";
import img_blocks from "../assets/imgs/blocks.png"
import img_people from "../assets/imgs/people.png"
import { PageLoader } from "../components/ReusableComponents";
import { useState, useEffect } from 'react';
import { Block, ActionBlock } from "../components/GridBlocks";

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  let ampm = time.getHours() >= 12 ? 'pm' : 'am';
  let hours = (time.getHours() % 12) || 12;
  let minutes = (time.getMinutes() <= 9 ? '0' : '') + time.getMinutes();

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
        <div className="route-container home">
          <div className="grid-layout">
            <div id="box-title" className="centered-v-h">
              <JumpingName />
            </div>

            <ActionBlock
              href_link='/#/projects'
              plain_text='Projects'
              block_id='box-projects'
              css_class='box-image block-padding orange tilted-tiles'
              img_css='image-box bks'
              img_src={img_blocks}
            />

            <Block css_class="flicker blue" />

            <Block css_class='green centered-v-h' block_id='box-date'>
              <p className="date">{time.toLocaleString('default', { month: 'short' })} {time.getDate()}</p>
              <p className="time">{hours}:{minutes} {ampm.toUpperCase()} <br /> {time.toString().match(/\(([A-Za-z\s].*)\)/)![1]}</p>
            </Block>

            <Block css_class="red" />

            <ActionBlock
              href_link='/#/resume'
              plain_text='Take a look at my resume &nbsp;'
              block_id='box-resume'
              css_class='centered-v-h tilted-tiles'
              icons='fa-solid fa-arrow-right'
            />

            <Block css_class="orange" />

            <ActionBlock
              href_link='/#/contact'
              plain_text='Contact me'
              block_id='box-contactme'
              css_class='box-image block-padding blue tilted-tiles'
              img_css='image-box ppl'
              img_src={img_people}
            />

            <Block css_class="flicker green" delay="7s" />

            <Block css_class="blue" />
            <Block css_class="yellow" />
            <Block css_class="flicker red" delay="4s" />
          </div>
        </div>
      )}
    </>
  )
};