"use client";

import { useEffect } from "react";

export default function HashContactRedirect() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash === "#contact") {
      window.location.replace("/contact");
    }
  }, []);

  return null;
}

