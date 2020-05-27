import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "../layout";

const Post = () => {
  const router = useRouter();
  // gives access to the router object
  return (
    <div>
      <Head>
        <title>{router.query.title}</title>
      </Head>

      <Layout>
        <h3>welcome to the post page</h3>
        {/* we are using props passed from url to make dynamic content  */}
        <h4>{router.query.title}</h4>
      </Layout>
    </div>
  );
};
export default Post;
