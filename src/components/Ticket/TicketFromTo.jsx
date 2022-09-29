import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import useStates from '../../utilities/useStates';
import '../../../scss/main.scss';
import { findRoute } from '../../utilities/RouteStations';
import DisplayRoutes from '../UI/DisplayRoutes';
import TicketFrom from './TicketFrom';
import TicketTo from './TicketTo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const TicketFromTo = () => {
  const [routes, setRoutes] = useState([]);
  let emptyFormValues = {
    start: 'Trelleborg',
    end: 'Lund C',
  };
  const [formValues, updateStateFormValue] = useStates({ ...emptyFormValues });
  const onChangeFormValue = (event) => {
    let { name, value } = event.target;
    updateStateFormValue({ [name]: value });
  };
  const resetForm = () => {
    updateStateFormValue({ ...emptyFormValues });
  };

  async function submitForm(event) {
    event.preventDefault();
    let route = await findRoute(start, end);
    setRoutes(route);
  }

  let { start, end } = formValues;
  return (
    <>
      <Card>
        <Container>
          <Col>
            <Row>
              <Col>
                <TicketFrom onChange={onChangeFormValue} />
              </Col>
              <Col>
                <TicketTo onChange={onChangeFormValue} />
              </Col>
            </Row>
            <Button variant='secondary' type='submit' onClick={submitForm}>
              Sök
            </Button>
          </Col>

          <>
            {routes ? (
              Object.values(routes).map((item, i) => (
                <DisplayRoutes key={i} props={item} />
              ))
            ) : (
              <p>Station hittades inte</p>
            )}
          </>
        </Container>
      </Card>
    </>
  );
};

export default TicketFromTo;