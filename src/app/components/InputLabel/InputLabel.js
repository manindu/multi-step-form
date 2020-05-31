import React from "react";
import styled from "styled-components";
import { Text } from "..";

const RequiredStar = styled.span`
  margin-left: 5px;
`;

const Container = styled.div`
  margin-bottom: 5px;
`;

const InputLabel = ({ text, required }) => (
  <Container>
    <Text bold fontSize="20px" color="primary">
      {text}
      {required && <RequiredStar>*</RequiredStar>}
    </Text>
  </Container>
);

InputLabel.defaultProps = {
  required: false,
};

export default InputLabel;
