import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MaterialUiForm from "../subscriber/MaterialUiForm";
import SubscriberList from "../subscriber/SubscriberList";


 

 class Subscriber extends React.Component {

  componentDidMount() {
    setInterval(() => {
        this.setState(() => {
            console.log('setting state');
            return { unseen: "does not display" }
        });
    }, 10);
}
 
  shouldComponentUpdate(nextProps: any) {
    return true;
}

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={3}>
              <div>
                <MaterialUiForm />
              </div>
            </Col>
            <Col sm={9}>
              <div>
                <SubscriberList />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
} 

export default Subscriber;
