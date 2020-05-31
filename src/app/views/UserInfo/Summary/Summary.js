import React from "react";
import PropTypes from "prop-types";
import { InputLabel, Box, Text } from "app/components";
import FormCard from "../FormCard";

const Summary = ({ name, email, color }) => {
  return (
    <FormCard>
      <Box
        paddingTop="20px"
        paddingX="60px"
        justifyContent="flex-start"
        width="100%"
        mb="20px"
      >
        <Text bold fontSize="18px" textTransform="uppercase">
          Your Answers
        </Text>
      </Box>
      <Box flexDirection="column" alignItems="start" padding="20px">
        <InputLabel text="What is your name?" />
        <Text bold mb="20px">
          {name}
        </Text>
        <InputLabel text="What is your email?" />
        <Text bold mb="20px">
          {email}
        </Text>
        <InputLabel text="What is your favorite color?" />
        <Text bold mb="20px">
          {color}
        </Text>
      </Box>
    </FormCard>
  );
};

Summary.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Summary;
