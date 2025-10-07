"use client";

// Iphone SE = {375, 667}
// S8 = {369, 740}
// max-size = {350, 667}

import { Playable } from "@/types/playable";
import playable_list from "@/data/playable_list.json";

import { useRef, useState } from "react";
import { textTemplate } from "@/utils/textTemplate";

let playable: Playable | null = (() => {
  if (playable_list.length > 0) {
    return playable_list[0];
  }
  return null;
})();

export default function PlayablePlayer() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [loadCount, setLoadCount] = useState(0);
  const [{ w, h }, setOrientation] = useState({ w: 350, h: 667 });

  return (
    <div className="flex flex-wrap mt-10">
      <div className="mx-auto justify-items-center">
        {/* playable viewer section */}
        <menu className="flex justify-center pb-3 gap-1">
          <select
            className="border p-1"
            onChange={(ev) => {
              playable = playable_list[parseInt(ev.target.value)];
              setLoadCount(loadCount + 1);
            }}
          >
            {playable_list.map((p, i) => {
              return (
                <option key={i} value={i}>
                  {p.name}
                </option>
              );
            })}
          </select>

          <button
            title="refresh"
            className="flex items-center border p-1 btn-anim"
            onClick={() => {
              setLoadCount(loadCount + 1);
            }}
          >
            <span className="material-symbols-outlined">refresh</span>
          </button>

          <button
            title="flip orientation"
            className="flex items-center border p-1 btn-anim"
            onClick={() => {
              setOrientation((prev) => ({ w: prev.h, h: prev.w }));
            }}
          >
            <span className="material-symbols-outlined">flip_camera_ios</span>
          </button>
          {/* <button */}
          {/*   title={mute ? "sound on" : "mute"} */}
          {/*   className="flex items-center border p-1" */}
          {/*   onClick={() => { */}
          {/*     setMute(!mute); */}
          {/*     toggleMute(iframeRef, mute); */}
          {/*   }} */}
          {/* > */}
          {/*   <span className="material-symbols-outlined"> */}
          {/*     {mute ? "volume_up" : "volume_off"} */}
          {/*   </span> */}
          {/* </button> */}
        </menu>
        <iframe
          ref={iframeRef}
          key={loadCount}
          className={`mx-auto mb-10`}
          style={{ width: w, height: h }}
          src={playable ? playable.src : ""}
        />
      </div>
      {/* / */}

      {/* project info section */}
      <div className=" flex-1 min-w-1/2 px-10">
        <div className="px-2">
          <div className="mb-10">
            <h2 className="text-center mb-5 bg-gradient-primary text-white rounded-lg font-bold p-1">
              ABOUT THE PROJECT
            </h2>
            <p className="text-justify">{textTemplate}</p>
          </div>

          <div>
            <h2>Instructions:</h2>
          </div>
        </div>
      </div>
      {/* / */}
      <div className="">
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
}
