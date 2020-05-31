import styled from "styled-components";
import { Box } from "app/components";

const FormCard = styled(Box)`
  box-shadow: 1px 2px 20px rgba(19, 15, 235, 0.1);
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    width: 95%;
  }

  @media only screen and (min-width: 600px) {
    width: 95%;
  }

  @media only screen and (min-width: 768px) {
    width: 60%;
  }

  @media only screen and (min-width: 992px) {
    width: 40%;
  }

  @media only screen and (min-width: 1200px) {
    width: 40%;
  }
`;

export default FormCard;
