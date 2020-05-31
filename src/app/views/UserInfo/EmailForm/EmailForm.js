import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Input,
  InputGroup,
  InputLabel,
  InputError,
  Button,
  Box,
  Text,
} from "app/components";
import FieldContainer from "../FieldContainer";
import FormCard from "../FormCard";
import BottomButtonContainer from "../BottomButtonContainer";

const EmailForm = ({ email, setField, onPressNext, onPressPrevious }) => {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    handleBlur,
    isValid,
  } = useFormik({
    initialValues: {
      email: email,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email must be valid email address")
        .required("Your email is required"),
    }),
    onSubmit: (values) => {
      setField("email", values.email);
      onPressNext();
    },
  });

  const onPrevious = () => onPressPrevious();

  return (
    <FormCard>
      <Box
        paddingTop="20px"
        paddingX="60px"
        justifyContent="flex-start"
        width="100%"
      >
        <Text bold fontSize="18px" textTransform="uppercase">
          Step 2 of 3
        </Text>
      </Box>
      <FieldContainer>
        <InputGroup>
          <InputLabel text="What is your email?" />
          <Input
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputError text={errors.email} />
        </InputGroup>
      </FieldContainer>
      <BottomButtonContainer justifyContent="space-between">
        <Button onClick={onPrevious}>Previous</Button>
        <Button disabled={!isValid} onClick={handleSubmit}>
          Next
        </Button>
      </BottomButtonContainer>
    </FormCard>
  );
};

EmailForm.propTypes = {
  email: PropTypes.string.isRequired,
  setField: PropTypes.func.isRequired,
  onPressNext: PropTypes.func.isRequired,
  onPressPrevious: PropTypes.func.isRequired,
};

export default EmailForm;
