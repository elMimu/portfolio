"use client";

// Iphone SE = {375, 667}
// S8 = {369, 740}
// max-size = {350, 667}

import { Playable } from "@/types/playable";
import playable_list from "@/data/playable_list.json";

import { useState } from "react";

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
    <div>
      <menu className="border">
        <select
          className="border"
          onChange={(ev) => {
            playable = playable_list[parseInt(ev.target.value)];
            console.log(playable);
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
      <div>
        <iframe
          key={loadCount}
          className={`mx-auto border`}
          style={{ width: w, height: h }}
          src={playable ? playable.src : ""}
        />
      </div>
    </div>
  );
}
