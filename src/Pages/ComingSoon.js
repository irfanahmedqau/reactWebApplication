
import { Container } from "react-bootstrap";
import CustomFooter from "../GlobalComponents/Footer";
import CustomNavBar from "../GlobalComponents/NavBar";
import CollapsibleMobileNav from "../GlobalComponents/mobileNavBar";
import "../styles/comingsoon.css";

import PrimaryButton from "../GlobalComponents/PrimaryButton";

import { useNavigate } from "react-router-dom";

function ComingSoon() {
  const navigate = useNavigate();

  return (

    <div className="coming-soon-wrapper">
         <CustomNavBar screenLogin="false" />
      <CollapsibleMobileNav screenLogin="false" />
      <Container className="coming-soon-content text-center">
        <h2 className="coming-title">🚧 Coming Soon</h2>
        <PrimaryButton
          onClick={() => navigate("/account")}
          className="rounded-pill mt-3"
        >
          Go Back to Accounts
        </PrimaryButton>
      </Container>
      
      <CustomFooter />
    </div>
  );
}

export default ComingSoon;
