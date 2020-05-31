import userTypes from "./user.types";

const setField = (payload) => ({
  type: userTypes.SET_FIELD,
  payload,
});

const setStep = (payload) => ({
  type: userTypes.SET_STEP,
  payload,
});

export default {
  setField,
  setStep,
};
