import React from "react";
import { Box, Heading } from "rebass";

export default class extends React.Component {
  render() {
    return (
      <Box width={[1, 3 / 4, 2 / 3, 1 / 2]} py={[64, 64, 64, 128]}>
        <Heading fontSize={["1.5rem", "2rem", "3rem", "4rem"]}>
          Seize the present; trust tomorrow as little as you may
        </Heading>
      </Box>
    );
  }
}
