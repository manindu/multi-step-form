import { connect } from "react-redux";
import { userActions } from "app/state/user";
import UserInfo from "./UserInfo";

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, {
  setStep: userActions.setStep,
  setField: userActions.setField,
})(UserInfo);
