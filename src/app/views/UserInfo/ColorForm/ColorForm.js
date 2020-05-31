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
  RadioButton,
  Box,
  Text,
} from "app/components";
import { COLORS } from "app/utils/constants";
import FieldContainer from "../FieldContainer";
import FormCard from "../FormCard";
import BottomButtonContainer from "../BottomButtonContainer";

const ColorForm = ({ color, setField, onPressSubmit, onPressPrevious }) => {
  const other = COLORS[COLORS.length - 1];

  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    handleBlur,
    isValid,
    setFieldValue,
  } = useFormik({
    initialValues: {
      color: color,
      otherColor: "",
    },
    validationSchema: Yup.object().shape({
      color: Yup.string().required("Color is required"),
      otherColor: Yup.string().when("color", {
        is: other,
        then: Yup.string().required("Color is required"),
      }),
    }),
    onSubmit: (values) => {
      if (values.otherColor) {
        setField("color", values.otherColor);
      } else {
        setField("color", values.color);
      }
      onPressSubmit();
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
          Step 3 of 3
        </Text>
      </Box>
      <FieldContainer>
        <InputGroup>
          <InputLabel text="What is your favorite color?" />
          {COLORS.map((option) => (
            <RadioButton
              key={option}
              label={option}
              item={option}
              selected={option === values.color}
              onPress={(item) => {
                setFieldValue("color", item);
              }}
            />
          ))}
          {values.color === other && (
            <Box mt="10px">
              <InputGroup>
                <Input
                  name="otherColor"
                  value={values.otherColor}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <InputError text={errors.otherColor} />
              </InputGroup>
            </Box>
          )}
        </InputGroup>
      </FieldContainer>
      <BottomButtonContainer justifyContent="space-between">
        <Button onClick={onPrevious}>Previous</Button>
        <Button disabled={!isValid} onClick={handleSubmit}>
          Submit
        </Button>
      </BottomButtonContainer>
    </FormCard>
  );
};

ColorForm.propTypes = {
  color: PropTypes.string.isRequired,
  setField: PropTypes.func.isRequired,
  onPressSubmit: PropTypes.func.isRequired,
  onPressPrevious: PropTypes.func.isRequired,
};

export default ColorForm;
