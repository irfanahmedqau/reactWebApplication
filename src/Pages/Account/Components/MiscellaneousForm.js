import { Row, Col, Container } from "react-bootstrap";
import TextInput from "../../../GlobalComponents/TextInput"; // adjust path based on your folder structure

export default function MiscellaneousForm({ formValues, handleChange }) {
  return (
    <Container className="parentcontainer mt-3">
      <Row className="">
        <Col md={4}>
          <TextInput
            label="BK Case #"
            name="bkCase"
          />
        </Col>
        <Col md={4}>
          <TextInput
            label="VIN #"
            name="vin"
          />
        </Col>
        <Col md={4}>
          <TextInput
            label="Judgment #"
            name="judgment"
          />
        </Col>
        </Row>
        <Row>
        <Col md={4}>
          <TextInput
            label="Attorney File #"
            name="attorneyFile"
          />
        </Col>
        <Col md={4}>
          <TextInput
            label="Bk Claim Identifier"
            name="BkClaimIdent"
          />
        </Col>
         <Col md={4}>
          <TextInput
            label="Investor Loan #"
            name="InvLoan"
          />
        </Col>
        
      </Row>

      <Row className="">
        <Col md={4}>
          <TextInput
            label="SBA #"
            name="sba"
          />
        </Col>
       <Col md={4}>
          <TextInput
            label="Collateral ID"
            name="collateralId"
          />
        </Col>
        <Col md={4}>
          <TextInput
            label="Probate Case #"
            name="probateCase"
          />
        </Col>
      </Row>
      <Row className="">
        <Col md={12}>
          <TextInput
            label="Property Address"
            name="propAddress"
          />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <TextInput
            label="DSC Client Id"
            name="dscClient"
          />
        </Col>
      </Row>
    </Container>
  );
}
