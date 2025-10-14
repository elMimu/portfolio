"use client";

// Iphone SE = {375, 667}
// S8 = {369, 740}
// max-size = {350, 667}

import { Playable } from "@/types/playable";
import playable_list from "@/data/playable_list.json";

import { useRef, useState } from "react";
import { isMobileDevice } from "@/utils/isMobileDevice";
import { Instruction } from "@/types/Instruction";

let playable: Playable | null = (() => {
  if (playable_list.length > 0) {
    return playable_list[0] as Playable;
  }
  return null;
})();

function hasInstructions(playable: Playable | null) {
  return playable && playable.instructions && playable.instructions?.length > 0;
}

function getInstructionIcon(type: "mouse" | "keyboard" | "touch") {
  switch (type) {
    case "mouse":
      return "mouse";
    case "keyboard":
      return "keyboard";
    default:
      return "touch_app";
  }
}

export default function PlayablePlayer() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [loadCount, setLoadCount] = useState(0);
  const [{ w, h }, setOrientation] = useState({ w: 350, h: 667 });
  const isMobile = isMobileDevice();
  return (
    <div className="flex flex-wrap mt-10">
      <div className="mx-auto justify-items-center">
        {/* playable viewer section */}
        <menu className="flex justify-center pb-3 gap-1">
          <select
            className="border p-1"
            onChange={(ev) => {
              playable = playable_list[parseInt(ev.target.value)] as Playable;
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
      <div className="flex-1 min-w-1/2 px-10">
        <div className="px-2">
          <div className="mb-10">
            <h2 className="text-center mb-5 bg-gradient-primary text-white rounded-lg font-bold p-1">
              ABOUT THE PROJECT
            </h2>
            <p className="text-justify">{playable?.about}</p>
          </div>
          <div className="mb-10">
            <h2 className="text-center mb-5 bg-gradient-primary text-white rounded-lg font-bold p-1">
              INSTRUCTIONS
            </h2>
            {isMobile ? (
              <ul>
                <li>
                  <span className="material-symbols-outlined">
                    {getInstructionIcon("touch")}
                  </span>
                  <span></span>
                </li>
              </ul>
            ) : hasInstructions(playable) ? (
              <ul>
                {playable?.instructions?.map(
                  (inst: Instruction, index: number) => (
                    <li key={index}>
                      {index > 0 ? <hr className="mb-2" /> : ""}
                      <div className="flex gap-2 text-lg mb-2">
                        <span className=" material-symbols-outlined">
                          {getInstructionIcon(inst.type)}
                        </span>
                        <span className="flex-1">{inst.description}</span>
                      </div>
                    </li>
                  ),
                )}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {/* / */}
    </div>
  );
}
