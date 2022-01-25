import './App.css';
/** @jsxImportSource @emotion/react */

import DemoVideo2 from './images/demo-preview.mp4';
import { css, withTheme } from '@emotion/react';

import { ReactComponent as Verge } from './images/the-verge.svg';
import { ReactComponent as Colossal } from './images/colossal.png';
import { ReactComponent as Wired } from './images/wired.svg';
import Header from './Header';
import ProductInfo from './ProductInfo';

const mainDivStyles = css`
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
`;

const wideCardStyles = css`
  margin-top: 9rem;
  margin-bottom: 3rem;
  width: 80vw;
  display: flex;
  justify-content: center;
  background-color: #303030;
  padding: 30px 50px;
  border-radius: 15px;
  gap: 15px;
  h2 {
    margin-top: 10px;
  }
`;
const cardStyles = css`
  margin: 2rem 1rem;
  width: 80vw;
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
  font-size: 18px;
  font-weight: bold;
  background-color: #4f11ab;
  font-weight: bold;
  padding: 15px 30px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  :hover {
    background-color: white;
    color: black;
    transition: all 0.7s ease-out;
  }
`;
const buttonDownStyles = css`
  font-size: 18px;
  font-weight: bold;
  background-color: white;
  color: black;
  padding: 20px 50px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  :hover {
    background-color: #4f11ab;
    color: black;
    transition: all 0.7s ease-out;
  }
`;

const videoStyles = css`
  height: auto;
  width: auto;
  border-radius: 15px;
`;

const quickDemoStyles = css`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 38px;
  }
  h3 {
    margin: 20px 0px;
    color: grey;
  }
`;

function App() {
  return (
    <>
      <Header />
      <div css={mainDivStyles}>
        <section css={wideCardStyles}>
          <h2>✨ ClipDrop Web & API are now available in beta ✨</h2>
          <button css={buttonStyles}>Try it now</button>
        </section>
      </div>
      <ProductInfo />
      <div css={mainDivStyles}>
        <section css={quickDemoStyles}>
          <h2>Quick Demo</h2>
          <h3>Discover key features of ClipDrop in this short demo</h3>
          <video css={videoStyles} autoPlay loop src={DemoVideo2}>
            <track kind="captions" />
          </video>
        </section>
      </div>
      <div css={mainDivStyles}>
        <section css={cardStyles}>
          <h2>Try it for free</h2>
          <button css={buttonDownStyles}>Download</button>
        </section>
      </div>
    </>
  );
}

export default App;
