import React from "react";
import { Form } from "react-bootstrap";

export default function RadioGroup({ name, options = [], defaultValue }) {
  return (
    <Form.Group className="">
      {options.map((opt, idx) => (
        <Form.Check
          key={idx}
          inline
          type="radio"
          name={name}
          label={opt.label}
          value={opt.value}
          defaultChecked={opt.value === defaultValue}
        />
      ))}
    </Form.Group>
  );
}
