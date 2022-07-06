import { Col, Row } from 'reactstrap';
import { BreadCrumb } from '../../components/BreadCrumb';
import { Wrapper, Container } from './styles';

export const StarterPage = () => {
  document.title = 'Starter | Velzon - React Admin & Dashboard Template';
  return (
    <Wrapper>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <BreadCrumb title="Starter" pageTitle="Pages" />
              <h1>Hello StarterPage</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </Wrapper>
  );
};
