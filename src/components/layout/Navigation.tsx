import Link from "next/link";
import { navItems } from "@/config/navigation";

/**
 * Desktop navigation. Reads from the shared `navItems` config so it always
 * stays in sync with the mobile menu.
 */
export function Navigation() {
  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="font-display text-sm font-medium tracking-tight text-text transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
