import { Form } from "react-bootstrap";

function TextInput({ label, name, value, onChange, onKeyDown, type = "text" }) {
  return (
    <div className="">
      <Form.Label className="label-style">{label}</Form.Label>
      <Form.Control
        required
        name={name}
        type={type}
        aria-label={label}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="input-style"
      />
    </div>
  );
}

export default TextInput;
