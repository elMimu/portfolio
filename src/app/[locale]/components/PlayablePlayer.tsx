"use client";

// Iphone SE = {375, 667}
// S8 = {369, 740}
// max-size = {350, 667}

import { Playable } from "@/types/playable";
import playable_list from "@/data/playable_list.json";

import { useRef, useState } from "react";
import { isMobileDevice } from "@/utils/isMobileDevice";
import { Instruction } from "@/types/Instruction";
import { useTranslations } from "next-intl";

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

  const t = useTranslations("Playables");

  return (
    <div className="flex flex-wrap mt-10 gap-2">
      <div className="mx-auto justify-items-center mb-2">
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
          className={`mx-auto mb-2`}
          style={{ width: w, height: h }}
          src={playable ? playable.src : ""}
        />
        {playable?.copyright ? (
          <small>{`\u00A9 ${playable.copyright}`}</small>
        ) : (
          ""
        )}
      </div>

      {/* / */}

      {/* project info section */}
      <div className="flex-1 min-w-1/2 px-10 text-lg">
        <div className="px-2">
          <div className="mb-10">
            <h2 className="header-secondary">{t("Title1").toUpperCase()}</h2>
            <p className="text-justify">
              {t(`Descriptions.${playable?.name}`)}
            </p>
          </div>
          {isMobile ? (
            <div className="mb-10">
              <h2 className="header-secondary">{t("Title2").toUpperCase()}</h2>
              <ul>
                <li>
                  <div className="flex items-center gap-2 text-lg mb-2 ">
                    <span className=" material-symbols-outlined">
                      {getInstructionIcon("touch")}
                    </span>
                    <span className="flex-1">
                      {t("Instructions.TouchToPlay")}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          ) : hasInstructions(playable) ? (
            <div className="mb-10">
              <h2 className="header-secondary">{t("Title2").toUpperCase()}</h2>
              <ul>
                {playable?.instructions?.map(
                  (inst: Instruction, index: number) => (
                    <li key={index}>
                      {index > 0 ? <hr className="mb-2" /> : ""}
                      <div className="flex items-center gap-2 text-lg mb-2 ">
                        <span className=" material-symbols-outlined">
                          {getInstructionIcon(inst.type)}
                        </span>
                        <span className="flex-1">
                          {t(`Instructions.${inst.description}`)}
                        </span>
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* / */}
    </div>
  );
}
