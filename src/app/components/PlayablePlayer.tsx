"use client";

// Iphone SE = {375, 667}
// S8 = {369, 740}
// max-size = {350, 667}

import { Playable } from "@/types/playable";
import playable_list from "@/data/playable_list.json";

import { useState } from "react";
import { textTemplate } from "@/utils/textTemplate";

let playable: Playable | null = (() => {
  if (playable_list.length > 0) {
    return playable_list[0];
  }
  return null;
})();

export default function PlayablePlayer() {
  const [loadCount, setLoadCount] = useState(0);
  const [{ w, h }, setOrientation] = useState({ w: 350, h: 667 });

  return (
    <div className="flex flex-wrap ">
      <div className="mx-auto justify-items-center border">
        {/* playable viewer section */}
        <menu className="border">
          <select
            className="border"
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
          <span>
            <button
              className="border"
              onClick={() => {
                setLoadCount(loadCount + 1);
              }}
            >
              Reload
            </button>
            <button
              className="border"
              onClick={() => {
                setOrientation((prev) => ({ w: prev.h, h: prev.w }));
              }}
            >
              Orientation
            </button>
          </span>
        </menu>
        <iframe
          key={loadCount}
          className={`mx-auto`}
          style={{ width: w, height: h }}
          src={playable ? playable.src : ""}
        />
      </div>
      {/* / */}

      {/* project info section */}
      <div className="text-center flex-1 min-w-1/2 border">
        <div>
          <h2>About the project:</h2>
          <p>{textTemplate}</p>
        </div>

        <div>
          <h2>Instructions:</h2>
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
