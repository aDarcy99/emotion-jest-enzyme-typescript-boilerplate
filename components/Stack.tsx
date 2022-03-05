/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

export type StackProps = { };

export interface CompoundedComponent
  extends React.ForwardRefExoticComponent<React.PropsWithChildren<StackProps> & React.RefAttributes<HTMLDivElement>> {
  yourStaticFunctionOrSomethingLikeThat: () => void;
}

const pCSS = () => css`
  border-radius: 6px;
`;

// eslint-disable-next-line no-shadow
const Stack = React.forwardRef(({ css, children, ...props }, ref) => (
  <div ref={ref} role="button" css={[pCSS(), css]} {...props}>
    <React.Fragment>{children}</React.Fragment>
  </div>
)) as CompoundedComponent;

export default Stack;