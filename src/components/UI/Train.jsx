import { useEffect, useState } from 'react';
import Carriage from './Carriage';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Train({ props }) {
  let { trainId } = props;
  const [image, setImage] = useState('');
  const [carriage, setCarriage] = useState(0);
  useEffect(() => {
    switch (trainId) {
      case 1:
        setImage('../../../public/images/tåg1.jpg');
        break;
      case 2:
        setImage('../../../public/images/tåg2.jpg');
        break;
      case 3:
        setImage('../../../public/images/tåg3.jpg');
        break;
    }
  });

  return (
    <>
      {carriage ? (
        <Carriage carriage={carriage} props={props} />
      ) : (
        <div className='wrapperTrain'>
          <Container>
            <Row
              className='train'
              style={{
                backgroundImage: `url(${image})`,
                minWidth: '100%',
              }}
            >
              <div className='vagn1' onClick={() => setCarriage(1)}>
                vagn1
              </div>
              <div className='vagn2' onClick={() => setCarriage(2)}>
                vagn2
              </div>
              <div className='vagn3' onClick={() => setCarriage(3)}>
                vagn3
              </div>
              <div className='vagn4' onClick={() => setCarriage(2)}>
                vagn4
              </div>
              <div className='vagn5' onClick={() => setCarriage(2)}>
                vagn5
              </div>
              <div className='vagn6' onClick={() => setCarriage(4)}>
                vagn6
              </div>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
}
