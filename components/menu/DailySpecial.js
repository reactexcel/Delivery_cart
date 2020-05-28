const DailySpecial = () => {
  return (
    <div
      className="row text-white position-absolute float-absolute-left mr-2"
      style={{
        backgroundColor: "#F08B2A",
        borderRadius: "0px 100px 100px 0px",
        textAlign: "left",
      }}
    >
      <div className="col-5" style={{ padding: "20px" }}>
        <h3 className="m-0" style={{ fontWeight: "400" }}>Delivery Special</h3>
        <p className="mt-2" style={{ fontWeight: "600" }}>
          order now and we will give you free delivery to the St Clair area
        </p>
      </div>
      <div className="col-7">
        <h1
          style={{
            margin: 0,
            margin: "13% 0px",
            fontWeight: "700",
          }}
        >
          {" "}
          10% OFF!
        </h1>
      </div>
    </div>
  );
};

export default DailySpecial;
