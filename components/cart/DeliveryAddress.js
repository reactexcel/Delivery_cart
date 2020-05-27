import { Button, Modal } from "reactstrap";
import { loadScript, handleScriptLoad } from "../../utils";

const apiKey = "AIzaSyDKPAhIFeLEO6z1eIZfRxKI09Hzic4QUOc";

const DeliveryAddress = ({ changeDeliveryAddress, modal, setModal }) => {
  const [address, setAddress] = React.useState("");
  const autoCompleteRef = React.useRef(null);

  React.useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`,
      () => handleScriptLoad(setAddress, autoCompleteRef)
    );
  }, []);

  return (
    <Modal
      isOpen={modal}
      toggle={() => setModal(false)}
      modalClassName="modal-register"
    >
      <div className="modal-header no-border-header text-center">
        <button
          aria-label="Close"
          className="close"
          data-dismiss="modal"
          onClick={() => setModal(false)}
        >
          <span aria-hidden={true}>×</span>
        </button>
        <h6 className="text-muted">Search and add your delivery address</h6>
      </div>
      <div className="modal-body" style={{ display: "flex" }}>
        <input
          ref={autoCompleteRef}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Delivery Address"
          value={address}
          className="form-control-plaintext"
          style={{ fontWeight: "500", border: "1px solid" }}
        />
        <Button
          onClick={() => {
            changeDeliveryAddress(address);
            setModal(false);
          }}
          style={{ backgroundColor: "#F08B2A" }}
        >
          SAVE
        </Button>
      </div>
    </Modal>
  );
};

export default DeliveryAddress;
