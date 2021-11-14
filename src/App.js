import logo from "./logo.svg";
import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  InputGroup,
  Alert,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function App() {
  return (
    <div>
      <Navbar color="white" expand="md" white>
        <NavbarBrand href="/">
          <img src="img22.png" alt="logo" style={{ width: "40%" }} />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="#" style={{ color: "white" }}>
                Components
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText
            style={{ color: "black", fontWeight: "bold", margin: "0 1%" }}
          >
            Login
          </NavbarText>
          <NavbarText style={{ margin: "0 1%" }}>
            <Button
              outline
              color="link"
              style={{
                color: "white",
                borderRadius: "5px",
                backgroundColor: "#01cb63",
              }}
            >
              <i>Register</i>
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
      <Row style={{ backgroundColor: "#01cb63" }}>
        <Col
          md={6}
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            padding: "2% 0%",
            textAlign: "justify",
            backgroundColor: "#01cb63",
          }}
        >
          <br />
          <Card style={{ border: "none", backgroundColor: "#01cb63" }}>
            <CardBody>
              <CardTitle tag="h1" style={{ color: "white" }}>
                Anytime, Anywhere <br />
                Learn On Your Schedule <br />
                From Any Device
              </CardTitle>
              <CardText style={{ fontWeight: "normal" }}>
                <i>We Believe everyone has the capacity to be creative</i>
                <br />
                <a
                  href="#"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Course Pro
                </a>{" "}
                <i>
                  is a place where people develop their
                  <br />
                  own potential
                </i>
              </CardText>
              <Button
                outline
                color="link"
                style={{
                  marginRight: "1%",
                  color: "white",
                  borderRadius: "5px",
                  backgroundColor: "black",
                }}
              >
                <i>Let's Get Start</i>
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <img src="img3.png" alt="" style={{ width: "100%" }} />
        </Col>
      </Row>
      <img src="img1.png" alt="" style={{ width: "100%" }} />
      <Row style={{ padding: "0 5%" }}>
        <Col md={4} style={{ padding: "2%" }}>
          <Card style={{ borderRadius: "5px" }}>
            <CardBody>
              <img src="img9.png" alt="" style={{ width: "100%" }} />
              <CardTitle
                tag="h5"
                style={{
                  color: "black",
                  textAlign: "left",
                  margin: "2% 0%",
                  fontWeight: "bold",
                }}
              >
                Ultimate Business Intelligence
                <br />
                Analyst A to Z Course 2021
              </CardTitle>
              <CardText
                style={{
                  textAlign: "left",
                }}
              >
                <br />
                <b>46,995</b> <i>Student</i>
              </CardText>
              <CardText>
                <br />
                <Row>
                  <Col
                    xs={6}
                    style={{
                      alignItems: "center",
                      justifyContent: "left",
                      display: "flex",
                      textAlign: "left",
                    }}
                  >
                    <img
                      src="img12.png"
                      alt=""
                      style={{ width: "10%", marginRight: "1%" }}
                    />{" "}
                    <i> 11 hr 20 mins</i>
                  </Col>
                  <Col
                    xs={6}
                    style={{
                      alignItems: "center",
                      justifyContent: "right",
                      display: "flex",
                      textAlign: "right",
                    }}
                  >
                    <img
                      src="img13.png"
                      alt=""
                      style={{ width: "10%", marginRight: "1%" }}
                    />{" "}
                    <i> 44 Lectures</i>
                  </Col>
                </Row>
              </CardText>
              <CardText
                style={{
                  borderTop: "1px solid #e3e3e3",
                  padding: "2% 0%",
                  marginTop: "2%",
                }}
              >
                <Row>
                  <Col
                    xs={6}
                    style={{
                      alignItems: "center",
                      justifyContent: "left",
                      display: "flex",
                      textAlign: "left",
                    }}
                  >
                    <img
                      src="img14.png"
                      alt=""
                      style={{ width: "30%", marginRight: "1%" }}
                    />{" "}
                    <b> Albert Hitler</b>
                  </Col>
                  <Col
                    xs={6}
                    style={{
                      alignItems: "center",
                      justifyContent: "right",
                      display: "flex",
                      textAlign: "right",
                    }}
                  >
                    <h4 style={{ color: "#01cb63" }}>₹2000</h4>
                    <strike style={{ fontWeight: "bold" }}>₹2000</strike>
                  </Col>
                </Row>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md={4} style={{ padding: "2%" }}>
          <Card style={{ borderRadius: "5px" }}>
            <CardBody>
              <img src="img10.png" alt="" style={{ width: "100%" }} />
              <CardTitle
                tag="h5"
                style={{
                  color: "black",
                  textAlign: "left",
                  margin: "2% 0%",
                  fontWeight: "bold",
                }}
              >
                Adobe Photoshop Training: From
                <br />
                Beginner to Pro
              </CardTitle>
              <CardText
                style={{
                  textAlign: "left",
                }}
              >
                <br />
                <b>6,995</b> <i>Student</i>
              </CardText>
              <CardText>
                <br />
                <Row>
                  <Col
                    xs={6}
                    style={{
                      alignItems: "center",
                      justifyContent: "left",
                      display: "flex",
                      textAlign: "left",
                    }}
                  >
                    <img
                      src="img12.png"
                      alt=""
                      style={{ width: "10%", marginRight: "1%" }}
                    />{" "}
                    <i> 6 hr 20 mins</i>
                  </Col>
                  <Col
                    xs={6}
                    style={{
                      alignItems: "center",
                      justifyContent: "right",
                      display: "flex",
                      textAlign: "right",
                    }}
                  >
                    <img
                      src="img13.png"
                      alt=""
                      style={{ width: "10%", marginRight: "1%" }}
                    />{" "}
                    <i> 24 Lectures</i>
                  </Col>
                </Row>
              </CardText>
              <CardText
                style={{
                  borderTop: "1px solid #e3e3e3",
                  padding: "2% 0%",
                  marginTop: "2%",
                }}
              >
                <Row>
                  <Col
                    xs={6}
                    style={{
                      alignItems: "center",
                      justifyContent: "left",
                      display: "flex",
                      textAlign: "left",
                    }}
                  >
                    <img
                      src="img14.png"
                      alt=""
                      style={{ width: "30%", marginRight: "1%" }}
                    />{" "}
                    <b> Wanda Willson</b>
                  </Col>
                  <Col
                    xs={6}
                    style={{
                      alignItems: "center",
                      justifyContent: "right",
                      display: "flex",
                      textAlign: "right",
                    }}
                  >
                    <h4 style={{ color: "#01cb63" }}>₹3000</h4>
                    <strike style={{ fontWeight: "bold" }}>₹3000</strike>
                  </Col>
                </Row>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md={4} style={{ padding: "2%" }}>
          <Card style={{ borderRadius: "5px" }}>
            <CardBody>
              <img src="img11.png" alt="" style={{ width: "100%" }} />
              <CardTitle
                tag="h5"
                style={{
                  color: "black",
                  textAlign: "left",
                  margin: "2% 0%",
                  fontWeight: "bold",
                }}
              >
                Social Media Marketing - A to Z
                <br />
                Content Marketing Class 2021
              </CardTitle>
              <CardText
                style={{
                  textAlign: "left",
                }}
              >
                <br />
                <b>46,995</b> <i>Student</i>
              </CardText>
              <CardText>
                <br />
                <Row>
                  <Col
                    xs={6}
                    style={{
                      alignItems: "center",
                      justifyContent: "left",
                      display: "flex",
                      textAlign: "left",
                    }}
                  >
                    <img
                      src="img12.png"
                      alt=""
                      style={{ width: "10%", marginRight: "1%" }}
                    />{" "}
                    <i> 11 hr 20 mins</i>
                  </Col>
                  <Col
                    xs={6}
                    style={{
                      alignItems: "center",
                      justifyContent: "right",
                      display: "flex",
                      textAlign: "right",
                    }}
                  >
                    <img
                      src="img13.png"
                      alt=""
                      style={{ width: "10%", marginRight: "1%" }}
                    />{" "}
                    <i> 44 Lectures</i>
                  </Col>
                </Row>
              </CardText>
              <CardText
                style={{
                  borderTop: "1px solid #e3e3e3",
                  padding: "2% 0%",
                  marginTop: "2%",
                }}
              >
                <Row>
                  <Col
                    xs={6}
                    style={{
                      alignItems: "center",
                      justifyContent: "left",
                      display: "flex",
                      textAlign: "left",
                    }}
                  >
                    <img
                      src="img14.png"
                      alt=""
                      style={{ width: "30%", marginRight: "1%" }}
                    />{" "}
                    <b> Albert Hitler</b>
                  </Col>
                  <Col
                    xs={6}
                    style={{
                      alignItems: "center",
                      justifyContent: "right",
                      display: "flex",
                      textAlign: "right",
                    }}
                  >
                    <h4 style={{ color: "#01cb63" }}>₹2000</h4>
                    <strike style={{ fontWeight: "bold" }}>₹2000</strike>
                  </Col>
                </Row>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br />
      <img src="img4.png" alt="" style={{ width: "100%" }} />
      <Row style={{ padding: "0 5%" }}>
        <Col md={3} style={{ padding: "2%" }}>
          <Card style={{ border: "none" }}>
            <CardBody>
              <img src="img5.png" alt="" style={{ width: "100%" }} />
              <CardText
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  borderLeft: "5px solid #01cb63",
                  padding: "2%",
                  margin: "2% 0%",
                }}
              >
                ₹8,00,000
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md={3} style={{ padding: "2%" }}>
          <Card style={{ border: "none" }}>
            <CardBody>
              <img src="img6.png" alt="" style={{ width: "100%" }} />
              <CardText
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  borderLeft: "5px solid #01cb63",
                  padding: "2%",
                  margin: "2% 0%",
                }}
              >
                ₹6,00,000
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md={3} style={{ padding: "2%" }}>
          <Card style={{ border: "none" }}>
            <CardBody>
              <img src="img7.png" alt="" style={{ width: "100%" }} />
              <CardText
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  borderLeft: "5px solid #01cb63",
                  padding: "2%",
                  margin: "2% 0%",
                }}
              >
                ₹5,00,000
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md={3} style={{ padding: "2%" }}>
          <Card style={{ border: "none" }}>
            <CardBody>
              <img src="img8.png" alt="" style={{ width: "100%" }} />
              <CardText
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  borderLeft: "5px solid #01cb63",
                  padding: "2%",
                  margin: "2% 0%",
                }}
              >
                ₹4,50,000
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <img src="img2.png" alt="" style={{ width: "100%" }} />
      <img src="img18.png" alt="" style={{ width: "100%" }} />
      <Row style={{ padding: "0 8%" }}>
        <Col md={6} style={{ padding: "2%" }}>
          <Card
            style={{
              borderRadius: "5px",
              border: "none",
              boxShadow: "5px 5px 4px 5px #888888",
            }}
          >
            <CardBody>
              <CardText style={{ textAlign: "left", fontSize: "20px" }}>
                <br />
                <i>
                  It's A Comprehensive Online Learning Platform For Everyone
                  <br />
                  Looking To Learn And Course Pro. Providing This Platform
                  <br />
                  Which Is Very Beneficial For Practicals. Students Can Revise
                  <br />
                  Everything At Home Like Dissection And Slides
                </i>
                <br />
                <img src="img16.png" alt="" style={{ width: "100%" }} />
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md={6} style={{ padding: "2%" }}>
          <Card
            style={{
              borderRadius: "5px",
              border: "none",
              boxShadow: "5px 5px 4px 5px #888888",
            }}
          >
            <CardBody>
              <CardText style={{ textAlign: "left", fontSize: "20px" }}>
                <br />
                <i>
                  It's A Comprehensive Online Learning Platform For Everyone
                  <br />
                  Looking To Learn And Course Pro. Providing This Platform
                  <br />
                  Which Is Very Beneficial For Practicals. Students Can Revise
                  <br />
                  Everything At Home Like Dissection And Slides
                </i>
                <br />
                <img
                  src="img17.png"
                  alt=""
                  style={{ width: "100%", marginTop: "1%" }}
                />
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <img src="img19.png" alt="" style={{ width: "100%" }} />
      <Row style={{ backgroundColor: "#f8f9fb", padding: "0% 5%" }}>
        <Col md={5} style={{ padding: "5%" }}>
          <img src="img21.png" alt="" style={{ width: "100%" }} />
        </Col>
        <Col
          md={7}
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            padding: "4%",
            textAlign: "justify",
          }}
        >
          <Form>
            <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
              Fill up the form and our team will get back to you within 24 hours
            </h3>
            <br />
            <br />
            <br />
            <Row>
              <Col xs={6}>
                <FormGroup>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    style={{
                      borderBottom: "2px solid #01cb63",
                      borderRight: "none",
                      borderTop: "none",
                      borderLeft: "none",
                      backgroundColor: "#f8f9fb",
                      borderRadius: "0px",
                      fontStyle: "italic",
                    }}
                  />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="text"
                    style={{
                      borderBottom: "2px solid #01cb63",
                      borderRight: "none",
                      borderTop: "none",
                      borderLeft: "none",
                      backgroundColor: "#f8f9fb",
                      borderRadius: "0px",
                      fontStyle: "italic",
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={6}>
                <FormGroup>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    type="text"
                    style={{
                      borderBottom: "2px solid #01cb63",
                      borderRight: "none",
                      borderTop: "none",
                      borderLeft: "none",
                      backgroundColor: "#f8f9fb",
                      borderRadius: "0px",
                      fontStyle: "italic",
                    }}
                  />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    style={{
                      borderBottom: "2px solid #01cb63",
                      borderRight: "none",
                      borderTop: "none",
                      borderLeft: "none",
                      backgroundColor: "#f8f9fb",
                      borderRadius: "0px",
                      fontStyle: "italic",
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12}>
                <FormGroup>
                  <Input
                    id="message"
                    name="message"
                    placeholder="Message"
                    type="text"
                    style={{
                      border: "2px solid #01cb63",
                      backgroundColor: "#f8f9fb",
                      borderRadius: "0px",
                      fontStyle: "italic",
                      height: "160px",
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <center>
              <Button
                outline
                color="link"
                style={{
                  color: "white",
                  borderRadius: "5px",
                  backgroundColor: "black",
                  padding: "2% 7%",
                }}
              >
                <i>Submit</i>
              </Button>
            </center>
          </Form>
        </Col>
      </Row>
      <img src="img20.png" alt="" style={{ width: "100%", padding: "2%" }} />
    </div>
  );
}

export default App;
