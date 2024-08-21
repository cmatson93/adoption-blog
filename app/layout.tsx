import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Link from "next/link";

import profilePic from "./assets/animoji.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ng's Adoption Journey",
  description: "A blog to follow along on the Ng family's adoption journey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.container}>
          {/* HEADER */}
          <header className={styles.header}>
            <div style={{ display: `flex`, justifyContent: `space-around` }}>
              <Link className={styles.tab} href="/">
                Home
              </Link>
              <Link className={styles.tab} href="/blog">
                Blog
              </Link>
              <Link className={styles.tab} href="/newsletter">
                Newsletter
              </Link>
            </div>
          </header>

          {/* MAIN */}
          <main style={{ width: "100%" }}>{children}</main>

          {/* FOOTER */}
          {/* {!home && (
            <div className={styles.backToHome}>
              <Link href='/'>← Back to home</Link>
            </div>
          )} */}
        </div>
      </body>
    </html>
  );
}
