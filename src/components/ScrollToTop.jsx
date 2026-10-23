import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const isFirstRun = useRef(true);

  useEffect(() => {
    // On a pre-rendered page the visitor may already have scrolled the page
    // before the app takes over; don't jump them back to the top.
    if (isFirstRun.current && window.__ZUVIUS_PRERENDERED__) {
      isFirstRun.current = false;
      return;
    }
    isFirstRun.current = false;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
