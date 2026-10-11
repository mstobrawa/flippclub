"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const showElement = () => {
      element.classList.remove("page-reveal-hidden");
      element.classList.add("page-reveal-visible");
    };

    if (typeof IntersectionObserver === "undefined") {
      showElement();
      return;
    }

    let observer: IntersectionObserver;

    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(element);
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
      );

      observer.observe(element);
    } catch {
      showElement();
      return;
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? "page-reveal-visible" : "page-reveal-hidden"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
