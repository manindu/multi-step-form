import React from "react";
import PropTypes from "prop-types";
import { Box, Text } from "..";

const RadioButton = ({ selected, label, item, onPress }) => {
  return (
    <Box mb="5px" onClick={() => onPress(item)}>
      <Box
        width="20px"
        height="20px"
        borderRadius="10px"
        bg={selected ? "primary" : "white"}
        borderWidth="1px"
        borderStyle="solid"
        borderColor={selected ? "primary" : "controlBorder"}
        mr="10px"
      />
      <Text>{label}</Text>
    </Box>
  );
};

RadioButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
};

export default RadioButton;
