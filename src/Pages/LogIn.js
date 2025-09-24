import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomFooter from "../GlobalComponents/Footer";
import CustomNavBar from "../GlobalComponents/NavBar";
import CollapsibleMobileNav from "../GlobalComponents/mobileNavBar";
import { snackBar } from "../services/Alert";
import { handleValidation } from "../GlobalComponents/ValidatorAndSubmitForm";
import CustomLoader from "../GlobalComponents/Loader";
import TextInput from "../GlobalComponents/TextInput";
import PasswordInput from "../GlobalComponents/PasswordInput";
import PrimaryButton from "../GlobalComponents/PrimaryButton";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  const [userNameProvided, setUserNameProvided] = useState(false);
  const [showLoader, setLoader] = useState(false);
  const [formValues, setFormValues] = useState({ username: "", password: "" });

  useEffect(() => {
    document.title = "Wells Fargo";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUserNameProvided(false);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") handleSubmit(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = handleValidation("login");
    if (validation) {
       setLoader(true);
      await new Promise((res) => setTimeout(res, 2000));
      setLoader(false);
       navigate("/account");
     
    } else {
      snackBar("Error! Please provide login details", "danger");
    }
  };

  const CheckUserName = async (e) => {
    e.preventDefault();
    const validation = handleValidation("login");
    if (validation) {
      setLoader(true);
      await new Promise((res) => setTimeout(res, 1000));
      setLoader(false);
      setUserNameProvided(true);
    } else {
      snackBar("Error! Please provide UserName", "danger");
    }
  };

  return (
    <>
      {showLoader && <CustomLoader />}
      <CustomNavBar screenLogin="false" />
      <CollapsibleMobileNav screenLogin="false" />

      <div id="login" className="pageheight login">
        <Container className="logincontainer">
          <div className="partition">
            <h3 className="mb-4 d-flex justify-content-center">
              Channel Secure Sign On
            </h3>

            <Row className="mb-4 mt-4">
              <Col md={12}>
                <TextInput
                  label="Username"
                  name="username"
                  value={formValues.username}
                  onChange={handleChange}
                  onKeyDown={handleKeypress}
                />
              </Col>

              {userNameProvided && (
                <Col md={12}>
                  <PasswordInput
                    label="Password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    onKeyDown={handleKeypress}
                  />
                </Col>
              )}
            </Row>

            <Row>
              <Col md={12} className="d-flex justify-content-center">
                {userNameProvided ? (
                  <PrimaryButton onClick={handleSubmit} className={"rounded-pill"}>Sign On</PrimaryButton>
                ) : (
                  <PrimaryButton onClick={CheckUserName} className={"rounded-pill"}>Next</PrimaryButton>
                )}
              </Col>
            </Row>

            <div className="label-style mt-4">
              Warning: You have accessed a private computer system. Unauthorized access, use, connection, or entry is not permitted and constitutes a crime punishable by law. 
              We reserve the right to fully pursue criminal and civil legal penalties. 
              All individuals using this computer system, with or without proper authority, are subject to having all their activities monitored and recorded. 
              Anyone using this system implicitly consents to this monitoring. Any evidence of suspected criminal activity revealed by such monitoring may be provided to law enforcement officials.
            </div>
          </div>
        </Container>
      </div>

      <CustomFooter />
    </>
    
  );
}

export default LogIn;
