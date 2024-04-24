import type { Metadata } from "next";
import { Header } from "@/components/modules/Header";
import { Footer } from "@/components/modules/Footer";
import "../styles/global.scss";
import style from "./page.module.scss";

export const metadata: Metadata = {
  title: "VRNas",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.wrapper}>
          <Header />
          <main className={style.page}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
