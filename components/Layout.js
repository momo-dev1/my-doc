import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const Layout = ({ title, children, result }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen antialiased text-gray-400 bg-gray-900">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex justify-start flex-1 w-full px-4 pt-10 mx-auto overflow-x-auto text-center max-w-8xl sm:px-6 md:px-8">
        <SideBar result={result} title={title} />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
