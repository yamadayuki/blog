import React from "react";
import { createGlobalStyle } from "styled-components";
import { Box } from "rebass";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');

  * {
    font-family: 'Noto Sans JP', sans-serif;
  }
`;

export default class extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <GlobalStyle />
        <Box px={5}>{children}</Box>
      </React.Fragment>
    );
  }
}
