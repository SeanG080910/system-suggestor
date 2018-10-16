import React from "react";
import styled from "styled-components";

/** Heading Fonts for use within the application */
export const Heading1 = props => <h1 {...props} />;
export const Heading2 = props => <h1 {...props} />;
export const Heading3 = props => <h1 {...props} />;

/** Paragraph Font for use within the application */
export const Paragraph = props => <p {...props} />;

/** Fancy new thing! */
export const RedParagraph = styled(Paragraph)`
  color: red;
`;
