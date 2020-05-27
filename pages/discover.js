import { connect } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Layout } from "../layout";
import { addToCart, removeFromCart } from "../store/action/action";

class Alpha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.cart,
      showModel: false,
      selectedMethod: "",
      showSchedule: false,
    };
  }
  changeValueofSelect = (e) => {
    if (e.target.value == "schedule order") {
      this.setState({ selectedData: e.target.value, showSchedule: true });
    } else {
      this.setState({ selectedData: e.target.value, showSchedule: false });
    }
  };
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h2 style={{ fontWeight: "bold" }}>Souvlaki Express</h2>
              <p style={{ fontWeight: "400" }}>
                Greek-Mediterranean-Home-Made Salad
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Card style={{ width: "100%" }}>
                <CardBody className="text-center">
                  <CardTitle tag="h3">Order For</CardTitle>
                  <CardText style={{ padding: "30px" }}>
                    <div className="form-check-radio form-check-inline">
                      <Label check>
                        <Input
                          defaultValue="Pickup"
                          id="exampleRadiosInline1"
                          name="exampleRadiosInline"
                          type="radio"
                        ></Input>
                        Pickup
                        <span className="form-check-sign"></span>
                      </Label>
                    </div>
                    <div className="form-check-radio form-check-inline">
                      <Label check>
                        <Input
                          defaultChecked
                          defaultValue="Delivery"
                          id="exampleRadiosInline2"
                          name="exampleRadiosInline"
                          type="radio"
                        ></Input>
                        Delivery <span className="form-check-sign"></span>
                      </Label>
                    </div>
                    <br />
                    <FormGroup>
                      <Input
                        style={{ fontWeight: "bold" }}
                        className="text-center"
                        type="select"
                        onChange={this.changeValueofSelect}
                      >
                        <option value="ASAP">ASAP</option>
                        <option value="schedule order">Schedule Order</option>
                      </Input>
                    </FormGroup>
                    {this.state.showSchedule ? (
                      <div className="form-row">
                        <FormGroup className="col-md-6">
                          <Input
                            className="text-center"
                            type="select"
                            onChange={this.changeValueofSelect}
                          >
                            <option value=""> Date</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Friday">Saturaday</option>
                          </Input>
                        </FormGroup>
                        <FormGroup className="col-md-6">
                          <Input
                            className="text-center"
                            type="select"
                            onChange={this.changeValueofSelect}
                          >
                            <option value="" disabled="">
                              Time
                            </option>
                            <option value="schedule order">
                              Schedule Order
                            </option>
                            <option value="1145">11:45 - 12:00 PM</option>
                            <option value="1200">12:00 - 12:15 PM</option>
                            <option value="1215">12:15 - 12:30 PM</option>
                            <option value="1230">12:30 - 12:45 PM</option>
                            <option value="1245">12:45 - 1:00 PM</option>
                            <option value="1300">1:00 - 1:15 PM</option>
                            <option value="1315">1:15 - 1:30 PM</option>
                            <option value="1330">1:30 - 1:45 PM</option>
                            <option value="1345">1:45 - 2:00 PM</option>
                            <option value="1400">2:00 - 2:15 PM</option>
                            <option value="1415">2:15 - 2:30 PM</option>
                            <option value="1430">2:30 - 2:45 PM</option>
                            <option value="1445">2:45 - 3:00 PM</option>
                            <option value="1500">3:00 - 3:15 PM</option>
                            <option value="1515">3:15 - 3:30 PM</option>
                            <option value="1530">3:30 - 3:45 PM</option>
                            <option value="1545">3:45 - 4:00 PM</option>
                            <option value="1600">4:00 - 4:15 PM</option>
                            <option value="1615">4:15 - 4:30 PM</option>
                            <option value="1630">4:30 - 4:45 PM</option>
                            <option value="1645">4:45 - 5:00 PM</option>
                            <option value="1700">5:00 - 5:15 PM</option>
                            <option value="1715">5:15 - 5:30 PM</option>
                            <option value="1730">5:30 - 5:45 PM</option>
                            <option value="1745">5:45 - 6:00 PM</option>
                            <option value="1800">6:00 - 6:15 PM</option>
                            <option value="1815">6:15 - 6:30 PM</option>
                            <option value="1830">6:30 - 6:45 PM</option>
                            <option value="1845">6:45 - 7:00 PM</option>
                            <option value="1900">7:00 - 7:15 PM</option>
                            <option value="1915">7:15 - 7:30 PM</option>
                            <option value="1930">7:30 - 7:45 PM</option>
                            <option value="1945">7:45 - 8:00 PM</option>
                          </Input>
                        </FormGroup>
                      </div>
                    ) : null}
                  </CardText>
                  <Button
                    color="primary"
                    href="#pablo"
                    block="true"
                    onClick={(e) => e.preventDefault()}
                  >
                    Start Order
                  </Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-8">
              <div className="google-maps">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5772.410854306101!2d-79.37281933107256!3d43.66469727901844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb38c7748175%3A0x7c836e8530b08efb!2sSouvlaki%20Express!5e0!3m2!1sen!2s!4v1588606671468!5m2!1sen!2s"
                  width="600"
                  height="450"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  aria-hidden="true"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
          <br />
        </div>
        <style jsx>
          {`
            .google-maps {
                position: relative;
                padding-bottom: 75%; // This is the aspect ratio
                height: 0;
                overflow: hidden;
            }
            .google-maps iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100% !important;
                height: 50% !important;                    
          `}
        </style>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    AddToCart: (value, state) => {
      dispatch(addToCart(value, state));
    },
    RemoveFromCart: (value, state) => {
      dispatch(removeFromCart(value, state));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProp)(Alpha);
