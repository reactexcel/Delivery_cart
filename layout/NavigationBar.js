import Link from "next/link";

const NavigationBar = () => (
  <>
    <nav className="navbar navbar-expand navbar-light d-none d-md-block d-lg-block d-xl-block bg-transparent shadow-none">
      <div className="container">
        <Link href="/">
          <a className="logo-text text-lowercase" href="#">
            <img
              className="mr-2"
              src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1588466811/lobo-100h-100w_wzbabd.png"
              style={{ height: "55px", width: "80px" }}
            />{" "}
            menu<span className="dot">.</span>page
          </a>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav
      className="nav navbar-light d-sm-none d-lg-none"
      style={{ color: "#1A1A1A", margin: "4px", padding: "8px" }}
    >
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p
          style={{
            width: "100%",
            textAlign: "center",
            fontFamily: "Montserrat Light",
            fontSize: "26px",
            fontWeight: "500",
          }}
        >
          Souvlaki Express
        </p>

        <i className="fa fa-bars" style={{ right: "8px", fontSize: "28px" }} />
      </div>
    </nav>
  </>
);

export default NavigationBar;
