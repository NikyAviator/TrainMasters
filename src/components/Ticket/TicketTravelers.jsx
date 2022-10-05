import Accordion from 'react-bootstrap/Accordion';
import '../../../scss/main.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PlusMinus from '../UI/PlusMinus';
import Container from 'react-bootstrap/Container';
function TicketTravelers() {
  return (
    <Container>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Row>
            <Col>
              <Accordion.Header>Travelers</Accordion.Header>
              <Accordion.Body>
                <div className='traveler'>
                  Adult:
                  <PlusMinus />
                </div>
                <div className='traveler'>
                  Child:
                  <PlusMinus />
                </div>
                <div className='traveler'>
                  Pensioner:
                  <PlusMinus />
                </div>
                <div className='traveler'>
                  Student:
                  <PlusMinus />
                </div>
                <div className='traveler'>
                  Animal:
                  <PlusMinus />
                </div>
              </Accordion.Body>
            </Col>
          </Row>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default TicketTravelers;
