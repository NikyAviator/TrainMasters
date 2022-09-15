import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Footer() {
  return (
    <Container fluid className="bg-primary text-white mt-5">
      <Row className="py-3">
        <Col className="text-center">&copy; 2022 TrainMasters</Col>
      </Row>
    </Container>
  );
}
