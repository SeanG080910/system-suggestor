import React from 'react';
import styled from 'styled-components';

/** Heading Fonts for use within the application */
export const Heading1 = ({ children, ...props }) => (
  <h1 {...props}>{children}</h1>
);
export const Heading2 = ({ children, ...props }) => (
  <h2 {...props}>{children}</h2>
);
export const Heading3 = ({ children, ...props }) => (
  <h3 {...props}>{children}</h3>
);

/** Paragraph Font for use within the application */
export const Paragraph = props => <p {...props} />;

/** Fancy new thing! */
export const RedParagraph = styled(Paragraph)`
  color: red;
`;
