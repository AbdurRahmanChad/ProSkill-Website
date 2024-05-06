import React from "react";
import { useApps, useAppsDispatch } from "../../context/appContext";

export default function RecordButton({ name }) {
  const { borderColor } = useApps();
  const dispatch = useAppsDispatch();
  return (
    <div className="absolute left-0 -top-5 sm:-top-5 md:-top-5 lg:-top-7 w-full flex items-center justify-center">
      <div
        className="px-6 bg-bgOrangeRed text-center py-2 rounded-full border-4 border-bgRcord"
        style={{ borderColor }}
      >
        <p className="text-xs sm:text-sm md:text-xl lg:text-xl text-white font-bold">
          {name}
        </p>
      </div>
    </div>
  );
}
