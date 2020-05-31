import React from "react";
import PropTypes from "prop-types";
import { Text, Box } from "app/components";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Input,
  InputGroup,
  InputLabel,
  InputError,
  Button,
} from "app/components";
import FieldContainer from "../FieldContainer";
import FormCard from "../FormCard";
import BottomButtonContainer from "../BottomButtonContainer";

const NameForm = ({ name, setField, onPressNext }) => {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    handleBlur,
    isValid,
  } = useFormik({
    initialValues: {
      name: name,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().test(
        "test-name",
        "Name must contain at least your first name and last name",
        (value) => {
          if (value) {
            const parts = value.split(" ");

            if (parts.length < 2) return false;
            return true;
          }
          return false;
        }
      ),
    }),
    onSubmit: (values) => {
      setField("name", values.name);
      onPressNext();
    },
  });

  return (
    <FormCard>
      <Box
        paddingTop="20px"
        paddingX="60px"
        justifyContent="flex-start"
        width="100%"
      >
        <Text bold fontSize="18px" textTransform="uppercase">
          Step 1 of 3
        </Text>
      </Box>
      <FieldContainer>
        <InputGroup>
          <InputLabel text="What is your name?" />
          <Input
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputError text={errors.name} />
        </InputGroup>
      </FieldContainer>
      <BottomButtonContainer justifyContent="flex-end">
        <Button disabled={!isValid} onClick={handleSubmit}>
          Next
        </Button>
      </BottomButtonContainer>
    </FormCard>
  );
};

NameForm.propTypes = {
  name: PropTypes.string.isRequired,
  setField: PropTypes.func.isRequired,
  onPressNext: PropTypes.func.isRequired,
};

export default NameForm;
