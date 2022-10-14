import { useEffect, useState } from 'react';
import Carriage from './Carriage';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Train({ props }) {
  let { trainId, travelerArray, setTravelerArr, startStation, endStation } =
    props;
  const [image, setImage] = useState('');
  const [carriage, setCarriage] = useState(0);
  useEffect(() => {
    switch (trainId) {
      case 1:
        setImage('images/tåg1.png');
        break;
      case 2:
        setImage('images/tåg2.png');
        break;
      case 3:
        setImage('images/tåg3.png');
        break;
    }
  });

  return (
    <>
      {carriage ? (
        <Carriage
          carriage={carriage}
          setCarriage={setCarriage}
          props={props}
          trainId={trainId}
          travelerArray={travelerArray}
        />
      ) : (
        <div className='wrapperTrain'>
          {trainId === 1 && (
            <Container>
              <Row
                className='train'
                style={{
                  backgroundImage: `url(${image})`,
                  minWidth: '100%',
                }}
              >
                <div className='vagn1-1' onClick={() => setCarriage(1)}>
                  vagn1
                </div>
                <div className='vagn2-1' onClick={() => setCarriage(2)}>
                  vagn2
                </div>
                <div className='vagn3-1' onClick={() => setCarriage(3)}>
                  vagn3
                </div>
                <div className='vagn4-1' onClick={() => setCarriage(4)}>
                  vagn4
                </div>
                <div className='vagn5-1' onClick={() => setCarriage(5)}>
                  vagn5
                </div>
                <div className='vagn6-1' onClick={() => setCarriage(6)}>
                  vagn6
                </div>
              </Row>
            </Container>
          )}
          {trainId === 2 && (
            <Container>
              <Row
                className='train'
                style={{
                  backgroundImage: `url(${image})`,
                  minWidth: '100%',
                }}
              >
                <div className='vagn1-2' onClick={() => setCarriage(1)}>
                  vagn1
                </div>
                <div className='vagn2-2' onClick={() => setCarriage(2)}>
                  vagn2
                </div>
                <div className='vagn3-2' onClick={() => setCarriage(3)}>
                  vagn3
                </div>
                <div className='vagn4-2' onClick={() => setCarriage(4)}>
                  vagn4
                </div>
                <div className='vagn5-2' onClick={() => setCarriage(5)}>
                  vagn5
                </div>
              </Row>
            </Container>
          )}
          {trainId === 3 && (
            <Container>
              <Row
                className='train'
                style={{
                  backgroundImage: `url(${image})`,
                  minWidth: '100%',
                }}
              >
                <div className='vagn1-3' onClick={() => setCarriage(1)}>
                  vagn1
                </div>
                <div className='vagn2-3' onClick={() => setCarriage(2)}>
                  vagn2
                </div>
                <div className='vagn3-3' onClick={() => setCarriage(3)}>
                  vagn3
                </div>
                <div className='vagn4-3' onClick={() => setCarriage(4)}>
                  vagn4
                </div>
              </Row>
            </Container>
          )}
        </div>
      )}
    </>
  );
}
