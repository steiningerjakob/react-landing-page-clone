// ToDo's
// 2. Fix width
// 3. Make videos run
// 4. Make toggle button

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactPlayer from 'react-player';
import chloe from './images/chloelebonnois.jpg';
import colossal from './images/colossal.png';
import laurent from './images/laurenteymard.jpg';
import logo from './images/logo.svg';
import petapixel from './images/petapixel.png';
import play from './images/play.svg';
import santiago from './images/santiagobocanegra.jpg';
import theVerge from './images/the-verge.svg';
import wired from './images/wired.svg';
import workflow from './images/workflow.png';
import video2 from './videos/video2.mp4';
import video3 from './videos/video3.mp4';
import video4 from './videos/video4.mp4';

const headerStyles = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 16px 32px 24px;
  margin-bottom: 70px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 7%);

  > div {
    display: flex;
    align-items: center;
    margin-left: 620px;
    margin-top: 10px;
  }
`;

const logoStyles = css`
  position: absolute;
  left: 55px;
  width: 200px;
  height: 60px;
`;

const headerRightNavStyles = css`
  display: flex;
  margin-left: auto;
  align-items: center;
  font-weight: 600;

  > div {
    margin-right: 30px;
  }
`;

const downloadButtonStyles = (variant = 'small') => css`
  margin-right: 50px;
  background-color: #59b0ae;
  border-radius: 20px;
  color: white;
  padding: 11px 24px;
  font-weight: 650;
  text-align: center;

  ${variant === 'large' &&
  css`
    padding: 20px 60px;
    max-width: 200px;
    border-radius: 35px;
  `}

  ${variant === 'tiny' &&
  css`
    padding: 8px 3px;
    margin-right: 0;
    border-radius: 25px;
  `}
  ${variant === 'super-tiny' &&
  css`
    padding: 4px 12px;
    border-radius: 50%;
    background-color: white;
  `}
`;

const mainStyles = css`
  margin: 60px 50px 128px 50px;
`;

const containerStyles = css`
  padding: 20px;
  display: flex;
`;

const heroStyles = css`
  display: block;
  max-width: 600px;
  margin-right: 90px;
`;

const h1Styles = css`
  font-size: 3.6em;
  font-weight: 650;
`;

const h2Styles = css`
  font-size: 2.5em;
  margin-bottom: 0;
`;

const h3Styles = css`
  font-size: 1.5em;
  opacity: 0.5;
  font-weight: 600;
  margin-bottom: 60px;
`;

const pressStyles = css`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 48px;
  margin-bottom: 90px;

  > div {
    display: block;
    min-width: 250px;
    max-width: 260px;
    font-weight: 600;
  }
`;

const pressImageStyles = css`
  margin: 5px 5px 10px 5px;
  width: 70px;
  height: 25px;
  filter: grayscale(1);
  opacity: 0.5;
`;

const video1Container = css`
  position: relative;
  margin: 60px 30px 0 0;
`;

const reactPlayer = css`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50px;
  overflow: hidden;
`;

const quickDemoH3Styles = css`
  font-size: 1.5em;
  opacity: 0.5;
  font-weight: 500;
`;

const video2Container = css`
  width: 100%;
  text-align: center;
  position: relative;
  margin-bottom: 120px;
  cursor: pointer;
`;

const video2Styles = css`
  height: 409px;
  width: 722px;
  border-radius: 25px;
  object-fit: contain;
  /* :hover {
    transform: translate(-50%, -50%) scale(1.1, 1.1);
  } */
`;

const playButtonStyles = css`
  z-index: 500;
  position: absolute;
  left: 43%;
  top: 32%;
`;

const featureStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 50px;

  > h2 {
    margin: 20px 0;
  }
`;

const video3Styles = css`
  height: 400px;
  border-radius: 25px;
`;

const spanStyles = css`
  color: #ff0000;
`;
const linkStyles = css`
  color: black;
  text-decoration: none;
  font-weight: 600;
`;

const workflowStyles = css`
  height: 400px;
  border-radius: 25px;
  margin-left: 70px;
`;

const video4Styles = css`
  height: 400;
  width: 500;
  border-radius: 25px;
  margin-right: 80px;
  margin-top: 50px;
`;

const referencesHeading = css`
  width: 100%;
  text-align: center;
`;

const referencesStyles = css`
  list-style-type: none;
  display: flex;
  margin-left: 0;
  padding-left: 0;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;

  h3 {
    opacity: 0.5;
    font-size: 1.5em;
    line-height: 1.5em;
    font-weight: 500;
  }

  p {
    color: #59b0ae;
    font-weight: 600;
  }

  li {
    margin: 20px;
    display: list-item;

    > div {
      display: flex;
      align-items: center;
    }
  }

  blockquote {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
    opacity: 0.5;
    border-left: 10px solid #59b0ae;
    text-align: left;
    padding: 10px;
    margin: 30px 10px;
    font-weight: 500;
    font-size: 1.3em;
  }

  blockquote:before {
    color: #59b0ae;
    content: '"';
    font-size: 4em;
    line-height: 0.1em;
    vertical-align: -0.4em;
    margin-right: 0.25em;
  }
`;

