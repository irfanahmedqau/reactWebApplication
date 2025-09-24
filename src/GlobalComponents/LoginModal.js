import { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import TextInput from "./TextInput";
import CheckboxWithTextField from "./FieldWithCheckBox";

function LoginModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      {/* Modal */}
      <Modal show={show} centered size="lg">
        {/* Header with message */}
        <Modal.Header>
          <Modal.Title className="">
             <h6 className="login-model-header">Status</h6>
          </Modal.Title>
        </Modal.Header>

        {/* Body with fields */}
        <Modal.Body>
            <div className="border mb-3">
            <div className="m-2">
            <h6 className="section-title-account">Enviroment</h6>
               <span className="label-style">
             You are logging into a non-production 'ECaR - DEV2' Database. Any information entered will not appear in production.
            </span>
            </div>
            </div>
                  <div className="border mb-3">
            <div className="m-2">
            <h6 className="section-title-account">Last Update</h6>
               <Row>
        <Col md={3}>
          <CheckboxWithTextField label={"AFS"} type="date"/>
        </Col>
        <Col md={3}>
           <TextInput label={"CIS"} type="date"/>
        </Col>
        <Col md={3}>
            <TextInput label={"CLIPR"} type="date"/>
        </Col>
        <Col md={3}>
           <CheckboxWithTextField label={"EFS (HELMS)"} type="date"/>
        </Col>
        
      </Row>
             <Row>
        <Col md={3}>
          <CheckboxWithTextField label={"EFS (LSS)"} type="date"/>
        </Col>
        <Col md={3}>
           <CheckboxWithTextField label={"FDE"} type="date"/>
        </Col>
        <Col md={3}>
         <CheckboxWithTextField label={"FDEBC"} type="date"/>
        </Col>
        <Col md={3}>
           <CheckboxWithTextField label={"FDECR"} type="date"/>
        </Col>
        
      </Row>
             <Row>
        <Col md={3}>
          <CheckboxWithTextField label={"FDERS"} type="date"/>
        </Col>
        <Col md={3}>
            <CheckboxWithTextField label={"MSP"} type="date"/>
        </Col>
        <Col md={3}>
            <CheckboxWithTextField label={"SHAW"} type="date"/>
        </Col>
        <Col md={3}>
           <CheckboxWithTextField label={"Supreme"} type="date"/>
        </Col>
        
      </Row>
             <Row>
        <Col md={3}>
          <CheckboxWithTextField label={"FDERCV"} type="date"/>
        </Col>
     
      </Row>
            
            </div>
           </div>
           <div className="border">
            <div className="m-2">
            <h6 className="section-title-account">Account</h6>
               <Row>
        <Col md={3}>
          <TextInput type="date" label="Setup Date" />
        </Col>
        <Col md={3}>
          <TextInput type="date" label="Last Update" />
        </Col>
        <Col md={2}>
          <TextInput type="date" label="Last Worked" />
        </Col>
        <Col md={2}>
          <TextInput label="SOR ID" />
        </Col>
        <Col md={2}>
          <TextInput label="Department ID" />
        </Col>
        
       
      </Row>
             <Row>
        <Col md={4}>
          <TextInput label="Account Type Code" />
        </Col>
        <Col md={4}>
          <TextInput label="Product Type Code" />
        </Col>
        <Col md={4}>
          <TextInput label="Company Code" />
        </Col>
      
        
       
      </Row>
            </div>
           </div>
        </Modal.Body>

        {/* Footer with buttons */}
        <Modal.Footer>
          <Button variant="secondary me-auto" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
