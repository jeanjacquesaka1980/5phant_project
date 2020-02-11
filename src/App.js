import React from "react";
import "./App.css";

// import bootsrap react
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";

// import icons
import { MdClose } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdImage } from "react-icons/md";
import { MdLink } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { IconContext } from "react-icons";

// import star-rating
import StarRatingComponent from "react-star-rating-component";
import FormGroup from "react-bootstrap/FormGroup";

class App extends React.Component {
  state = {
    rating: 1
  };

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;
    return (
      <Container fluid={true}>
        <Row>
          <Col id="header" xl={12}>
            <header>
              <Form>
                <Form.Row>
                  <Col>
                    <IconContext.Provider value={{ color: "#292b2c" }}>
                      <Button
                        type="button"
                        className="float-left ml-3 mt-5 bg-transparent border-0"
                      >
                        <MdClose className="btn-close" />
                      </Button>
                    </IconContext.Provider>
                  </Col>
                  <Col>
                    <Button
                      type="button"
                      className="float-right mr-3 mt-5 btn-publish px-5 shadow"
                    >
                      Publish
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
            </header>
          </Col>
        </Row>
        <Row>
          <Col id="main" xl={12}>
            <main className="text-center m-3">
              <ButtonGroup aria-label="Basic example">
                <Button className="btn-post mr-3 bg-transparent">Post</Button>
                <Button className="btn-review mr-3 bg-transparent">
                  Review
                </Button>
                <Button className="btn-offers mr-3 bg-transparent">
                  Offers
                </Button>
              </ButtonGroup>
              <InputGroup className="mt-5 input-search">
                <InputGroup.Prepend className="border-0">
                  <InputGroup.Text className="bg-transparent border-0">
                    <MdSearch className="search-icon" />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  className="bg-transparent border-0"
                  type="text"
                  placeholder="What will you talk about ?"
                />
              </InputGroup>
              <Form.Group
                className="my-5"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  className="input-title"
                  type="text"
                  placeholder="Title"
                />
                <Form.Control
                  className="input-text-area pt-5"
                  as="textarea"
                  rows="6"
                  placeholder="Add text, @tag somebody"
                />
                <IconContext.Provider value={{ color: "#f9f9f9" }}>
                  <div className="icons">
                    <MdImage className="icon mr-2 p-1" />
                    <MdVideoLibrary className="icon mr-2 p-1" />
                    <MdLink className="icon mr-2 p-1" />
                  </div>
                </IconContext.Provider>
              </Form.Group>
            </main>
          </Col>
        </Row>
        <Row>
          <Col id="footer" xl={12}>
            <footer className="mx-auto text-center">
              {/* REVIEW COMPONENT */}
              <Card.Text className="mt-4 ratings text-left">Ratings</Card.Text>
              <StarRatingComponent
                className="mt-2"
                starColor={"#e7386a"}
                emptyStarColor={"#e5e5e5"}
                name="rate1"
                starCount={5}
                value={rating}
                renderStarIcon={() => (
                  <span>
                    <FaStar className="icon-star mr-4" />
                  </span>
                )}
                onStarClick={this.onStarClick.bind(this)}
              />
              {/* OFFERS COMPONENT */}
              <Form.Group as={Row} className="mt-4 offers">
                <div className="col-6 mb-4">
                  <Form.Label column className="text-left red">
                    Initial price
                  </Form.Label>
                  <Form.Control
                    column
                    className="input-offers"
                    type="text"
                    placeholder="Initial price"
                  />
                </div>
                <div className="col-6 mb-4">
                  <Form.Label column className="text-left red">
                    Actual price
                  </Form.Label>
                  <Form.Control
                    column
                    className="input-offers"
                    type="text"
                    placeholder="Actual price"
                  />
                </div>
                <div className="col-6 mb-4">
                  <Form.Label column className="text-left red">
                    Start date
                  </Form.Label>
                  <Form.Control
                    column
                    className="input-offers"
                    type="text"
                    placeholder="Start date"
                  />
                </div>
                <div className="col-6 mb-4">
                  <Form.Label column className="text-left red">
                    End date
                  </Form.Label>
                  <Form.Control
                    column
                    className="input-offers"
                    type="text"
                    placeholder="End date"
                  />
                </div>
              </Form.Group>
            </footer>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
