"use client";

import Image from "next/image";
import { useEffect } from "react";

export function FacebookFeed() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src^="https://connect.facebook.net/pl_PL/sdk.js"]',
    );

    if (!existingScript) {
      const script = document.createElement("script");

      script.src =
        "https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v25.0";

      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";

      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      id="news"
      className="relative overflow-hidden bg-background py-16 sm:py-20"
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="absolute left-[5%] top-32 hidden h-8 w-8 rotate-12 bg-pink lg:block"
      />

      <div
        aria-hidden="true"
        className="absolute right-[7%] top-52 hidden h-12 w-12 rounded-full border-8 border-primary lg:block"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-24 left-[10%] hidden h-5 w-5 bg-accent lg:block"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-40 right-[10%] hidden h-7 w-7 rotate-45 bg-blue lg:block"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-text sm:text-5xl lg:text-6xl">
            AKTUALNOŚCI
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Sprawdź, co dzieje się na naszym Facebooku. Nowe wydarzenia,
            aktualności i wszystko, co warto wiedzieć przed kolejną rozgrywką.
          </p>
        </div>

        {/* Desktop arcade cabinet */}
        <div className="relative mx-auto mt-8 hidden w-full max-w-[880px] lg:block">
          <Image
            src="/images/facebook-frame.png"
            alt=""
            width={1024}
            height={1536}
            priority={false}
            className="pointer-events-none relative z-10 h-auto w-full"
          />

          {/* Facebook screen */}
          <div className="absolute left-[20.8%] top-[16.55%] z-20 h-[58.2%] w-[58.5%] overflow-hidden rounded-[2%] bg-black">
            <div className="flex min-h-full justify-center">
              <div className="min-w-0">
                <div
                  className="fb-page"
                  data-href="https://www.facebook.com/flippclub"
                  data-tabs="timeline"
                  data-width="500"
                  data-height="900"
                  data-small-header="false"
                  data-adapt-container-width="false"
                  data-hide-cover="true"
                  data-show-facepile="false"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / tablet */}
        <div className="mx-auto mt-8 w-full max-w-[520px] lg:hidden">
          <div className="rounded-[28px] border-4 border-text bg-dark-gray p-2 shadow-[6px_8px_0_var(--color-primary)]">
            <div className="overflow-hidden rounded-[20px] border-4 border-accent bg-background">
              <div
                className="fb-page w-full"
                data-href="https://www.facebook.com/flippclub"
                data-tabs="timeline"
                data-width="500"
                data-height="750"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
