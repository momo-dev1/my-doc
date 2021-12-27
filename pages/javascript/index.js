import Content from "../../components/Content";
import Layout from "../../components/Layout";

const JavaScript = ({ result }) => {
  return (
    <Layout title="JavaScript" result={result}>
      <div className="flex mx-auto">
        <div className="w-[5rem]"></div>
        <Content title="JavaScript" result={result} />
      </div>
    </Layout>
  );
};

export default JavaScript;

export async function getStaticProps(context) {
  const res = await fetch(
    "https://strapi-backend-doc.herokuapp.com/api/java-scripts"
  );
  const data = await res.json();

  return {
    props: { result: data.data.map((item) => item) },
  };
}
