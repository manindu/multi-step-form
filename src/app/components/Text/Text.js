import styled from "styled-components";
import { color, space, typography } from "styled-system";

const Text = styled.span`
  ${space};
  ${typography};
  ${color};
  font-weight: ${(props) => {
    if (props.bold) return "bold";
    if (props.light) return "100";
    return "unset";
  }};
  text-transform: ${(props) => {
    if (props.uppercase) return "uppercase";
    return "initial";
  }};
`;

export default Text;
