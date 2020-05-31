import React from "react";
import { Text } from "..";

const InputError = ({ text }) => {
  return text ? (
    <Text color="negative" fontSize="12px">
      {text}
    </Text>
  ) : null;
};

export default InputError;
