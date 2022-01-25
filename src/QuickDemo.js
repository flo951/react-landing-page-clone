/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DemoVideo2 from './images/demo-preview.mp4';

const mainDivStyles = css`
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
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
const videoStyles = css`
  height: auto;
  width: auto;
  border-radius: 15px;
`;

export default function QuickDemo() {
  return (
    <div css={mainDivStyles}>
      <section css={quickDemoStyles}>
        <h2>Quick Demo</h2>
        <h3>Discover key features of ClipDrop in this short demo</h3>
        <video css={videoStyles} autoPlay loop src={DemoVideo2}>
          <track kind="captions" />
        </video>
      </section>
    </div>
  );
}
