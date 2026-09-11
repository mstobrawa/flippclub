import Link from "next/link";

import { socialLinks } from "@/config/navigation";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
          className={getSocialClassName(social.label)}
        >
          <SocialIcon name={social.label} />
        </Link>
      ))}
    </div>
  );
}

function getSocialClassName(name: string) {
  const base =
    "flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-sm transition duration-200 hover:-translate-y-1 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:h-10 lg:w-10 lg:rounded-xl";

  if (name === "Facebook") {
    return `${base} bg-[#1877F2] hover:bg-[#0d65d9]`;
  }

  if (name === "Instagram") {
    return `${base} bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]`;
  }

  return `${base} bg-[#111111] hover:bg-[#000000]`;
}

function SocialIcon({ name }: { name: string }) {
  if (name === "Facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-8 w-8 lg:h-5 lg:w-5"
      >
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6H16.8V3.8c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V10H8.7v3h2.4v8h2.4Z" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
        className="h-8 w-8 lg:h-5 lg:w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-8 w-8 lg:h-5 lg:w-5"
    >
      <path d="M16.7 5.3c-1-.7-1.7-1.7-2-2.8h-2.4v12.2a2.5 2.5 0 1 1-2.1-2.5V9.8A5 5 0 1 0 14.7 15V8.8c.9.6 2 1 3.2 1V7.4c-.4 0-.8-.1-1.2-.3Z" />
    </svg>
  );
}
