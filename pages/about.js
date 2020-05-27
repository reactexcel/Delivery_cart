import Head from "next/head";
import { Layout } from "../layout";

export default () => (
  <div>
    <Head>
      <title>about page</title>
    </Head>
    <Layout>
      <h2> about world</h2>
      <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
        type specimen book.
      </p>
    </Layout>
  </div>
);
