import React from "react";
import { Heading } from "rebass";
import styled from "styled-components";

const LabeledH = styled(Heading)`
  background-color: black;
  color: white;
  padding: 16px;
  margin-right: -16px;
  margin-left: -16px;
  border-radius: 4px;
`;

export default React.forwardRef((props, ref) => (
  <LabeledH ref={ref} {...props} />
));
