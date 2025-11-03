import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Header from "./components/Header";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <NextIntlClientProvider locale={locale}>
      <Header />
      <main className="flex flex-1 max-w-full">{children}</main>
    </NextIntlClientProvider>
  );
}
