import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as Verge } from './images/the-verge.svg';
import { ReactComponent as Colossal } from './images/colossal.png';
import { ReactComponent as Wired } from './images/wired.svg';
import Header from './Header';
import ProductInfo from './ProductInfo';
import QuickDemo from './QuickDemo';
import MainSection from './MainSection';

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
      <QuickDemo />
      <div css={mainDivStyles}>
        <section css={cardStyles}>
          <h2>Try it for free</h2>
          <button css={buttonDownStyles}>Download</button>
        </section>
      </div>
      <MainSection />
    </>
  );
}

export default App;
