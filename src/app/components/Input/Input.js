import { space } from "styled-system";
import styled from "styled-components";

export const StyledInput = styled.input`
  ${space};
  height: 40px;
  width: 100%;
  border-style: solid;
  border-radius: 5px;
  padding-left: 10px;
  box-shadow: none;
  outline: none;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primaryText};

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export default StyledInput;
