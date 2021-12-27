import Content from "../../components/Content";
import Layout from "../../components/Layout";

const React = ({ result }) => {
  return (
    <Layout title="React" result={result}>
      <div className="flex mx-auto">
        <div className="w-[5rem]"></div>
        <Content title="React" result={result} />
      </div>
    </Layout>
  );
};

export default React;

export async function getStaticProps(context) {
  const res = await fetch(
    "https://strapi-backend-doc.herokuapp.com/api/contents"
  );
  const data = await res.json();

  return {
    props: { result: data.data.map((item) => item) },
  };
}
