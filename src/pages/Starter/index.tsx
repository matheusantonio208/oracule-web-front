import React from 'react';
import { Col, Container, Row } from 'reactstrap';

export const StarterPage = () => {
  document.title = 'Starter | Velzon - React Admin & Dashboard Template';
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <h1>Teste</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
