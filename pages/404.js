// pages/404.js
import Head from "next/head";
import Link from "next/link";
export default function Custom404() {
  return (
    <>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          rel="stylesheet"
        />
      </Head>
      <h1 className="animate__animated animate__heartBeat">
        404 - Page Not Found🤔🔍💭
      </h1>
    </>
  );
}
