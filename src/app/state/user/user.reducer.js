import userTypes from "./user.types";
import { COLORS } from "app/utils/constants";

const initialState = {
  step: 1,
  name: "",
  email: "",
  color: COLORS[0],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.SET_FIELD:
      return {
        ...state,
        [payload.key]: payload.value,
      };
    case userTypes.SET_STEP:
      return {
        ...state,
        step: payload,
      };
    default:
      return state;
  }
};
