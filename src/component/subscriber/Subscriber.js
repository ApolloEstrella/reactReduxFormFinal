import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MaterialUiForm from "./MaterialUiForm";
import SubscriberList from "./SubscriberList";
//import { shouldComponentUpdate } from "react-window";

class Subscriber extends React.Component {

  constructor(props) {
    super(props)
    console.log("constructor")
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        console.log("setting state");
        return { unseen: "does not display" };
      });
    }, 100);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //if (nextProps.sendSuccess) {
    //  this.props.reset()
    //}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sendSuccess) {
      this.props.reset();
    }
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
