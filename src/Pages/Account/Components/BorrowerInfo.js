import Accordion from "react-bootstrap/Accordion";
import BorrowerInfoForm from "./BorrowerInfoForm";

export default function BorrowerInfo() {
  return (
    <Accordion defaultActiveKey="0" id="BorrowerInfoAccordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header id="borrowerInfo">Borrower Information</Accordion.Header>
        <Accordion.Body>
          
            <BorrowerInfoForm />
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

