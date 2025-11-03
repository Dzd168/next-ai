"use client";

import Script from "next/script";

// Umami Analytics 配置
// NEXT_PUBLIC_UMAMI_WEBSITE_ID: 你的 Umami 网站 ID
// NEXT_PUBLIC_UMAMI_SRC: Umami 脚本地址（默认为 https://cloud.umami.is/script.js 或你自托管的地址）
const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
const UMAMI_SRC =
  process.env.NEXT_PUBLIC_UMAMI_SRC || "https://cloud.umami.is/script.js";

const UmamiAnalytics = () => {
  return (
    <>
      {UMAMI_WEBSITE_ID ? (
        <Script
          async
          src={UMAMI_SRC}
          data-website-id={UMAMI_WEBSITE_ID}
          strategy="afterInteractive"
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default UmamiAnalytics;

