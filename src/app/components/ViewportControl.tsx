"use client";

import { useEffect } from "react";

const ViewportControl = () => {
  useEffect(() => {
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    const preventDefaultZoom = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventZoom, { passive: false });
    document.addEventListener('wheel', preventDefaultZoom, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventZoom);
      document.removeEventListener('wheel', preventDefaultZoom);
    };
  }, []);

  return null;
};

export default ViewportControl;
