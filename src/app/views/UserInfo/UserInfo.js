import React from "react";
import PropTypes from "prop-types";
import { Box } from "app/components";
import NameForm from "./NameForm";
import EmailForm from "./EmailForm";
import ColorForm from "./ColorForm";
import Summary from "./Summary";

const formSteps = {
  name: 1,
  email: 2,
  color: 3,
  summary: 4,
};

const UserInfo = ({ user, setStep, setField }) => {
  const { step, name, email, color } = user;

  const onSubmit = () => {
    setStep(formSteps.summary);
  };

  const onPressNext = () => {
    setStep(step + 1);
  };

  const onPressPrevious = () => {
    setStep(step - 1);
  };

  const onSetField = (key, value) => {
    setField({ key, value });
  };

  const renderStep = () => {
    switch (step) {
      case formSteps.name:
        return (
          <NameForm
            name={name}
            onPressNext={onPressNext}
            setField={onSetField}
          />
        );
      case formSteps.email:
        return (
          <EmailForm
            email={email}
            onPressNext={onPressNext}
            onPressPrevious={onPressPrevious}
            setField={onSetField}
          />
        );
      case formSteps.color:
        return (
          <ColorForm
            color={color}
            onPressPrevious={onPressPrevious}
            onPressSubmit={onSubmit}
            setField={onSetField}
          />
        );
      case formSteps.summary:
        return <Summary name={name} email={email} color={color} />;
      default:
        return (
          <NameForm
            name={name}
            onPressNext={onPressNext}
            setField={onSetField}
          />
        );
    }
  };

  return (
    <Box width="100vw" height="100vh" justifyContent="center">
      {renderStep()}
    </Box>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({}).isRequired,
  setStep: PropTypes.func.isRequired,
  setField: PropTypes.func.isRequired,
};

export default UserInfo;
