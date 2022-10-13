import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../scss/main.scss';
import { useState } from 'react';
import useStates from '../../utilities/useStates';
import {
  findRoute,
  itsWeekend,
  getStations,
} from '../../utilities/RouteStations';
import TicketItem from './TicketItem';
import TicketDatePicker from './TicketDatePicker';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from '../UI/Button';
import Card from 'react-bootstrap/Card';
import TicketTravelers from './TicketTravelers';
import { useEffect } from 'react';

const TicketFromTo = () => {
  const [routes, setRoutes] = useState([]);
  const [Date, setDate] = useState('');
  const [weekend, setWeekend] = useState(false);
  const [stations, setStations] = useState([]);
  const [travelerArray, setTravelerArr] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await getStations();
      setStations(data);
    }
    fetchData();
  }, []);

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
    //resetForm();
  }

  let { from, to } = formValues;
  return (
    <div className='bookingForm'>
      <h1>Boka din resa</h1>
      <br />
      <Card style={{ border: 'none' }}>
        <Container>
          <Col>
            <Row>
              <Col>
                <Form style={{ paddingBottom: '10%', paddingTop: '10%' }}>
                  <Form.Group>
                    <Form.Control
                      type='text'
                      name='from'
                      placeholder='Från'
                      required
                      maxLength='100'
                      list='list-stations'
                      id='input-datalist'
                      value={from}
                      onChange={onChangeFormValue}
                    />
                    <datalist id='list-stations'>
                      {stations &&
                        stations.map(({ stationName, i }) => (
                          <option key={i}>{stationName}</option>
                        ))}
                    </datalist>
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form style={{ paddingBottom: '10%', paddingTop: '10%' }}>
                  <Form.Group>
                    <Form.Control
                      type='text'
                      name='to'
                      placeholder='Till'
                      required
                      maxLength='100'
                      list='list-stations'
                      id='input-datalist'
                      value={to}
                      onChange={onChangeFormValue}
                    />
                    <datalist id='list-stations'>
                      {stations &&
                        stations.map(({ stationName, i }) => (
                          <option key={i}>{stationName}</option>
                        ))}
                    </datalist>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row style={{ paddingBottom: '5%' }}>
              <Col>
                <TicketDatePicker setWeekend={setWeekend} setDate={setDate} />
              </Col>
            </Row>
            <Row style={{ paddingBottom: '8%' }}>
              <Col style={{ minWidth: '50%' }}>
                <TicketTravelers
                  setTravelerArr={setTravelerArr}
                  travelerArray={travelerArray}
                />
              </Col>
            </Row>
            <Row
              style={{
                display: 'grid',
                justifyContent: 'center',
              }}
            >
              <Col>
                <Button
                  buttonStyle='btn--secondary-outline'
                  buttonSize='btn--medium-secondary'
                  type='submit'
                  onClick={submitForm}
                >
                  Sök
                </Button>
              </Col>
            </Row>
          </Col>

          <TicketItem
            routes={routes}
            Date={Date}
            travelerArray={travelerArray}
          />
        </Container>
      </Card>
    </div>
  );
};

export default TicketFromTo;
