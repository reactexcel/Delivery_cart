import { connect } from "react-redux";
import { Button, CardBody } from "reactstrap";
import OrderItem from "./OrderItem";

const Cart = ({
  cart,
  checkEverything,
  handlePayment,
  isMenu,
  isMobile,
  loading,
  restaurantData,
  showMessage,
  setShowMobileCart,
}) => {
  const [items, setItems] = React.useState(0);
  const [subtotal, setSubtotal] = React.useState(0);
  const [tax, setTax] = React.useState(0);
  const [tip, setTip] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const computeCart = () => {
    const subtotal = Number(
      cart.reduce(
        (total, item) => total + item.price * item.quantity,
        isMenu ? 0 : restaurantData.deliveryFee
      )
    );

    const tax = Number(subtotal * 0.1);
    const total = Number(subtotal + tax + tip);

    setSubtotal(subtotal.toFixed(2));
    setTax(tax.toFixed(2));
    setTotal(total.toFixed(2));
    setItems(cart.reduce((sum, item) => sum + item.quantity, 0));
  };

  React.useEffect(() => {
    computeCart();
  }, [cart]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        border: "1px solid",
        borderColor: "#DCDCDC",
        borderRadius: "1.6em",
      }}
    >
      <CardBody style={{ padding: "0px" }}>
        <div
          style={{
            textAlign: "left",
            backgroundColor: "gainsboro",
            borderRadius: "15px 15px 0px 0px",
            padding: "10px 20px",
          }}
        >
          <span style={{ color: "#F08B2A", fontWeight: "600" }}>
            {items} items{" "}
          </span>
          in your order
          {isMobile && (
            <button className="close" onClick={() => setShowMobileCart(false)}>
              <span aria-hidden={true}>X</span>
            </button>
          )}
        </div>

        {cart &&
          cart.map((item, index) => (
            <OrderItem key={item.itemName + index} item={item} />
          ))}

        {cart.length > 0 && (
          <div style={{ padding: "20px" }}>
            {!isMenu && (
              <>
                <h6 className="text-left">
                  <span>DELIVERY</span>{" "}
                  <span style={{ float: "right", fontWeight: "400" }}>
                    ${restaurantData.deliveryFee}
                  </span>
                </h6>
                <hr />
              </>
            )}
            <h6 className="text-left">
              <span>SUBTOTAL</span>
              <span style={{ float: "right", fontWeight: "400" }}>
                ${subtotal}{" "}
              </span>
            </h6>
            <h6 className="text-left mb-4">
              <span>TAXES</span>
              <span style={{ float: "right", fontWeight: "400" }}>${tax}</span>
            </h6>
            <h5 className="text-left">
              <span style={{ fontWeight: "500" }}>Total</span>
              <span style={{ fontWeight: "700", float: "right" }}>
                ${total}
              </span>
            </h5>
            <hr />
          </div>
        )}
        {cart.length > 0 ? (
          isMenu ? (
            <Button
              style={{
                textAlign: "left",
                // margin: "5px 0px",
                borderRadius: isMobile ? "0px" : "100px",
                backgroundColor: "#F08B2A",
                border: "none",
              }}
              className={isMobile ? "fixed-bottom" : "mb-3"}
              onClick={checkEverything}
              size="lg"
              block={isMobile ? true : false}
            >
              {isMobile ? (
                <>
                  Checkout ({items} ITEMS )
                  <span className="float-right">${total}</span>
                </>
              ) : (
                `Checkout (${items} ITEMS ) $${total}`
              )}
            </Button>
          ) : (
            <Button
              style={{
                textAlign: "left",
                margin: "5px 0px",
                borderRadius: "100px",
                backgroundColor: "#F08B2A",
                border: "none",
              }}
              className="mb-3"
              onClick={handlePayment}
            >
              {loading ? (
                <div className="loader" />
              ) : (
                `Place Order ( ${items} ITEMS ) $${total}`
              )}
            </Button>
          )
        ) : (
          <div className="mb-5"></div>
        )}
        {isMenu && showMessage && (
          <p
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "red",
              padding: "6px",
            }}
          >
            Hey, pick time and date for your order!
          </p>
        )}
        {!isMenu && showMessage && (
          <p
            style={{
              fontSize: "14px",
              fontWeight: "400",
              padding: "6px",
            }}
          >
            {showMessage}
          </p>
        )}
      </CardBody>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart,
    day: state.store.day,
    method: state.store.method,
    restaurantData: state.store.restaurantData,
    selectedData: state.store.selectedData,
    time: state.store.time,
  };
}

export default connect(mapStateToProps)(Cart);
