import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../../scss/main.scss';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <p className="footer-text">&copy; 2022 TrainMasters</p>
      </div>
    </div>
  );
}
