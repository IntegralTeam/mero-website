import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const id = hash.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash, pathname]);

  return null;
}
