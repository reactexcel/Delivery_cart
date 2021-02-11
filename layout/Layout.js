import Head from "next/head";

const Layout = (props) => (
  <div>
    <Head>
      <link href="https://use.fontawesome.com/releases/v5.06/css/all.css" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
        rel="stylesheet"
      />
      {/* <script
        type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBRYePU0CNkNHRMRWGB90s7sVIP7LJbwN8&libraries=places"
      ></script> */}
    </Head>
    <div>{props.children}</div>
  </div>
);
export default Layout;
