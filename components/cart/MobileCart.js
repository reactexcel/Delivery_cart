import Link from "next/link";
import { Button, CardText, Modal } from "reactstrap";

const MobileCart = (props) => {
  return (
    <Modal
      className="myclass"
      isOpen={props.CartStatus}
      toggle={() => props.CartShow(false)}
    >
      <div
        className="modal-header"
        style={{ backgroundColor: "#f44336", borderRadius: "0px" }}
      >
        <button
          aria-label="Close"
          className="close"
          data-dismiss="modal"
          type="button"
          onClick={() => props.CartShow(false)}
        >
          <span aria-hidden={true}>×</span>
        </button>
        <h5 className="modal-title text-white" style={{ fontWeight: "400" }}>
          Your Order
        </h5>
      </div>
      <div className="modal-body" style={{ padding: "20px" }}>
        {props.cart
          ? props.cart.map((item) => (
              <div key={item.itemName} className="row text-left">
                <div className="col-12">
                  <CardText>
                    <span style={{ fontWeight: "600" }}>{item.quantity} </span>x
                    <span style={{ fontWeight: "500" }}> {item.itemName} </span>
                    {item.isDetailed
                      ? item.options.map((option) => (
                          <p key={option.name}>
                            +{option.quantity} {option.name}
                          </p>
                        ))
                      : null}
                  </CardText>
                </div>
                <div className="col-6">
                  <Button
                    style={{
                      margin: "0px 5px",
                      border: "0",
                      backgroundColor: "#f44336",
                    }}
                    className="btn-just-icon"
                    size="sm"
                    onClick={() => this.props.getValue({ name: item.itemName })}
                  >
                    {" "}
                    +{" "}
                  </Button>
                  <Button
                    style={{
                      margin: "0px 5px",
                      border: "0px",
                      backgroundColor: "#f44336",
                    }}
                    color="#f44336"
                    className="btn-just-icon"
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.minusValue({ name: item.itemName });
                    }}
                  >
                    {" "}
                    -{" "}
                  </Button>
                </div>
                <div className="col-6 text-right">
                  <CardText>
                    <span style={{ fontWeight: "600" }}> $ {item.price} </span>
                  </CardText>
                </div>
              </div>
            ))
          : null}

        <h5 className="text-left">
          {" "}
          <span style={{ fontWeight: "500" }}>Total:</span>{" "}
          {props.cart ? (
            <span style={{ fontWeight: "700" }}>{props.total} </span>
          ) : (
            0
          )}
        </h5>
      </div>
      <div className="modal-footer">
        <Link href="/checkout">
          <Button
            size="lg"
            style={{ margin: "5px 5px", width: "100%" }}
            color="success"
            type="button"
            className="text-left"
          >
            CHECKOUT ( {props.cart.length} ITEMS )
            <span className="float-right">$ {props.total}</span>
          </Button>
        </Link>
      </div>
    </Modal>
  );
};

export default MobileCart;
