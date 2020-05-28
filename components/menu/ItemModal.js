import { Alert, Button, FormGroup, Input, Modal } from "reactstrap";
import ItemSelection from "./ItemSelection";
import closeImage from "../../assets/close.svg";
import PlusMinusButton from "../generic/PlusMinusButton";

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

  const extras = [
    {
      name: "Pickles",
      price: "$0.50",
    },
    {
      name: "American Cheese",
      price: "$0.50",
    },
    {
      name: "Meat",
      price: "$0.50",
    },
  ];

  return (
    <Modal
      isOpen={openModal}
      toggle={() => setOpenModal(false)}
      style={{ borderRadius: "20px" }}
    >
      <div
        className="modal-header"
        style={{
          background:
            'url("https://res.cloudinary.com/dcw1i97ph/image/upload/v1589381223/cheese-164872_1280_fdwvcq.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          position: "relative",
          height: "200px",
          borderRadius: "20px 20px 0 0",
          backgroundSize: "cover",
        }}
      >
        <button
          className="close"
          style={{ backgroundColor: "rgba(255, 255, 255)" }}
          onClick={() => setOpenModal(false)}
        >
          {/* <span aria-hidden={true}>X</span> */}
          <img src={closeImage} width="10" height="10" />
        </button>
      </div>

      <div className="modal-body">
        <div className="text-center modal-block mb-4">
          <h3>{item.itemName}</h3>
          <p
            style={{
              fontSize: "14px",
              color: "#262626",
              marginTop: "5px",
              opacity: "55%",
              fontWeight: "600",
            }}
          >
            {item.details}
          </p>
        </div>
        {/* <div
          className="modal-block bg-eee"
        >
          <h4 className="m-0">Choose Four Skewers</h4>
          <div
            style={{
              fontSize: "14px",
              color: "#262626",
              marginTop: "5px",
              opacity: "55%",
              fontWeight: "600",
            }}
          >
            choose exaclty 4
          </div>
        </div> */}
        {item.selections
          ? item.selections.map((selection, key) => (
              <div key={key}>
                <div
                  className="modal-block mb-4"
                  style={{
                    backgroundColor: "#EBEBEB",
                  }}
                >
                  <div
                    className="col"
                    style={{
                      padding: "40px 0",
                    }}
                  >
                    <h4 className="m-0 font-weight-bold">
                      {selection.selectOptionText}
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#262626",
                        marginTop: "5px",
                        opacity: "55%",
                        fontWeight: "600",
                      }}
                    >
                      Choose Exactly {selection.requiredQuantity}
                    </p>
                  </div>
                </div>
                <div
                  className="modal-block mb-4 d-flex flex-wrap"
                  // style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
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
        <div className="modal-block">
          <label htmlFor="details">
            {" "}
            <h4 className="font-weight-bold">Extras</h4>
          </label>
          <hr />
          <div className="d-flex flex-wrap modal-block">
            {extras.map((extra, i) => (
              <div className="w-50" key={i}>
                <div className="input-checkbox-container">
                  <input
                    // id="details"
                    checked
                    className="custom"
                    type="checkbox"
                    // rows="3"
                    // style={{ borderRadius: "25px", padding: "10px" }}
                  />
                  <span class="checkmark"></span>
                </div>

                <div className="wrap-in-between">
                  <div className="line-in-between">
                    <div className="text-in-between font-weight-bold">
                      {extra.name}
                    </div>
                    <div className="text-in-between">{extra.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <FormGroup className="modal-block">
          <label htmlFor="details">
            <h4 className="mb-3 font-weight-bold">Special Instructions</h4>
          </label>
          <Input
            id="details"
            type="textarea"
            rows="5"
            style={{ borderRadius: "20px", padding: "10px" }}
          ></Input>
        </FormGroup>
      </div>
      <div className="d-flex align-items-center modal-block mb-5">
        <PlusMinusButton type="minus" onClick={() => modifyQuantity("-")} />
        <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>
          {quantity}
        </span>
        <PlusMinusButton type="plus" onClick={() => modifyQuantity("+")} />
        <Button
          style={{
            margin: "10px 20px",
            borderRadius: "100px",
            padding: "10px 40px",
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
    </Modal>
  );
};

export default ItemModal;
