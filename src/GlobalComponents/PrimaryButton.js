import { Button } from "react-bootstrap";

function PrimaryButton({ children, onClick,className, type = "button" }) {
  return (
    <Button
      onClick={onClick}
      type={type}
      variant="primary"
      className={"primary btn button  "+className}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
