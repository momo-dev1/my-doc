import Code from "./Code";

const Content = ({ result }) => {
  return (
    <div>
      {result.map(({ attributes, id }) => (
        <section
          id={`${attributes.title}`}
          key={id}
          className="mb-20 text-left "
        >
          <h3 className="mb-2 text-xl text-white">{attributes.title}</h3>
          <p className="max-w-2xl mb-4 ">{attributes.content}</p>
          <pre className="max-w-2xl mb-4 ">{attributes?.steps}</pre>
          <div className="relative overflow-x-auto bg-[#1F2937] px-5 rounded-[12px] shadow max-w-2xl  border border-gray-50/10">
            <Code code={attributes.code} language="javascript" />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Content;
//  <div
//    className="Container"
//    dangerouslySetInnerHTML={{ __html: attributes?.html }}
//  ></div>;
