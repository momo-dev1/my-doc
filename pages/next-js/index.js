import Content from "../../components/Content";
import Layout from "../../components/Layout";

const NextJs = ({ result }) => {
  return (
    <Layout title="NextJs" result={result}>
      <div className="flex mx-auto">
        <div className="w-[5rem]"></div>
        <Content title="NextJs" result={result} />
      </div>
    </Layout>
  );
};

export default NextJs;

export async function getStaticProps(context) {
  const res = await fetch("https://strapi-backend-doc.herokuapp.com/api/nexts");
  const data = await res.json();

  return {
    props: { result: data.data.map((item) => item) },
  };
}
