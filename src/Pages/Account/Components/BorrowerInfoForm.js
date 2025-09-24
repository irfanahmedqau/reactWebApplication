import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import { allInputField } from "../../../config/config";
import TextInput from "../../../GlobalComponents/TextInput";
import SelectInput from "../../../GlobalComponents/SelectInput";
import RadioGroup from "../../../GlobalComponents/RadioGroup";

export default function BorrowerInfoForm() {
  return (
    <Container className="parentcontainer mt-3">
      <Row className="">
        <Col md={6}>
          <RadioGroup
            name="searchOption"
            defaultValue="startsWith"
            options={[
              { value: "startsWith", label: "Starts With" },
              { value: "contains", label: "Contains" },
            ]}
          />
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <TextInput label="Name" maxLength={allInputField} />
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <TextInput label="Address" />
        </Col>
        <Col md={4}>
          <TextInput label="System of Record" />
        </Col>
        </Row>
        <Row>
        <Col md={2}>
          <SelectInput
            label="State"
            options={[
              { value: "", label: "--Select--" },
              { value: "CA", label: "CA" },
              { value: "TX", label: "TX" },
            ]}
          />
        </Col>
        <Col md={2}>
          <TextInput label="Zip" />
        </Col>
        <Col md={2}>
          <TextInput label="Phone #" />
        </Col>
        <Col md={2}>
          <TextInput label="Area Code" />
        </Col>
        <Col md={2}>
          <TextInput label="SSN/TIN/SIN" />
        </Col>
        
        <Col md={2}>
          <TextInput label="ECN" />
        </Col>
      </Row>
    </Container>
  );
}