const profilePicStyles = css`
  margin: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const pricingStyles = css`
  background-color: #f2f2f2;
  border-radius: 25px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px 16px 10px;

  > h2 {
    font-size: 3.4em;
    font-weight: 700;
  }

  > h3 {
    opacity: 0.5;
    font-size: 1.6em;
    font-weight: 500;
  }

  > p {
    opacity: 0.5;
    font-size: 0.9em;
    font-weight: 500;
  }
`;

const bannerStyles = css`
  background-color: #333333;
  margin-top: 80px;
  width: 1100px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 32px;

  > h3 {
    color: white;
    margin-right: 40px;
    line-height: 1.5em;
    margin-bottom: 0;
    margin-top: 0;
    font-weight: 600;
  }
`;

const footerStyles = css`
  padding: 48px 48px 16px;
  width: 1150px;
  display: block;
  font-size: 0.8em;

  > p {
    margin-top: 60px;
    text-align: center;
    opacity: 0.6;
    font-size: 12px;
    font-weight: 600;
  }
`;

const footerBoxStyles = css`
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: center;
`;

const footerColumnStyles = css`
  margin: 48px;

  > h4 {
    color: #b3b3b3;
  }
`;

const footerLinkStyles = css`
  text-decoration: none;
  font-weight: 700;
  color: #666;
  display: block;
  margin: 14px 0;
