/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DemoVideo from './images/clipdrop-demo400.mp4';
const mainDivStyles = css`
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
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
const productStyles = css`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  width: 80vw;
`;
const headingStyles = css`
  width: 50%;
  margin: 10px;
`;
const upperHeadingStyles = css`
  line-height: 40px;
  margin: 10px;
  h2 {
    font-size: 42px;
  }
  h3 {
    color: grey;
    margin: 10px 0px;
  }
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

const videoStyles = css`
  height: auto;
  width: auto;
  border-radius: 15px;
`;

export default function ProductInfo() {
  return (
    <div css={mainDivStyles}>
      <section css={productStyles}>
        <div css={headingStyles}>
          <div css={upperHeadingStyles}>
            <h2>Create professional product visuals without a photo studio</h2>
            <h3>Available on Android, iOS, macOS and Windows.</h3>
          </div>
          <button css={buttonDownStyles}>Download</button>
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
  );
}
