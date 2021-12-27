import Content from "../../components/Content";
import Layout from "../../components/Layout";

const Tailwind = ({ result }) => {
  return (
    <Layout title="Tailwind" result={result}>
      <div className="flex mx-auto">
        <div className="w-[5rem]"></div>
        <Content title="Tailwind" result={result} />
      </div>
    </Layout>
  );
};

export default Tailwind;

export async function getStaticProps(context) {
  const res = await fetch(
    "https://strapi-backend-doc.herokuapp.com/api/tailwinds"
  );
  const data = await res.json();

  return {
    props: { result: data.data.map((item) => item) },
  };
}
