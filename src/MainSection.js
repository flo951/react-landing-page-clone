/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DemoVideo3 from './images/desktop-demo.mp4';
import DemoVideo4 from './images/quality.mp4';
import Workflow from './images/workflow.png';

const mainDivStyles = css`
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
`;

const videoStyles = css`
  height: auto;
  width: 48%;
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
  margin: 10rem 10px;
  h2 {
    font-size: 42px;
  }
  h3 {
    color: gray;
  }
  span {
    color: red;
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
const imageStyles = css`
  height: 100%;
  width: 48%;
`;
// const arrowStyles = css`
//   width: 0;
//   height: 0;
//   border-top: 6px solid transparent;
//   border-bottom: 6px solid transparent;
//   border-left: 6px solid green;
// `;

// const arrow = function () {
//   return <div css={arrowStyles} />;
// };

export default function MainSection() {
  return (
    <>
      <div css={mainDivStyles}>
        <section css={productStyles}>
          <div css={headingStyles}>
            <div css={upperHeadingStyles}>
              <h2>Capture directly from your desktop</h2>
              <h3>Then just drag & drop to any other app.</h3>
            </div>
          </div>

          <video css={videoStyles} autoplay loop src={DemoVideo3}>
            <track kind="captions" />
          </video>
        </section>
      </div>
      <div css={mainDivStyles}>
        <section css={productStyles}>
          <video css={videoStyles} autoplay loop src={DemoVideo4}>
            <track kind="captions" />
          </video>
          <div css={headingStyles}>
            <div css={upperHeadingStyles}>
              <h2>Incredibly accurate background removal</h2>
              <h3>
                We use state of the art vision AI to provide the best analysis &
                cut-out technology, no matter what you’re capturing.
              </h3>
              <a css={anchorStyles} href="./">
                ▶︎ Download and try for free
              </a>
            </div>
          </div>
        </section>
      </div>
      <div css={mainDivStyles}>
        <section css={productStyles}>
          <div css={headingStyles}>
            <div css={upperHeadingStyles}>
              <h2>Integrates with your workflow</h2>
              <h3>
                Drag & drop images directly to any other app or website.
                <br />
                <span>New!</span> Import editable masks with the Plugin for
                Adobe Photoshop.
              </h3>
            </div>
          </div>
          <img css={imageStyles} alt="Workflow" src={Workflow} />
        </section>
      </div>
    </>
  );
}
