import { Alert, Button, FormGroup, Input, Modal } from "reactstrap";
import ItemSelection from "./ItemSelection";

const ItemModal = ({
  addToCart,
  cart,
  item,
  openModal,
  setOpenModal,
  updateCart,
  updateOrder,
}) => {
  const [data, setData] = React.useState([]);
  const [quantity, setQuantity] = React.useState(item.quantity);
  const [total, setTotal] = React.useState(item.price);
  const [warning, setWarning] = React.useState(false);

  const modifyQuantity = (action) => {
    if (action === "+") {
      setQuantity(quantity + 1);
      setTotal(total + item.price);
    } else if (action == "-") {
      if (quantity - 1 > 0) {
        setQuantity(quantity - 1);
        setTotal(total - item.price);
      }
      if (updateOrder && quantity === 1) {
        updateCart({ ...item, quantity: 0 }, cart);
        setOpenModal(false);
      }
    }
  };

  const modifyItem = (addedItem) => {
    const checkName = data.filter((item) => item.name === addedItem.name);
    console.log(data);

    if (checkName.length === 0) {
      setData([...data, addedItem]);
    } else {
      addedItem.quantity === 0
        ? setData([...data.filter((item) => item.name !== addedItem.name)])
        : setData([
            ...data.filter((item) => item.name !== addedItem.name),
            addedItem,
          ]);
    }
  };

  const checkBeforeAddingToCart = () => {
    // const selections = selections.map((selection) => ({
    //   selectionName: selection.selectOptionText,
    //   requiredQuantity: selection.requiredQuantity,
    // }));
    // console.log(minSelectedItems);

    const quantities = data.reduce((sum, item) => sum + item.quantity, 0);
    if (
      (!updateOrder && item.minSelectedItems === undefined) ||
      item.minSelectedItems === quantities
    ) {
      addToCart(
        {
          ...item,
          total,
          quantity,
          options: data,
          isDetailed: true,
        },
        cart
      );
      setData([]);
      setOpenModal(false);
    } else if (updateOrder) {
      updateCart(
        {
          ...item,
          quantity,
        },
        cart
      );
      setData([]);
      setOpenModal(false);
    } else {
      setWarning(true);
    }
  };

  return (
    <Modal isOpen={openModal} toggle={() => setOpenModal(false)}>
      <div
        className="modal-header"
        style={{
          background:
            'url("https://res.cloudinary.com/dcw1i97ph/image/upload/v1589381223/cheese-164872_1280_fdwvcq.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          position: "relative",
          height: "33vh",
          backgroundSize: "cover",
        }}
      >
        <button
          className="close"
          style={{ backgroundColor: "white" }}
          onClick={() => setOpenModal(false)}
        >
          <span aria-hidden={true}>X</span>
        </button>
      </div>

      <div className="modal-body">
        <h3 className="text-center">{item.itemName}</h3>
        <p style={{ padding: "0px 20px" }}>{item.details}</p>
        {item.selections
          ? item.selections.map((selection, key) => (
              <div key={key}>
                <div className="row mb-4">
                  <div
                    className="col"
                    style={{
                      backgroundColor: "#EBEBEB",
                      padding: "20px",
                    }}
                  >
                    <h3 style={{ fontWeight: "400" }}>
                      {selection.selectOptionText}
                    </h3>
                    <p>Choose Exactly {selection.requiredQuantity}</p>
                  </div>
                </div>
                <div
                  className="row mb-4"
                  style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
                >
                  {selection.options.map((option) => (
                    <ItemSelection
                      key={option.itemName}
                      option={option}
                      selectionName={selection.selectOptionText}
                      modifyItem={modifyItem}
                    />
                  ))}
                </div>
              </div>
            ))
          : null}
        <FormGroup>
          <label htmlFor="details">
            {" "}
            <h4>Special Instructions</h4>
          </label>
          <Input
            id="details"
            type="textarea"
            rows="3"
            style={{ borderRadius: "25px", padding: "10px" }}
          ></Input>
        </FormGroup>
        <hr />
      </div>
      <div className="row" style={{ margin: " 0px 7px" }}>
        <div className="col">
          <Button
            style={{ margin: "0px 5px" }}
            color="info"
            className="btn-just-icon"
            size="sm"
            onClick={() => modifyQuantity("+")}
          >
            {" "}
            <i className="fa fa-plus"></i>{" "}
          </Button>
          <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
            {quantity}
          </span>
          <Button
            style={{ margin: "0px 7px" }}
            color="info"
            className="btn-just-icon"
            size="sm"
            onClick={() => modifyQuantity("-")}
          >
            {" "}
            <i className="fa fa-minus"></i>
          </Button>{" "}
          <Button
            style={{
              margin: "10px 20px",
              borderRadius: "100px",
              padding: "10px 30px",
              backgroundColor: "#F08B2A",
              border: "none",
            }}
            type="button"
            onClick={() => {
              checkBeforeAddingToCart();
            }}
          >
            {updateOrder ? "Update Order" : `Add To Cart ( $ ${total} )`}
          </Button>
          {warning && (
            <Alert color="danger">
              Choose the right amount of items for each selection.
            </Alert>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ItemModal;
