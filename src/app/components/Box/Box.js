import {
  compose,
  layout,
  flexbox,
  space,
  grid,
  color,
  border,
  position,
  background,
} from "styled-system";
import styled from "styled-components";

const Box = styled.div(
  compose(grid, layout, flexbox, space, color, border, position, background)
);

Box.defaultProps = {
  display: "flex",
  alignItems: "center",
};

export default Box;
