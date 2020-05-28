import { Button } from "reactstrap";
import PlusMinusButton from "../generic/PlusMinusButton";

const ItemSelection = (props) => {
  const [quantity, setQuantity] = React.useState(0);

  const modifyQuantity = (action) => {
    if (action === "+") {
      props.modifyItem({
        name: props.option.itemName,
        from: props.selectionName,
        quantity: quantity + 1,
      });
      setQuantity(quantity + 1);
    } else if (action == "-") {
      if (quantity > 0) {
        props.modifyItem({
          name: props.option.itemName,
          from: props.selectionName,
          quantity: quantity - 1,
        });
        setQuantity(quantity - 1);
      }
    }
  };

  return (
    <>
      <div
        className="col-6 font-weight-bold d-flex align-items-center"
        style={{ padding: "10px 0", fontSize: 13 }}
      >
        <div className="d-flex align-items-center">
          <PlusMinusButton type="minus" onClick={(e) => modifyQuantity("-")} />
          {/* <Button
            style={{
              margin: "0px 5px",
              backgroundColor: "#CCCCCC",
              border: "none",
              color: "#353535",
            }}
            className="btn-just-icon"
            size="sm"
            onClick={}
          >
            {" "}
            <i className="fa fa-plus"></i>{" "}
          </Button> */}
          <span>{quantity}</span>
          <PlusMinusButton type="plus" onClick={(e) => modifyQuantity("+")} />
          {/* <Button
            style={{
              margin: "0px 5px",
              backgroundColor: "#CCCCCC",
              border: "none",
              color: "#353535",
            }}
            color="info"
            className="btn-just-icon"
            size="sm"
            onClick={() => modifyQuantity("-")}
          >
            {" "}
            <i className="fa fa-minus"></i>
          </Button> */}
        </div>

        <div
          style={{
            display: "inline-block",
            margin: "0px 5px",
          }}
        >
          {props.option.itemName}
        </div>
        <div
          className="font-weight-normal"
          style={{
            fontSize: 14,
            display: "inline-block",
            margin: "0 0 0 10px",
          }}
        >
          {props.option.price ? `+$${props.option.price}` : ""}
        </div>
      </div>
    </>
  );
};

export default ItemSelection;
