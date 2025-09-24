import { Button } from "react-bootstrap";

function SecondaryButton({ children, onClick,className, type = "button" }) {
  return (
    <Button
      onClick={onClick}
      type={type}
      variant="outline"
      className={"outline button btn "+className}
    >
      {children}
    </Button>
  );
}

export default SecondaryButton;
