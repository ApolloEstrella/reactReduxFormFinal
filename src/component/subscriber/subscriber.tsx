import React, {  Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MaterialUiForm from "./MaterialUiForm";
import SubscriberList from "./SubscriberList";
//import { shouldComponentUpdate } from "react-window";


 

 class Subscriber extends React.Component {

  componentDidMount() { 
     setInterval(() => {
        this.setState(() => {
            console.log('setting state');
            return { unseen: "does not display" }
        });
    }, 100);  
}
 
  shouldComponentUpdate(nextProps: any, nextState: any) {
    return true;
}

  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col sm={3}>
              <div>
                <MaterialUiForm key="A" />
              </div>
            </Col>
            <Col sm={9}>
              <div>
                <SubscriberList key="B" />
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
} 

export default Subscriber;