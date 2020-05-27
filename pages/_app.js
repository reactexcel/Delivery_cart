import App from "next/app";
import { wrapper } from "../store";

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/paper-kit.css";
import "../assets/demo/demo.css";
import "../assets/demo/react-demo.css";

class MyApp extends App {
  static getInitialProps = async ({ Component, ctx }) => ({
    // Call page-level getInitialProps
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    // Some custom thing for all pages
    pathname: ctx.pathname,
  });

  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);
