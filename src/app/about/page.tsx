import { textTemplate } from "@/utils/textTemplate";

export default function AboutPage() {
  return (
    <div className="flex justify-center w-full mt-10">
      <div className="relative border w-5xl">
        <div className=" mb-10">
          <h2 className="text-2xl">About</h2>
          <p className=" text-justify">{textTemplate}</p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl text-right text-2xl">
            As a programmer...
          </h2>
          <p className="text-justify">{textTemplate}</p>
        </div>
        <div className="absolute top-full -translate-y-full w-full">
          <hr className="m-1" />
          <h2 className="text-lg text-center text-2xl">Contact</h2>
          <div>LINK</div>
        </div>
      </div>
    </div>
  );
}
