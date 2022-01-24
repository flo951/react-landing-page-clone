import './App.css';
/** @jsxImportSource @emotion/react */
import DemoVideo from './images/clipdrop-demo400.mp4';
import DemoVideo2 from './images/demo-preview.mp4';
import { css, withTheme } from '@emotion/react';
import { ReactComponent as MyLogo } from './images/logo.svg';
import { ReactComponent as Verge } from './images/the-verge.svg';
import { ReactComponent as Colossal } from './images/colossal.png';
import { ReactComponent as Wired } from './images/wired.svg';

const mainDivStyles = css`
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
`;
const headerStyles = css`
  display: flex;
  position: fixed;
  top: 0;
  overflow: hidden;
  justify-content: space-between;
  width: 90vw;
  padding: 50px 10px;
  background-color: #1a1a1a;
`;
const navStyles = css`
  display: flex;
  list-style: none;
  gap: 30px;
  font-size: 18px;
`;
const wideCardStyles = css`
  margin-top: 9rem;
  margin-bottom: 3rem;
  width: 90vw;
  display: flex;
  justify-content: center;
  background-color: #303030;
  padding: 20px 100px;
  border-radius: 15px;
  gap: 15px;
  h2 {
    margin-top: 10px;
  }
`;
const cardStyles = css`
  margin: 2rem 1rem;
  width: 90vw;
  display: flex;
  justify-content: center;
  background-color: #303030;
  padding: 20px 100px;
  border-radius: 15px;
  gap: 15px;
  h2 {
    margin-top: 10px;
  }
`;
const buttonStyles = css`
  background-color: #9a66e2;
  padding: 20px 50px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  :hover {
    background-color: white;
    color: black;
    transition: all 0.7s ease-out;
  }
`;

const anchorStyles = css`
  text-decoration: none;
  list-style: none;
  :hover {
    color: #9a66e2;
    transition: all 0.3s ease-out;
  }
`;
const roundedVid = css`
  border-radius: 30px;
  overflow: hidden;
`;
const videoStyles = css`
  height: auto;
  width: auto;
  border-radius: 15px;
`;
const productStyles = css`
  display: flex;
  justify-content: space-between;
  width: 90vw;
`;
const headingStyles = css`
  width: 50%;
  margin: 10px;
`;
const upperHeadingStyles = css`
  line-height: 30px;
  margin: 10px;
`;
const lowerHeadingStyles = css`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  h4 {
    width: 48%;
  }
`;

function App() {
  return (
    <>
      <div css={mainDivStyles}>
        <header css={headerStyles}>
          <MyLogo />

          <nav>
            <ul css={navStyles}>
              <li>
                <a css={anchorStyles} href="./">
                  Features
                </a>
              </li>
              <li>
                <a css={anchorStyles} href="./">
                  Help
                </a>
              </li>
              <li>
                <a css={anchorStyles} href="./">
                  Contact
                </a>
              </li>
              <li>
                <a css={anchorStyles} href="./">
                  We're hiring!
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div css={mainDivStyles}>
        <section css={wideCardStyles}>
          <h2>✨ ClipDrop Web & API are now available in beta ✨</h2>
          <button css={buttonStyles}>Try it now</button>
        </section>
      </div>
      <div css={mainDivStyles}>
        <section css={productStyles}>
          <div css={headingStyles}>
            <div css={upperHeadingStyles}>
              <h2>
                Create professional product visuals without a photo studio
              </h2>
              <h3>Available on Android, iOS, macOS and Windows.</h3>
            </div>
            <button css={buttonStyles}>Download</button>
            <div css={lowerHeadingStyles}>
              <h4>Finally a practical use for AR</h4>

              <h4>A new horizon of potential</h4>
              <h4>The results are nothing short of astounding</h4>
              <h4>Circumvents the traditional method using a single app</h4>
            </div>
          </div>

          <video css={videoStyles} autoPlay loop src={DemoVideo}>
            <track kind="captions" />
          </video>
        </section>
      </div>
      <div css={mainDivStyles}>
        <section>
          <h3>Quick Demo</h3>
          <h3>Discover key features of ClipDrop in this short demo</h3>
          <video css={videoStyles} autoPlay loop src={DemoVideo2}>
            <track kind="captions" />
          </video>
        </section>
      </div>
      <div css={mainDivStyles}>
        <section css={cardStyles}>
          <h2>Try it for free</h2>
          <button css={buttonStyles}>Download</button>
        </section>
      </div>
    </>
  );
}

export default App;
