import Router from "next/router";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { Layout } from "../layout";
import { Cart } from "../components/cart";
import { PaymentForm } from "../components/checkout";
import { addToCart, removeFromCart } from "../store/action/action";
import axios from "axios";

const paymentEndpoints = {
  localhost:
    "http://localhost:5000/dev-menucloud-io/us-central1/order/createPayment",
  cloud:
    "https://us-central1-dev-menucloud-io.cloudfunctions.net/order/createPayment",
};
const paymentRequestObject = {
  method: "POST",
  url: paymentEndpoints.cloud,
  headers: {
    Authorization: "Bearer " + "arnB0TvB9PC77SamCX861l9lfBCkQKjg1Ht28j8C",
  },
  data: {
    restaurantId: "rest_LZEJIUOrluh56IG6BOnE",
    vendorId: "vnd_jMQRGb1P1P1OMOnigcWL",
  },
};

class Alpha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPickup: true,
      loading: false,
      showCheckoutMessage: false,
      paymentData: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        guide: "",
        card_number: "",
        cvv: "",
        card_expiry: "",
        tax: 1.4,
        cart: this.props.cart,
        total:
          Math.round(
            this.props.cart.reduce(
              (acc, curr) => (acc += curr.price * curr.quantity),
              0
            ) *
              1.4 *
              100
          ) / 100,
      },
    };
  }

  componentWillMount() {
    if (process.browser) {
      const plugin = document.createElement("script");
      plugin.setAttribute(
        "src",
        "https://api.demo.convergepay.com/hosted-payments/Checkout.js"
      );
      plugin.async = true;
      document.head.appendChild(plugin);
    }
  }

  addToCart = (value) => {
    this.props.addToCart(value, this.props.cart);
  };

  removeFromCart = (value) => {
    this.props.removeFromCart(value, this.props.cart);
  };

  changeModel = () => {
    this.setState({ showModel: !this.state.showModel });
  };

  changePayment = (field) => (e) => {
    this.setState({
      paymentData: {
        ...this.state.paymentData,
        [field]: e.target.value,
      },
    });
  };

  handlePayment = async () => {
    this.setState({ loading: true });
    const { paymentData } = this.state;
    console.log(paymentData);

    let converge = window.ConvergeEmbeddedPayment;

    const tokenEndpoints = {
      localhost:
        "http://localhost:5000/dev-menucloud-io/us-central1/order/getElavonToken",
      cloud:
        "https://us-central1-dev-menucloud-io.cloudfunctions.net/order/getElavonToken",
    };
    let tokenRequestObject = {
      method: "POST",
      url: tokenEndpoints.cloud,
      headers: {
        Authorization: "Bearer " + "arnB0TvB9PC77SamCX861l9lfBCkQKjg1Ht28j8C",
      },
      data: {
        ssl_amount: paymentData.total,
        ssl_first_name: paymentData.first_name,
        ssl_last_name: paymentData.last_name,
        restaurantId: "rest_LZEJIUOrluh56IG6BOnE",
        vendorId: "vnd_jMQRGb1P1P1OMOnigcWL",
      },
    };

    try {
      let tokenResponse = (await axios(tokenRequestObject)).data;
      paymentData.token = tokenResponse.tokenResponse;
      console.log(paymentData.token);
    } catch (error) {
      console.log("Error while generating a new token");
      console.log(error.message);
    }

    const callback = {
      onError: async (error) => {
        console.error("error", error);
        this.setState({
          showCheckoutMessage: "Error - Check Card Details!",
          loading: false,
        });
      },
      onDeclined: async (response) => {
        console.log("declined: ", response);
        this.setState({
          showCheckoutMessage: "Declined - Check Card Details!",
          loading: false,
        });
      },
      onApproval: async (response) => {
        console.log("approved: ", response);
        this.setState({ showCheckoutMessage: "Approved - Order Placed!" });
        let transactionObject = {
          ...paymentRequestObject,
          ...response,
          payment_processor: "Elavon",
        };
        await axios(transactionObject)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
        this.setState({ loading: false });
      },
    };

    await converge.pay(
      {
        ssl_card_number: paymentData.card_number,
        ssl_exp_date: paymentData.card_expiry,
        ssl_cvv2cvc2: paymentData.cvv,
        ssl_txn_auth_token: paymentData.token,
        ssl_amount: paymentData.amount,
        ssl_first_name: paymentData.first_name,
        ssl_last_name: paymentData.last_name,
        ssl_merchant_txn_id: "0019080",
        ssl_transaction_type: "ccsale",
        ssl_get_token: "y",
        ssl_add_token: "y",
        extra_data: "data",
        items: "items",
        ssl_email: paymentData.email,
      },
      callback
    );
  };

  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-8  text-left mb-4">
              <Button
                style={{
                  margin: "5px 0px",
                  borderRadius: "100px",
                  backgroundColor: "#F08B2A",
                  border: "none",
                  fontWeight: "400",
                }}
                className="text-left mb-3"
                onClick={() => Router.push("/")}
              >
                Go Back
              </Button>
              <h3 className="mb-3" style={{ fontWeight: "600" }}>
                Your Order Details:{" "}
              </h3>
              <hr />
              <h1
                style={{
                  width: "100%",
                  borderRadius: "0px 100px 100px 0px",
                  padding: "10px",
                  color: "white",
                  paddingLeft: "20px",
                  fontWeight: "500",
                  fontWeight: "500",

                  backgroundColor: "#F08B2A",
                  borderColor: "#F08B2A",
                }}
              >
                {this.props.method}
              </h1>
              <div style={{ padding: "20px" }}>
                <p style={{ fontSize: "16px", fontWeight: "500" }}>
                  <i className="fa fa-calendar"></i>{" "}
                  {this.props.day
                    ? this.props.day + " From " + this.props.time
                    : "ASAP"}
                </p>
                <hr />
                <p style={{ fontSize: "16px", fontWeight: "500" }}>
                  <i className="fa fa-map-marker"></i>{" "}
                  {this.props.method === "Pickup"
                    ? "82 Ontario St, Toronto, ON  M5A 1P8"
                    : "Your Home Address"}
                </p>
              </div>
              <div className="google-maps">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5772.410854306101!2d-79.37281933107256!3d43.66469727901844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb38c7748175%3A0x7c836e8530b08efb!2sSouvlaki%20Express!5e0!3m2!1sen!2s!4v1588606671468!5m2!1sen!2s"
                  width="650"
                  height="200"
                  frameBorder="0"
                  style={{ border: "0", borderRadius: "50px" }}
                  allowFullScreen=""
                  area-hidden="true"
                  tabIndex="0"
                ></iframe>
              </div>
              <PaymentForm
                isDelivery={this.props.method !== "Pickup"}
                changePayment={this.changePayment}
              />
            </div>
            <div className="col-md-4">
              <Cart
                loading={this.state.loading}
                getValue={this.addToCart}
                minusValue={this.removeFromCart}
                handlePayment={this.handlePayment}
                showMessage={this.state.showCheckoutMessage}
              />
            </div>
          </div>
          <br />
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart,
    method: state.store.method,
    time: state.store.time,
    SelectedSchedule: state.store.selectedData,
    day: state.store.day,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    addToCart: (value, state) => {
      dispatch(addToCart(value, state));
    },
    removeFromCart: (value, state) => {
      dispatch(removeFromCart(value, state));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProp)(Alpha);
