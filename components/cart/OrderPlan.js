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
// import CalSVG from "../../assets/calendar.svg";
import calendarImage from "../../assets/calendar.svg";
import locationImage from "../../assets/location.svg";
import clockImage from "../../assets/clock.svg";
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
      <div className="align-items-center d-flex justify-content-center mt-3" style={{ color: "#F08B2A", fontSize: "20px" }}>
        <img src={clockImage} width="20" height="20" className="mr-2" />
        ASAP
      </div>
      <UncontrolledDropdown className="btn-group mt-2">
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
            color: "#888",
            fontSize: "14px",
            fontWeight: "400",
            borderColor: "#EBEBEB",
            padding: "10px 20px",
            minWidth: "220px",
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
            color: "#888",
            fontSize: "14px",
            fontWeight: "400",
            borderColor: "#EBEBEB",
            padding: "10px 20px",
            minWidth: "220px",
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
    <div className="px-4">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0px 10px",
        }}
      >
        <img src={calendarImage} width="36" height="36" />
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
          className="text-lowercase"
          style={{
            backgroundColor: "#EBEBEB",
            color: "#262626",
            borderColor: "#EBEBEB",
            borderRadius: "50px",
            minWidth: "110px",
            fontWeight: 500,
          }}
          onClick={handleDatetime}
        >
          Schedule
        </Button>
      </div>
      <hr className="mx-4" />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0px 20px",
        }}
      >
        <img src={locationImage} width="36" height="36" />
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
          className="text-lowercase"
          style={{
            backgroundColor: "#EBEBEB",
            color: "#262626",
            borderColor: "#EBEBEB",
            borderRadius: "50px",
            minWidth: "110px",
            fontWeight: 500,
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
    </div>
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