`;

function App() {
  return (
    <>
      <header css={headerStyles}>
        <div>
          <img src={logo} alt="Clipdrop logo" css={logoStyles} />
          <div css={headerRightNavStyles}>
            <div />
            <div>Features</div>
            <div>Pricing</div>
            <div>Help</div>
            <div>Contact</div>
            <div css={downloadButtonStyles()}>Download</div>
          </div>
        </div>
      </header>
      <main css={mainStyles}>
        <section css={containerStyles}>
          <div css={heroStyles}>
            <h1 css={h1Styles}>
              Create professional product visuals without a photo studio
            </h1>
            <h3 css={h3Styles}>
              Available on Android, iOS, macOS and Windows.
            </h3>
            <span css={downloadButtonStyles('large')}>Download</span>
            <div css={pressStyles}>
              <div>
                <p>"Finally a practical use for AR"</p>
                <img
                  src={theVerge}
                  alt="press reference"
                  css={pressImageStyles}
                />
              </div>
              <div>
                <p>"A new horizon of potential"</p>
                <img src={wired} alt="press reference" css={pressImageStyles} />
              </div>
              <div>
                <p>"The results are nothing short of astounding"</p>
                <img
                  src={petapixel}
                  alt="press reference"
                  css={pressImageStyles}
                />
              </div>
              <div>
                <p>"Circumvents the traditional method using a single app"</p>
                <img
                  src={colossal}
                  alt="press reference"
                  css={pressImageStyles}
                />
              </div>
            </div>
          </div>
          <div css={video1Container}>
            <ReactPlayer
              url="https://clipdrop.co/public/imgs/clipdrop-demo400.mp4"
              muted={true}
              playing={true}
              loop={true}
              height="560px"
              width="450px"
              css={reactPlayer}
            />
          </div>
        </section>
        <section>
          <div css={referencesHeading}>
            <h2 css={h2Styles}>Quick demo</h2>
            <h3 css={quickDemoH3Styles}>
              Discover key features of ClipDrop in this short demo
            </h3>
          </div>
          <div css={video2Container}>
            <video
              src={video2}
              muted={true}
              autoplay={true}
              loop={true}
              controls
              css={video2Styles}
            >
              <track
                src="captions_en.vtt"
                kind="captions"
                srclang="en"
                label="english_captions"
              />
            </video>
            <img alt="play button" src={play} css={playButtonStyles} />
          </div>
        </section>
        <section css={containerStyles}>
          <div css={featureStyles}>
            <h2 css={h2Styles}>Capture directly from your desktop</h2>
            <h3 css={quickDemoH3Styles}>
              Then just drag & drop to any other app.
            </h3>
          </div>
          <div>
            <video
              src={video3}
              muted={true}
              autoplay={true}
              loop={true}
              controls
              css={video3Styles}
            >
              <track
                src="captions_en.vtt"
                kind="captions"
                srclang="en"
                label="english_captions"
              />
            </video>
          </div>
        </section>
        <section css={containerStyles}>
          <div>
            <video
              src={video4}
              muted={true}
              autoplay={true}
              loop={true}
              controls
              css={video4Styles}
            >
              <track
                src="captions_en.vtt"
                kind="captions"
                srclang="en"
                label="english_captions"
              />
            </video>
          </div>
          <div css={featureStyles}>
            <h2 css={h2Styles}>Incredibly accurate background removal</h2>
            <h3 css={quickDemoH3Styles}>
              We use state of the art vision AI to provide the best analysis &
              cut-out technology, no matter what you’re capturing.
            </h3>
            <a href="#1" css={linkStyles}>
              ▸ Download and try for free
            </a>
          </div>
        </section>
        <section css={containerStyles}>
          <div css={featureStyles}>
            <h2 css={h2Styles}>Integrates with your workflow</h2>
            <h3 css={quickDemoH3Styles}>
              Drag & drop images directly to any other app or website.
            </h3>
            <h3 css={quickDemoH3Styles}>
              <span css={spanStyles}>New!</span> Import editable masks with the{' '}
              <a href="#1" css={linkStyles}>
                Plugin for Adobe Photoshop.
              </a>
            </h3>
          </div>
          <div>
            <img src={workflow} alt="workflow" css={workflowStyles} />
          </div>
        </section>
        <section>
          <div css={referencesHeading}>
            <h2 css={h2Styles}>They love ClipDrop</h2>
          </div>
          <ul css={referencesStyles}>
            <li>
              <div>
                <div>
                  <img src={laurent} alt="laurent" css={profilePicStyles} />
                </div>
                <div>
                  <h3>Laurent Eymard</h3>
                  <p>CEO and co-founder at red-dolphin.ch</p>
                </div>
              </div>
              <blockquote>
                Thanks to ClipDrop, I don't have to setup my mini light box each
                time I need a good picture of a new product on my website. I can
                take a picture of the object on any background, and get a
                perfect result immediately.
              </blockquote>
            </li>
            <li>
              <div>
                <div>
                  <img src={santiago} alt="santiago" css={profilePicStyles} />
                </div>
                <div>
                  <h3>Santiago Bocanegra</h3>
                  <p>Marketing Director at SEM Team</p>
                </div>
              </div>
              <blockquote>
                ClipDrops allows me to shoot products directly in the store of
                my customers. I can check how it will look online immediately
                and reshoot until the result is perfect. And when I'm back in my
                office all the product are already on my desktop.
              </blockquote>
            </li>
            <li>
              <div>
                <div>
                  <img src={chloe} alt="chloe" css={profilePicStyles} />
                </div>
                <div>
                  <h3>Chloe Le Bonnois</h3>
                  <p>Director at L'Appartement by Nana Ki</p>
                </div>
              </div>
              <blockquote>
                I love ClipDrop, it is just amazing. I am actually using it for
                my e-shop, so much easier and faster to get flat pic with no
                background; I have even advised it to webmaster friends, I think
                it can be so useful to them; and the membership yearly is not
                expensive for what it is.
              </blockquote>
            </li>
          </ul>
        </section>
        <section css={containerStyles}>
          <div css={featureStyles}>
            <h2 css={h2Styles}>A simple pricing</h2>
            <h3 css={quickDemoH3Styles}>
              Get access to unlimited clips, and full access to all features on
              all platforms with a single subscription.
            </h3>
          </div>
          <div css={pricingStyles}>
            <h3>Billed annually</h3>
            <span css={downloadButtonStyles('tiny')}>
              <span css={downloadButtonStyles('super-tiny')}> </span>
            </span>
            <h2>$4.16 / month *</h2>
            <h3>$49.90 / year (save $69.98!)</h3>
            <p>
              * Discount available if purchased until April 30. Prices on App
              Store and Google Store may vary depending on location.
            </p>
          </div>
        </section>
        <section css={bannerStyles}>
          <h3 css={h3Styles}>Try it for free</h3>
          <span css={downloadButtonStyles('large')}>Download</span>
        </section>
      </main>
      <footer css={footerStyles}>
        <div css={footerBoxStyles}>
          <div css={footerColumnStyles}>
            <h4>ClipDrop (AR Copy Paste)</h4>{' '}
            <a css={footerLinkStyles} href="#1">
              Features
            </a>{' '}
            <a css={footerLinkStyles} href="#1">
              Pricing
            </a>{' '}
            <a css={footerLinkStyles} href="#1">
              Affiliate Program
            </a>
            <a css={footerLinkStyles} href="#1">
              Press Kit
            </a>{' '}
          </div>
          <div css={footerColumnStyles}>
            <h4>Support</h4>{' '}
            <a css={footerLinkStyles} href="#1">
              Help
            </a>{' '}
            <a css={footerLinkStyles} href="#1">
              Contact Us
            </a>
          </div>
          <div css={footerColumnStyles}>
            <h4>Legal</h4>{' '}
            <a css={footerLinkStyles} href="#1">
              Privacy Policy
            </a>{' '}
            <a css={footerLinkStyles} href="#1">
              Terms of Use
            </a>
          </div>
          <div css={footerColumnStyles}>
            <h4>Social</h4>{' '}
            <a css={footerLinkStyles} href="#1">
              Twitter
            </a>{' '}
            <a css={footerLinkStyles} href="#1">
              Product Hunt
            </a>{' '}
            <a css={footerLinkStyles} href="#1">
              Instagram
            </a>{' '}
            <a css={footerLinkStyles} href="#1">
              Github
            </a>
          </div>
        </div>
        <p>Copyright 2020 © Init ML</p>
      </footer>
    </>
  );
}

export default App;
