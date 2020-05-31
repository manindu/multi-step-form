import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const InputGroup = ({ children }) => <Container>{children}</Container>;

export default InputGroup;
