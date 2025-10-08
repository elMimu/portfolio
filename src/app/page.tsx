export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center flex-1 p-6 bg-gradient-primary text-white mt-10">
        <div className="mx-auto w-3/4 ">
          <h1 className="text-4xl md:text-7xl tracking-wider font-bold text-left">
            SOFTWARE ENGINEER
          </h1>
          <p className="text-lg md:text-4xl font-bold">&</p>
          <h1 className="text-4xl md:text-7xl tracking-wider font-bold text-left">
            PLAYABLE DEVELOPER{" "}
          </h1>
          <p className="mt-10 trackig-wider text-lg text-justify">
            Here you’ll find my projects, results, and interactive experiments.
            I hope they give you a good sense of my skills as a Software
            Engineer and Playable Developer.
          </p>
        </div>
      </div>
    </div>
  );
}
