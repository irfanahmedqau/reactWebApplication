import Accordion from "react-bootstrap/Accordion";
import MiscellaneousForm from "./MiscellaneousForm";

export default function MiscellaneousInfo() {
  return (
    <Accordion defaultActiveKey="0" id="MiscellaneousFormAccordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header id="miscellaneousInfo">Miscellaneous</Accordion.Header>
        <Accordion.Body>
          
            <MiscellaneousForm />
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

