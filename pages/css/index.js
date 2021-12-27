import Content from "../../components/Content";
import Layout from "../../components/Layout";

const Css = ({ result }) => {
  return (
    <Layout title="Css" result={result}>
      <div className="flex mx-auto">
        <div className="w-[5rem]"></div>
        <Content title="Css" result={result} />
      </div>
    </Layout>
  );
};

export default Css;

export async function getStaticProps(context) {
  const res = await fetch("https://strapi-backend-doc.herokuapp.com/api/csses");
  const data = await res.json();

  return {
    props: { result: data.data.map((item) => item) },
  };
}
