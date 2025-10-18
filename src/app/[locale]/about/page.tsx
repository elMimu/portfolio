import { textTemplate } from "@/utils/textTemplate";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex justify-center w-full mt-10">
      <div className="flex flex-col w-5xl">
        <div className="flex-1 mb-10 p-2">
          <h2 className="text-2xl header-secondary">About</h2>
          <p className=" text-justify mb-10">{textTemplate}</p>
          <p className="text-justify">{textTemplate}</p>
        </div>
        <div className="mb-10"></div>

        <div className="w-full p-20">
          <hr className="m-1" />
          <h2 className="text-lg text-center text-2xl pb-2">
            Contact Information
          </h2>

          <nav className="flex justify-center gap-2">
            <a href="#">
              <Image
                width={30}
                height={30}
                src="/github-mark.svg"
                alt="GitHub"
              />
            </a>
            <a href="#">
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
