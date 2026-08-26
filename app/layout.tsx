import type { Metadata } from "next";

import "./globals.css";

import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

import {
  getAllPosts,
} from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: "Shivankur",
    template: "%s | Shivankur",
  },

  description:
    "Portfolio, writing and thoughts by Shivankur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = getAllPosts();

  return (
    <html lang="en">

      <body>

        <MobileNav />

        <div className="site-layout">

          <Sidebar posts={posts} />

          <main className="main-content">
            {children}
          </main>

        </div>

      </body>

    </html>
  );
}