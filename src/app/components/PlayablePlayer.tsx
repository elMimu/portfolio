"use client"
// Iphone SE = {375, 667}
// S8 = {369, 740}

import { useState } from "react";

// max-size = {350, 667}
//

const current_src = "/playables/wm_ataque_cidade/index.html";

export default function PlayablePlayer() {
  const [source, setSource] = useState(current_src);
  return (
    <div>
      <nav className="border"></nav>
      <iframe
        className="mx-auto border w-[350] h-[667]"
        src={source}
      ></iframe>
    </div>
  );
}
