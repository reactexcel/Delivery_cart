const DailySpecial = () => {
  return (
    <div
      className="row text-white"
      style={{
        backgroundColor: "#F08B2A",
        borderRadius: "0px 100px 100px 0px",
        textAlign: "left",
      }}
    >
      <div className="col-6" style={{ padding: "20px" }}>
        <h5 style={{ margin: "0", fontWeight: "400" }}>Delivery Special</h5>
        <p style={{ fontWeight: "600" }}>
          order now and we will give you free delivery to the St Clair area
        </p>
      </div>
      <div className="col-6">
        <h2
          style={{
            margin: 0,
            margin: "10% 0px",
            fontWeight: "700",
          }}
        >
          {" "}
          10% OFF!
        </h2>
      </div>
    </div>
  );
};

export default DailySpecial;
