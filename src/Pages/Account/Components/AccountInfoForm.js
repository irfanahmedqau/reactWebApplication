import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TextInput from "../../../GlobalComponents/TextInput";
import SelectInput from "../../../GlobalComponents/SelectInput";

export default function AccountInfoForm() {
  return (
    <Container className="parentcontainer ">
      {/* General */}
      <Row>
      <Col md={3}>
      <h6 className="section-title-account">General</h6>
      <Row className="">
        <Col md={12}>
          <TextInput label="ECaR ID" />
        </Col>
        <Col md={12}>
          <TextInput label="Date of Loan" type="date" />
        </Col>
      </Row>
</Col>
<Col md={3}>
      {/* FDE */}
      <h6 className="section-title-account">FDE</h6>
      <Row className="">
        <Col md={12}>
          <TextInput label="Account #" />
        </Col>
        <Col md={12}>
          <TextInput label="Department" />
        </Col>
      </Row>
</Col>
<Col md={3}>
      {/* AFS */}
      <h6 className="section-title-account">AFS</h6>
      <Row className="">
        <Col md={6}>
          <TextInput label="Obligor #" />
        </Col>
        <Col md={6}>
          <SelectInput
            label="Status"
            options={[
              { value: "current", label: "Current" },
              { value: "closed", label: "Closed" },
              { value: "default", label: "Default" },
            ]}
          />
        </Col>
        <Col md={12}>
          <TextInput label="Obligation #" />
        </Col>
      </Row>
      </Col>
      <Col md={3}>
      {/* EFS */}
      <h6 className="section-title-account">EFS</h6>
      <Row className="">
        <Col md={12}>
          <TextInput label="Account #" />
        </Col>
        <Col md={12}>
          <TextInput label="Reference #" />
        </Col>
      </Row>
</Col>
</Row>
<Row>
      <Col md={3}>
      {/* SHAW */}
      <h6 className="section-title-account">SHAW</h6>
      <Row className="">
        <Col md={12}>
          <TextInput label="Account #" />
        </Col>
      </Row>
</Col>
<Col md={3}>
      {/* MSP */}
      <h6 className="section-title-account">MSP</h6>
      <Row className="">
        <Col md={6}>
          <TextInput label="Account #" />
        </Col>
        <Col md={6}>
          <SelectInput
            label="Department"
            options={[
              { value: "home-equity", label: "Home Equity" },
              { value: "mortgage", label: "Mortgage" },
            ]}
          />
        </Col>
      </Row>
</Col>
<Col md={3}>
      {/* Supreme */}
      <h6 className="section-title-account">Supreme</h6>
      <Row className="">
        <Col md={6}>
          <TextInput label="Account #" />
        </Col>
        <Col md={6}>
          <SelectInput
            label="Company"
            options={[
              { value: "consumer", label: "Consumer" },
              { value: "business", label: "Business" },
            ]}
          />
        </Col>
      </Row>
      </Col>
      </Row>
    </Container>
  );
}