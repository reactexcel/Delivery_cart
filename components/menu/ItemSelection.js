import { Button } from "reactstrap";

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
      <div className="col-6" style={{ padding: "10px" }}>
        <Button
          style={{
            margin: "0px 5px",
            backgroundColor: "#CCCCCC",
            border: "none",
            color: "#353535",
          }}
          className="btn-just-icon"
          size="sm"
          onClick={(e) => modifyQuantity("+")}
        >
          {" "}
          <i className="fa fa-plus"></i>{" "}
        </Button>
        <span style={{ fontSize: "1rem", fontWeight: "500" }}>{quantity}</span>
        <Button
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
        </Button>

        <p
          style={{
            display: "inline-block",
            margin: "0px 5px",
            fontWeight: "500",
          }}
        >
          {props.option.itemName}
        </p>
      </div>
    </>
  );
};

export default ItemSelection;
