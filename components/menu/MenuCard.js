import ItemModal from "./ItemModal";

const MenuCard = ({ addToCart, item }) => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div className="col-md-6">
      <div style={{ width: "100%" }}>
        <div className="row text-left mb-3" onClick={() => setOpenModal(true)}>
          <hr />
          <div className="col-md-12">
            <h4
              style={{
                margin: "0",
                fontSize: "16px",
                fontWeight: "600",
                color: "#353535",
              }}
            >
              {item.itemName}
            </h4>
            <p style={{ fontSize: "14px", color: "#262626", marginTop: "5px", opacity: "70%" }}>
              {item.details}
            </p>
          </div>
          <div className="col-md-6 col-6">
            <p
              style={{
                fontWeight: "600",
                margin: "0",
                marginTop: "5px",
                fontSize: "14px",
                opacity: "40%"
              }}
            >
              ${item.price}
            </p>
          </div>
        </div>
      </div>

      {openModal && (
        <ItemModal
          addToCart={addToCart}
          item={item}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      <hr className="d-block d-sm-none d-lg-none" />
    </div>
  );
};

export default MenuCard;
