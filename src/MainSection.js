/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DemoVideo3 from './images/desktop-demo.mp4';

const mainDivStyles = css`
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
`;

const videoStyles = css`
  height: auto;
  width: auto;
  border-radius: 15px;
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
`;

export default function MainSection() {
  return (
    <div css={mainDivStyles}>
      <section css={productStyles}>
        <div css={headingStyles}>
          <div css={upperHeadingStyles}>
            <h2>Capture directly from your desktop</h2>
            <h3>Then just drag & drop to any other app.</h3>
          </div>
        </div>

        <video css={videoStyles} autoPlay loop src={DemoVideo3}>
          <track kind="captions" />
        </video>
      </section>
    </div>
  );
}
