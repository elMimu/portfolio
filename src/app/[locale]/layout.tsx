import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Header from "./components/Header";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  console.log(locale);
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html className={`${geistMono.variable}`} lang={locale}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen min-w-screen">
        <NextIntlClientProvider locale={locale}>
          <Header />
          <main className="flex flex-1 max-w-full">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
