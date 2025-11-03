import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutPage() {
  const t = useTranslations("About");
  return (
    <div className="flex justify-center w-full mt-10">
      <div className="flex flex-col w-5xl">
        <div className="flex-1 mb-10 p-2">
          <h2 className="text-2xl header-secondary">{t("Title").toUpperCase()}</h2>
          <div className="text-xl">
          <p className=" text-justify mb-10">{t("Paragraph1")}</p>
          <p className=" text-justify mb-10">{t("Paragraph2")}</p>
          <p className=" text-justify mb-10">{t("Paragraph3")}</p>
          <p className=" text-justify mb-10">{t("Paragraph4")}</p>
          <p className=" text-justify mb-10">{t("Paragraph5")}</p>
          </div>
        </div>
        <div className="mb-10"></div>

        <div className="w-full p-20">
          <hr className="m-1" />
          <h2 className="text-lg text-center text-2xl pb-2">
            Contact Information
          </h2>

          <nav className="flex justify-center gap-2">
            <a href="https://github.com/elMimu">
              <Image
                width={30}
                height={30}
                src="/github-mark.svg"
                alt="GitHub"
              />
            </a>
            <a href="https://www.linkedin.com/in/michel-munhoz-102110217/">
              <Image
                width={30}
                height={30}
                src="/linkedin-svgrepo-com.svg"
                alt="GitHub"
              />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
