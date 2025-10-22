import { RefObject, useEffect } from "react";

export function useForwardKeysToIframe(
  iframeRef: RefObject<HTMLIFrameElement | null>,
) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const iframe = iframeRef.current;
      const doc = iframe?.contentDocument;
      const win = iframe?.contentWindow;
      if (!doc) return;

      const keysToBlock = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        " ",
        "Backspace",
        "Tab",
      ];

      if (keysToBlock.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
      }

      const event = new KeyboardEvent("keypress", {
        key: e.key,
        code: e.code,
        altKey: e.altKey,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        bubbles: true,
        cancelable: true,
      });

      doc.dispatchEvent(event);
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [iframeRef]);
}
