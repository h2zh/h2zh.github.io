import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";

function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

const Resume = () => {
  const isClient = useIsClient();
  return (
    <div>
      <Head>
        <title>Howard Zhong&apos;s Latest Resume</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isClient ? (
        <iframe
          src="/Howard_H_ZHONG_Resume_0521.pdf"
          width="100%"
          style={{
            height: "100vh",
            border: "none",
          }}
        >
          This browser does not support PDFs. Please download the PDF to view
          it: <a href="/Howard_H_ZHONG_Resume_0521.pdf">Download PDF</a>
        </iframe>
      ) : (
        <div>Loading client component...</div>
      )}
    </div>
  );
};

export default Resume;
