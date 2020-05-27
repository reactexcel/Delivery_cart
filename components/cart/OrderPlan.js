import { connect } from "react-redux";
import { addMinutes, eachHourOfInterval, format } from "date-fns";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { changeDay, changeTime } from "../../store/action/action";

const OrderPlan = ({
  changeDay,
  changeTime,
  day,
  datetime,
  delivery,
  deliveryAddress,
  handleDatetime,
  modal,
  restaurantData: { address: restaurantAddress, closeTime, openTime, openDays },
  setModal,
  time,
}) => {
  const [timeIntervals, setTimeIntervals] = React.useState([]);
  React.useEffect(() => {
    // const now = new Date(Date.now());
    // const day = format(now, "eee");
    // const date = now.getDate();
    // const time = format(now, "HH:mm");
    // console.log(day, date, time);

    const increments = eachHourOfInterval({
      start: new Date().setHours(openTime),
      end: new Date().setHours(closeTime - 1),
    }).flatMap((hour) =>
      [0, 15, 30, 45].map((increment) =>
        format(addMinutes(hour, increment), "HH:mm")
      )
    );

    const timeIntervals = increments.map((increment, index) =>
      increments[index + 1]
        ? `${increment} - ${increments[index + 1]} PM`
        : `${increment} - ${closeTime}:00 PM`
    );

    setTimeIntervals([...timeIntervals]);
  }, [datetime, closeTime, openTime]);

  return datetime ? (
    <>
      <UncontrolledDropdown className="btn-group">
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          className="mb-3"
          color="warning"
          data-toggle="dropdown"
          type="button"
          style={{
            backgroundColor: "#EBEBEB",
            borderRadius: "100px",
            color: "#262626",
            fontSize: "13px",
            fontWeight: "400",
            borderColor: "#EBEBEB",
            padding: "5px 5vh",
            minWidth: "200px",
          }}
        >
          {day ? day : "Select Day"}
        </DropdownToggle>
        <DropdownMenu>
          {openDays.map((openDay) => (
            <DropdownItem key={openDay} onClick={() => changeDay(openDay)}>
              {openDay}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown className="btn-group">
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          className="mb-3"
          color="warning"
          data-toggle="dropdown"
          type="button"
          style={{
            backgroundColor: "#EBEBEB",
            borderRadius: "100px",
            color: "#262626",
            fontSize: "13px",
            fontWeight: "400",
            borderColor: "#EBEBEB",
            padding: "5px 5vh",
            minWidth: "200px",
          }}
        >
          {time ? time : "Select Time"}
        </DropdownToggle>
        <DropdownMenu>
          {timeIntervals.map((timeInterval) => (
            <DropdownItem
              key={timeInterval}
              onClick={() => changeTime(timeInterval)}
            >
              {timeInterval}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  ) : (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            minWidth: "42px",
            minHeight: "42px",
          }}
        >
          <i className="fa fa-calendar fa-lg" />
        </div>

        <div
          style={{
            padding: "0px 6px 0px 6px",
            fontSize: "13px",
            fontWeight: "500",
            textAlign: "left",
          }}
        >
          {day ? (
            <p
              style={{
                fontSize: "13px",
                fontWeight: "500",
                textAlign: "left",
              }}
            >
              {day}
              <br />
              {time}
            </p>
          ) : (
            "Choose date & time"
          )}
        </div>
        <Button
          style={{
            borderRadius: "50px",
            minWidth: "110px",
          }}
          onClick={handleDatetime}
        >
          Schedule
        </Button>
      </div>
      <hr />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            minWidth: "42px",
            minHeight: "42px",
          }}
        >
          <i className="fa fa-map-marker fa-lg" />
        </div>

        <div
          style={{
            fontSize: "13px",
            fontWeight: "500",
            textAlign: "left",
          }}
        >
          {delivery ? deliveryAddress : restaurantAddress}
        </div>
        <Button
          style={{
            borderRadius: "50px",
            minWidth: "110px",
          }}
          onClick={() =>
            delivery
              ? setModal(!modal)
              : window.open("https://g.page/souvlakiex?share", "_blank")
          }
        >
          {delivery ? "Choose" : "Map"}
        </Button>
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
    changeSelectOption: (value) => {
      dispatch(changeSelectOption(value));
    },
    changeDay: (value) => {
      dispatch(changeDay(value));
    },
    changeTime: (value) => {
      dispatch(changeTime(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPlan);
