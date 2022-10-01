import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../scss/main.scss';
import { useState } from 'react';
import useStates from '../../utilities/useStates';
import { findRoute, itsWeekend } from '../../utilities/RouteStations';
import TicketItem from './TicketItem';
import TicketDatePicker from './TicketDatePicker';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TicketFromTo = () => {
  const [routes, setRoutes] = useState([]);
  const [weekend, setWeekend] = useState(false);
  let emptyFormValues = {
    from: '',
    to: '',
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
    let route = await findRoute(from, to);
    if (weekend) route = await itsWeekend(route);
    setRoutes(route);
    resetForm();
  }

  let { from, to } = formValues;
  return (
    <>
      <Card>
        <Container>
          <Col>
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Control
                      type='text'
                      name='from'
                      placeholder='Enter your departure city'
                      required
                      maxLength='100'
                      value={from}
                      onChange={onChangeFormValue}
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Control
                      type='text'
                      name='to'
                      placeholder='Enter your arrival city'
                      required
                      maxLength='100'
                      value={to}
                      onChange={onChangeFormValue}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col>
                <TicketDatePicker setWeekend={setWeekend} />
              </Col>
            </Row>
            <Button variant='secondary' type='submit' onClick={submitForm}>
              Sök
            </Button>
          </Col>

          <TicketItem routes={routes} />
        </Container>
      </Card>
    </>
  );
};

export default TicketFromTo;
