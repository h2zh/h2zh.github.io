import React from "react";
import Profile from "../components/profile";
import Head from "next/head";

const AboutMe = () => {
  return (
    <div>
      <Head>
        <title>More about Howard</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Profile /> */}
      <h1 className="font-bold text-2xl md:text-2xl tracking-tight mb-0 text-black">
        Why CS
      </h1>
      <div className="text-gray-600 mt-3 mb-4">
        <p>
          It was the Android Open Source Project (AOSP) that led me to touch the
          beauty of open-source internet and finally got me to study Computer
          Science.
        </p>
        <p>
          When I was in seventh grade, I was enthusiastic in messing with my
          Android device back and forth, including rooting, installing custom
          ROMs, recovering lost data. The process was challenging, but I could
          usually find a tricky way to work around on the online forums.
          Everyone in the community was truly excited to help and collaborate
          with others.
        </p>
        <p>
          I found these experience tremendously rewarding. As time goes by, I
          wanted to uncover the mechanism of these tiny but powerful software.
          To understand the programming fundamentals, I started with Java.
          Later, I learned more backend frameworks based on Java and got
          exposure to web development in Javascript. Now, I&apos;m learning to
          develop high impact system built on the cloud.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
