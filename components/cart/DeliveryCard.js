import { connect } from "react-redux";
import { Button, Card, CardBody, CardText } from "reactstrap";
import {
  changeDeliveryAddress,
  changeDay,
  changeMethod,
  changeTime,
} from "../../store/action/action";

import DeliveryAddress from "./DeliveryAddress";
import OrderPlan from "./OrderPlan";

const DeliveryCard = ({
  day,
  time,
  changeDay,
  changeTime,
  changeMethod,
  changeDeliveryAddress,
  restaurantData: { allowPickup, allowDelivery },
}) => {
  const [delivery, setDelivery] = React.useState(allowDelivery);
  const [datetime, setDatetime] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    if (day && time) {
      setDatetime(false);
    }
  }, [day, time]);

  const handleDatetime = () => {
    setDatetime(!datetime);
    changeDay(false);
    changeTime(false);
  };

  const handleMethod = (trueOrFalse) => {
    changeMethod(trueOrFalse ? "Delivery" : "Pickup");
    setDelivery(trueOrFalse);
  };

  return (
    <>
    <p className="mb-3" style={{fontSize: "28px"}}>ORDER FOR</p>
    <div
      style={{
        width: "100%",
        display: "flex",
        border: "1px solid",
        borderColor: "#DCDCDC",
        borderRadius: "2em",
      }}
    >
      <CardBody className="text-center" style={{ padding: "0px" }}>
        <CardText>
          {allowPickup && (
            <Button
              style={{
                fontSize: "16px",
                fontWeight: 300,
                width: allowDelivery ? "50%" : "100%",
                borderRadius: "100px 0px 0px 100px",
                padding: "10px",
                backgroundColor: delivery ? "#DCDCDC" : "#F08B2A",
                borderColor: delivery ? "#DCDCDC" : "#F08B2A",
              }}
              onClick={() => allowDelivery && handleMethod(!delivery)}
            >
              {" "}
              Pickup{" "}
              <i
                className={delivery ? "fa fa-angle-right" : "fa fa-angle-down"}
              />
            </Button>
          )}

          {allowDelivery && (
            <Button
              style={{
                fontSize: "16px",
                fontWeight: 300,
                width: allowPickup ? "50%" : "100%",
                borderRadius: "0px 100px 100px 0px",
                padding: "10px",
                backgroundColor: delivery ? "#F08B2A" : "#DCDCDC",
                borderColor: delivery ? "#F08B2A" : "#DCDCDC",
              }}
              onClick={() => allowPickup && handleMethod(!delivery)}
            >
              {" "}
              Delivery{" "}
              <i
                className={delivery ? "fa fa-angle-down" : "fa fa-angle-right"}
              />
            </Button>
          )}
        </CardText>

        <OrderPlan
          delivery={delivery}
          datetime={datetime}
          handleDatetime={handleDatetime}
          modal={modal}
          setModal={setModal}
        />

        {modal && (
          <DeliveryAddress
            modal={modal}
            setModal={setModal}
            changeDeliveryAddress={changeDeliveryAddress}
          />
        )}
      </CardBody>
    </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    day: state.store.day,
    deliveryAddress: state.store.deliveryAddress,
    method: state.store.method,
    selectedData: state.store.selectedData,
    time: state.store.time,
    restaurantData: state.store.restaurantData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeDeliveryAddress: (value) => {
      dispatch(changeDeliveryAddress(value));
    },
    changeDay: (value) => {
      dispatch(changeDay(value));
    },
    changeTime: (value) => {
      dispatch(changeTime(value));
    },
    changeMethod: (value) => {
      dispatch(changeMethod(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryCard);
