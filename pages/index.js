import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../_img/WebDev2776-1.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>App Title Here</title>
        <meta name="description" content="Created by WebDev2776" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-red-500 font-semibold">
              Good Morning
            </h2>
            <p className="mt-2 text-blue-800 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              Welcome to KindaCode.com
            </p>
            <Image src={logo} alt="" />
          </div>

          <div className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="bg-amber-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
              <div className="mt-2 font-bold">John Doe</div>
              <div className="font-light">Some description</div>
            </div>

            <div className="bg-red-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
              <div className="mt-2 font-bold">John Doe</div>
              <div className="font-light">Some description</div>
            </div>

            <div className="bg-green-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
              <div className="mt-2 font-bold">John Doe</div>
              <div className="font-light">Some description</div>
            </div>

            <div className="bg-purple-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
              <div className="mt-2 font-bold">John Doe</div>
              <div className="font-light">Some description</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
