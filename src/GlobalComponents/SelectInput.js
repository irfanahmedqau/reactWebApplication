import { Form } from "react-bootstrap";

export default function SelectInput({ label, options = [], ...props }) {
  return (
    <Form.Group className="">
      {label && <Form.Label className="label-style">{label}</Form.Label>}
      <Form.Select {...props}>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}
