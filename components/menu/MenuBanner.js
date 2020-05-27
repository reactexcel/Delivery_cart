import Descriptor from "./Descriptor";
import instaImage from "../../assets/instagram.svg";
import youtubeImage from "../../assets/youtube.svg";
import twitterImage from "../../assets/twitter.svg";
import pinterestImage from "../../assets/pinterest.svg";
import SocialIcon from "./SocialIcon";

const Banner = ({
  restaurantData: {
    name,
    number,
    address,
    description,
    rating,
    openTime,
    deliveryFee,
    estimatedDeliveryTime,
  },
}) => {
  return (
    <div className="d-none d-md-block d-lg-block d-xl-block position-relative">
      <div className="container">
        <div className="row pb-5">
          <div className="col d-none d-md-block d-lg-block d-xl-block ">
            <div className="d-flex">
              <h3
                className="mr-2"
                style={{
                  margin: "0",
                  fontWeight: "300",
                  color: "#262626",
                  opacity: "1",
                  fontSize: "38px",
                }}
              >
                {name}
              </h3>
              <div className="d-flex align-items-center">
                <SocialIcon icon={instaImage} />
                <SocialIcon icon={youtubeImage} />
                <SocialIcon icon={twitterImage} />
                <SocialIcon icon={pinterestImage} />
              </div>
            </div>
            <p
              style={{
                fontWeight: "500",
                color: "#262626",
                fontSize: "13px",
                opacity: "1",
              }}
            >
              <Descriptor description={description} />
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
              <span className="ml-3">{rating}</span>
            </p>
            <div style={{ fontWeight: "600", color: "#555555" }}>{number}</div>
            <div style={{ margin: "0", fontWeight: "400" }}>{address}</div>
          </div>
          <div className="col">
            <h2
              className="text-white position-absolute w-75 float-absolute-right"
              style={{
                float: "right",
                backgroundColor: "#F08B2A",
                borderRadius: "100px 0px 0px 100px",
                padding: "20px 20px 20px 40px",
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
        <p style={{ fontWeight: "400" }}>
          <Descriptor description={description} />
        </p>
        <p style={{ fontWeight: "400" }}>
          {estimatedDeliveryTime} . {rating} . {deliveryFee}
        </p>
        <p style={{ margin: "0", fontWeight: "400" }}>{address}</p>
      </div>
    </div>
  );
};

export default Banner;
