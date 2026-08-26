import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/config/navigation";

/**
 * Subtle transition strip between the slider and the main content.
 * Placeholder for future zone shortcuts / featured links. Fully modular —
 * delete this component and its one usage in `app/page.tsx` to remove it.
 */
export function SubNav() {
  const shortcuts = navItems.slice(0, 5);

  return (
    <div className="border-b border-border/70 bg-surface">
      <Container>
        <div className="flex gap-6 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {shortcuts.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
