import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="flex flex-col flex-1 items-center bg-gradient-primary">
      <div className="flex items-center max-w-5xl flex-1 p-6 text-white">
        <div className="mx-auto w-3/4">
          <h1 className="text-4xl md:text-7xl tracking-wider font-bold text-left">
            {t("Title1").toUpperCase()}
          </h1>
          <p className="text-lg md:text-4xl font-bold">&</p>
          <h1 className="text-4xl md:text-7xl tracking-wider font-bold text-left">
            {t("Title2").toUpperCase()}
          </h1>
          <p className="mt-10 trackig-wider text-xl semi-bold text-justify">
            {t("Subtitle").toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
}
