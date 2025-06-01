import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Script from "next/script";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isResumePage = router.pathname === "/resume";

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
      {isResumePage ? (
        // Render the component directly without layout for '/resume'
        <Component {...pageProps} />
      ) : (
        // Apply the layout for other pages
        <Layout>
          <div className="text-slate-700 flex flex-col gap-6">
            {/* <Navbar /> */}
            <Component {...pageProps} />
            <Footer />
          </div>
        </Layout>
      )}
    </>
  );
}

export default MyApp;
