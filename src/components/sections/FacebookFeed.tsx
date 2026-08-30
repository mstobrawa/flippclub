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
      className="relative overflow-hidden bg-background pt-4 pb-1 sm:pt-6 sm:pb-1"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="relative mx-auto max-w-2xl text-center">
          {/* Heading decorations */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-1/2 hidden h-14 w-14 -translate-y-1/2 rounded-full border-[6px] border-primary lg:block xl:h-16 xl:w-16"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-2 hidden h-5 w-5 rotate-12 bg-accent lg:block"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-1/2 hidden h-16 w-16 -translate-y-1/2 rounded-full border-[6px] border-accent lg:block xl:h-20 xl:w-20"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-1 hidden h-5 w-5 -rotate-12 bg-primary lg:block"
          />

          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-text sm:text-5xl lg:text-6xl">
            AKTUALNOŚCI
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Sprawdź, co dzieje się na naszym Facebooku. Nowe wydarzenia,
            aktualności i wszystko, co warto wiedzieć przed kolejną rozgrywką.
          </p>
        </div>

        {/* Desktop arcade cabinet + decorations */}
        <div className="relative mx-[calc(50%-50vw)] mt-2 hidden w-screen lg:block">
          {/* ================================================== */}
          {/* LEFT DECORATIONS */}
          {/* ================================================== */}

          {/* Pixel heart */}
          <Image
            src="/images/heart.png"
            alt=""
            width={180}
            height={180}
            aria-hidden="true"
            className="pointer-events-none absolute left-[9%] top-[22%] z-0 w-[115px] -rotate-12 xl:w-[140px]"
          />

          {/* Large outer purple ring */}
          <div
            aria-hidden="true"
            className="absolute left-[2%] top-[43%] z-0 h-20 w-20 rounded-full border-[7px] border-primary xl:h-24 xl:w-24"
          />

          {/* Upper yellow dot */}
          <div
            aria-hidden="true"
            className="absolute left-[10%] top-[10%] z-0 h-6 w-6 rounded-full bg-accent xl:h-7 xl:w-7"
          />

          {/* Middle yellow ring */}
          <div
            aria-hidden="true"
            className="absolute left-[15%] top-[61%] z-0 h-12 w-12 rounded-full border-[5px] border-accent xl:h-14 xl:w-14"
          />

          {/* Lower purple ring */}
          <div
            aria-hidden="true"
            className="absolute left-[5%] top-[76%] z-0 h-16 w-16 rounded-full border-[6px] border-primary xl:h-20 xl:w-20"
          />

          {/* Lower yellow square */}
          <div
            aria-hidden="true"
            className="absolute left-[10%] top-[70%] z-0 h-5 w-5 rotate-12 bg-accent xl:h-6 xl:w-6"
          />

          {/* Small purple pixel */}
          <div
            aria-hidden="true"
            className="absolute left-[24%] top-[38%] z-0 h-4 w-4 rotate-45 bg-primary"
          />

          {/* ================================================== */}
          {/* RIGHT DECORATIONS */}
          {/* ================================================== */}

          {/* Pixel like */}
          <Image
            src="/images/like.png"
            alt=""
            width={180}
            height={180}
            aria-hidden="true"
            className="pointer-events-none absolute right-[8%] top-[43%] z-0 w-[115px] rotate-12 xl:w-[140px]"
          />

          {/* Large outer yellow ring */}
          <div
            aria-hidden="true"
            className="absolute right-[2%] top-[58%] z-0 h-20 w-20 rounded-full border-[7px] border-accent xl:h-24 xl:w-24"
          />

          {/* Upper purple ring */}
          <div
            aria-hidden="true"
            className="absolute right-[12%] top-[12%] z-0 h-12 w-12 rounded-full border-[5px] border-primary xl:h-14 xl:w-14"
          />

          {/* Upper yellow square */}
          <div
            aria-hidden="true"
            className="absolute right-[9%] top-[20%] z-0 h-5 w-5 rotate-12 bg-accent xl:h-6 xl:w-6"
          />

          {/* Middle yellow ring */}
          <div
            aria-hidden="true"
            className="absolute right-[15%] top-[68%] z-0 h-12 w-12 rounded-full border-[5px] border-accent xl:h-14 xl:w-14"
          />

          {/* Lower purple ring */}
          <div
            aria-hidden="true"
            className="absolute right-[5%] top-[76%] z-0 h-16 w-16 rounded-full border-[6px] border-primary xl:h-20 xl:w-20"
          />

          {/* Lower purple diamond */}
          <div
            aria-hidden="true"
            className="absolute right-[23%] top-[74%] z-0 h-5 w-5 rotate-45 bg-primary xl:h-6 xl:w-6"
          />

          {/* Small yellow pixel */}
          <div
            aria-hidden="true"
            className="absolute right-[25%] top-[38%] z-0 h-4 w-4 rotate-45 bg-accent"
          />

          {/* ================================================== */}
          {/* ARCADE CABINET */}
          {/* ================================================== */}

          <div className="relative z-10 mx-auto w-full max-w-[880px]">
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
                    data-show-posts="true"
                    data-width="500"
                    data-height="900"
                    data-small-header="true"
                    data-adapt-container-width="true"
                    data-hide-cover="true"
                    data-show-facepile="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / tablet */}
        <div className="mx-auto mt-3 w-full max-w-[520px] lg:hidden">
          <div className="rounded-[28px] border-4 border-text bg-dark-gray p-2 shadow-[6px_8px_0_var(--color-primary)]">
            <div className="overflow-hidden rounded-[20px] border-4 border-accent bg-background">
              <div
                className="fb-page w-full"
                data-href="https://www.facebook.com/flippclub"
                data-show-posts="true"
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
