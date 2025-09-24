import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function CheckboxWithTextField({ label, name, value, onChange, onKeyDown, type = "text" }) {
  const [checked, setChecked] = useState(false);

  return (
    <Form>
      {/* Checkbox with label */}
      <Form.Check
        type="checkbox"
        id="enable-text"
        label={label}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
<Form.Control
        required
        disabled={!checked}
        name={name}
        type={type}
        aria-label={label}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="input-style"
      />

    </Form>
  );
}

export default CheckboxWithTextField;
