import { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordInput({ label, name, value, onChange, onKeyDown }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="mb-3">
      <Form.Label className="label-style">{label}</Form.Label>
      <InputGroup className="input-style">
        <Form.Control
          required
          name={name}
          type={visible ? "text" : "password"}
          value={value}
          aria-label={label}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <Button
          onClick={() => setVisible((prev) => !prev)}
          variant="outline-secondary"
        >
          {visible ? <FaEyeSlash /> : <FaEye />}
        </Button>
      </InputGroup>
    </div>
  );
}

export default PasswordInput;
