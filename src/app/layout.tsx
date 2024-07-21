import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AppHeader } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Todo App",
  description: "Build and Setup by Nailton R.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <AppHeader />
          <main className="h-[calc(100dvh-88px)] mt-16 sm:mt-20">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
