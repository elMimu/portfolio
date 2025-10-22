"use client"

import {useEffect} from 'react';
import PlayablePlayer from "@/app/[locale]/components/PlayablePlayer";

export default function PlayablesPage() {
  
  return (
    <div className="mx-auto max-w-5xl">
      <PlayablePlayer />
    </div>
  );
}
