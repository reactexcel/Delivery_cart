const Banner = ({
  restaurantData: {
    name,
    number,
    address,
    type,
    rating,
    openTime,
    deliveryFee,
    estimatedDeliveryTime,
  },
}) => {
  return (
    <div className="d-none d-md-block d-lg-block d-xl-block">
      <div
        style={{
          background: "rgba(0, 0, 0, 0.6)",
          backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)),url("https://res.cloudinary.com/dcw1i97ph/image/upload/ar_16:9,c_fill,e_sharpen,g_auto,h_847,w_1280/v1588466299/burgers-3203841_1280_imecfv.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          position: "relative",
          height: "33vh",
          backgroundSize: "cover",
        }}
      >
        <div className="row">
          <div
            style={{
              width: "100%",
              margin: "5% 5px 10px 6%",
            }}
            className="col d-none d-md-block d-lg-block d-xl-block "
          >
            <h3
              style={{
                margin: "0",
                fontWeight: "400",
                color: "#262626",
                opacity: "1",
              }}
            >
              {name}
            </h3>
            <p
              style={{
                fontWeight: "500",
                color: "#262626",
                fontSize: "14px",
                opacity: "1",
              }}
            >
              {type}
            </p>
            <p style={{ fontWeight: "400" }}>
              <span
                style={{ color: "orange" }}
                className="fa fa-star checked"
              ></span>
              <span
                style={{ color: "orange" }}
                className="fa fa-star checked"
              ></span>
              <span
                style={{ color: "orange" }}
                className="fa fa-star checked"
              ></span>
              <span
                style={{ color: "orange" }}
                className="fa fa-star checked"
              ></span>
              <span
                style={{ color: "orange" }}
                className="fa fa-star-half-o"
              ></span>
              <span>{rating}</span>
            </p>
            <p style={{ fontWeight: "600", color: "#555555" }}>{number}</p>
            <p style={{ margin: "0", fontWeight: "400" }}>{address}</p>
          </div>
          <div className="col">
            <h2
              className="text-white"
              style={{
                float: "right",
                width: "80%",
                backgroundColor: "#F08B2A",
                borderRadius: "100px 0px 0px 100px",
                margin: "12% 0px",
                padding: "3% 5%",
              }}
            >
              OPENS AT
              <span style={{ fontWeight: "800" }}> {openTime}PM </span>
            </h2>
          </div>
        </div>
      </div>
      <div style={{ padding: "10px" }} className="d-block d-sm-none d-lg-none">
        <h3 style={{ margin: "0", fontWeight: "700" }}>{name}</h3>
        <p style={{ fontWeight: "400" }}>{type}</p>
        <p style={{ fontWeight: "400" }}>
          {estimatedDeliveryTime} . {rating} . {deliveryFee}
        </p>
        <p style={{ margin: "0", fontWeight: "400" }}>{address}</p>
      </div>
    </div>
  );
};

export default Banner;
