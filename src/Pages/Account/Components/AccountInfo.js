import Accordion from "react-bootstrap/Accordion";
import AccountInfoForm from "./AccountInfoForm";

export default function DemographicInfo() {
  return (
    <Accordion defaultActiveKey="0" id="AccountAccordion" alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header id="account">Account Information</Accordion.Header>
        <Accordion.Body>
          
            <AccountInfoForm />
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

