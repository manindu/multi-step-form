import styled from "styled-components";
import { flexbox } from "styled-system";
import { Box } from "app/components";

const BottomButtonContainer = styled(Box)`
  width: 100%;
  padding: 20px;
  background: ${(props) => props.theme.colors.lightBackground};
  justify-content: space-between;
  ${flexbox}
`;

export default BottomButtonContainer;
