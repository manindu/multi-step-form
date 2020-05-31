import styled from "styled-components";

const Button = styled.button`
  height: 40px;
  padding: 10px 20px;
  border: none;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  outline: none;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: ${(props) => props.theme.colors.primaryDark};
  }

  &[disabled="disabled"],
  &:disabled {
    background: ${(props) => props.theme.colors.controlBorder};
  }
`;

export default Button;
