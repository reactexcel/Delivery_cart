import Head from "next/head";
import NavigationBar from "./NavigationBar";

const Layout = (props) => (
  <div>
    <Head>
      <link href="https://use.fontawesome.com/releases/v5.06/css/all.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
        rel="stylesheet"
      />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
        rel="stylesheet"
      />
      {/* <script
        type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBRYePU0CNkNHRMRWGB90s7sVIP7LJbwN8&libraries=places"
      ></script> */}
    </Head>
    <NavigationBar />
    <div>{props.children}</div>
  </div>
);
export default Layout;
