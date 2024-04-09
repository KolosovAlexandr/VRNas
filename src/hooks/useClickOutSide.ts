import { useEffect } from "react";

export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      event.preventDefault();
      if (ref && ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
      return;
    };
    document.addEventListener("mousedown", listener, true);
    return () => {
      document.removeEventListener("mousedown", listener, true);
    };
  }, [ref, callback]);
};
