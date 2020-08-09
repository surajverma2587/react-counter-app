import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Number from "./Number";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    const { initialValue } = props;

    this.state = {
      count: initialValue,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  increment() {
    console.log("increment");
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    console.log("decrement");
    this.setState({
      count: this.state.count - 1,
    });
  }

  reset() {
    console.log("reset");
    this.setState({
      count: this.props.initialValue,
    });
  }

  render() {
    console.log("render");

    return (
      <Container className="my-container">
        <Row>
          <Col>
            <Button variant="success" size="lg" block onClick={this.increment}>
              +
            </Button>
          </Col>
          <Col>
            <Number value={this.state.count} />
          </Col>
          <Col>
            <Button variant="danger" size="lg" block onClick={this.decrement}>
              -
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Button variant="warning" size="lg" block onClick={this.reset}>
              Reset
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Counter;
