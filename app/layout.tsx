import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RouteShell } from "./route-shell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const metadata: Metadata = {
  title: "Luke Davey",
  description: "Luke Davey — developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.variable + " font-sans bg-white text-black antialiased"}>
        <div className="min-h-screen bg-white">
          <div className="mx-auto flex min-h-screen w-full max-w-7xl">
            <aside className="fixed inset-y-0 left-0 z-20 hidden w-72 border-r border-black/10 bg-white md:flex">
              <div className="flex w-full flex-col justify-between px-7 py-8">
                <div>
                  <a
                    href="#home"
                    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-black"
                  >
                    <span className="h-2 w-2 rounded-full bg-black" />
                    Luke Davey
                  </a>

                  <nav className="mt-16 space-y-1">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block border-y border-transparent px-3 py-3 text-sm text-black/60 transition hover:border-black/10 hover:text-black"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="text-xs leading-6 text-black/45">
                  <p>Next.js / TypeScript / Tailwind</p>
                  <p>Framer Motion for subtle motion only.</p>
                </div>
              </div>
            </aside>

            <main className="flex-1 md:pl-72">
              <div className="px-5 py-6 md:px-10 md:py-10">
                <RouteShell>{children}</RouteShell>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
