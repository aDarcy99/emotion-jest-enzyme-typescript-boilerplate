import { css, Global } from '@emotion/core';
import tw from 'twin.macro';

const fontFamily = 'system-ui, -apple-system';

export const globalStyles = (
  <Global
    styles={{
      html: { fontFamily,},
      body: { fontFamily,},      
    }}
  />
);

export const basicStyles = css`
  background-color: white;
`;

export const View = tw.div`grid grid-flow-row`;