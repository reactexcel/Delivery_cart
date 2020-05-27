import { connect } from "react-redux";
import { Button } from "reactstrap";
import { ItemModal } from "../menu";
import { addToCart, updateCart } from "../../store/action/action";

const OrderItem = ({ addToCart, updateCart, cart, item }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);

  return (
    <div
      className="text-left mt-3"
      style={{ cursor: "pointer" }}
      onClick={() => {
        setOpenModal(true);
        setShowEdit(false);
      }}
      onMouseEnter={() => setShowEdit(true)}
      onMouseLeave={() => setShowEdit(false)}
    >
      <div style={{ padding: "5px 0px" }}>
        <Button
          size="sm"
          style={{
            fontWeight: "400",
            color: "#353535",
            backgroundColor: "#CCCCCC",
            borderRadius: "100px",
            border: "none",
          }}
          className="btn-just-icon "
        >
          {item.quantity}
        </Button>
        <span
          style={{
            fontWeight: "600",
            color: "#353535",
            marginLeft: "10px",
          }}
        >
          {item.itemName}
        </span>
        {showEdit ? (
          <span style={{ float: "right", textDecoration: "underline" }}>
            Edit Item
          </span>
        ) : (
          <span style={{ fontWeight: "500", color: "#353535", float: "right" }}>
            ${item.price}
          </span>
        )}
        {item.isDetailed
          ? item.options.map((option) => (
              <p key={option.name} style={{ padding: "2px 0px" }}>
                +{option.quantity} {option.name}
              </p>
            ))
          : null}
      </div>
      <hr className="" />
      {openModal && (
        <ItemModal
          addToCart={addToCart}
          cart={cart}
          item={item}
          openModal={openModal}
          updateCart={updateCart}
          setOpenModal={setOpenModal}
          updateOrder={true}
        />
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    addToCart: (value, state) => {
      dispatch(addToCart(value, state));
    },
    updateCart: (value, state) => {
      dispatch(updateCart(value, state));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProp)(OrderItem);
