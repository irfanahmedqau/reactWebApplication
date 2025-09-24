
import { Container, Row, Col } from "react-bootstrap";

function CustomFooter() {
  return (
   
      <footer>
        <Container>
          <Row>
            <Col>
              © {new Date().getFullYear()}, Wells Fargo. All Rights
              Reserved.
            </Col>
          </Row>
        </Container>
      </footer>
    
  );
}

export default CustomFooter;
