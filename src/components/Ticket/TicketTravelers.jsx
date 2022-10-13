import Accordion from 'react-bootstrap/Accordion';
import '../../../scss/main.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PlusMinus from '../UI/PlusMinus';
import Container from 'react-bootstrap/Container';
function TicketTravelers() {
  return (
    <Container>
      <Accordion>
        <Accordion.Item eventKey='0'>
          <Row>
            <Col>
              <Accordion.Header>Resenärer</Accordion.Header>
              <Accordion.Body>
                <div className='traveler'>
                  Vuxen:
                  <PlusMinus traveler='Vuxen' />
                </div>
                <div className='traveler'>
                  Barn:
                  <PlusMinus traveler='Barn' />
                </div>
                <div className='traveler'>
                  Pensionär:
                  <PlusMinus traveler='Pensionär' />
                </div>
                <div className='traveler'>
                  Student:
                  <PlusMinus traveler='Student' />
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
