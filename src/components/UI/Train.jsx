import { useEffect, useState } from 'react';
import TicketsPage from '../Pages/TicketsPage';
import Carriage from './Carriage';

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
        setImage('../../../public/images/tåg1.jpg');
        break;
      case 3:
        setImage('../../../public/images/tåg1.jpg');
        break;
    }
  });

  return (
    <>
      {carriage ? (
        <Carriage carriage={carriage} props={props} />
      ) : (
        <div
          className='train'
          style={{
            backgroundImage: `url(${image})`,
            width: '80%',
            height: '130px',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
          }}
        >
          <span className='vagn1' onClick={() => setCarriage(1)}>
            vagn1
          </span>
          <span className='vagn2' onClick={() => setCarriage(2)}>
            vagn2
          </span>
          <span className='vagn3' onClick={() => setCarriage(3)}>
            vagn3
          </span>
          <span className='vagn4' onClick={() => setCarriage(2)}>
            vagn4
          </span>
          <span className='vagn5' onClick={() => setCarriage(2)}>
            vagn5
          </span>
          <span className='vagn6' onClick={() => setCarriage(4)}>
            vagn6
          </span>
        </div>
      )}{' '}
    </>
  );
}
