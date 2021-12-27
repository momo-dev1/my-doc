import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col min-h-screen antialiased text-gray-400 bg-gray-900">
      <Header />
      <main className="flex flex-wrap items-center justify-center gap-8 m-auto">
        <Link href="/javascript">
          <a className="relative inline-block h-10 p-20 ">
            <Image src="/images/javascript.svg" layout="fill" />
          </a>
        </Link>
        <Link href="/react">
          <a className="relative inline-block h-10 p-20 ">
            <Image src="/images/react.svg" layout="fill" />
          </a>
        </Link>
        <Link href="/next-js">
          <a className="relative inline-block h-10 p-20 ">
            <Image src="/images/next-js.svg" layout="fill" />
          </a>
        </Link>
        <Link href="/tailwind">
          <a className="relative inline-block w-10 h-10 p-20 ">
            <Image src="/images/tailwind.svg" layout="fill" />
          </a>
        </Link>
        <Link href="/css">
          <a className="relative inline-block h-10 p-20 ">
            <Image src="/images/css.svg" layout="fill" />
          </a>
        </Link>
      </main>
    </section>
  );
}
