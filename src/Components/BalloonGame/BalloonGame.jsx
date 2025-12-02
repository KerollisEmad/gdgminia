import React, { useState } from "react";
import Explosion from "../Explosion/Explosion";

export default function BalloonGame({ onVersionChange }) {

  const [popped, setPopped] = useState(null); // بدل array

  const balloonColors = [
    "bg-gradient-to-br from-yellow-300 to-yellow-500",
    "bg-gradient-to-br from-red-400 to-red-600",
    "bg-gradient-to-br from-green-400 to-green-600",
  ];

  const balloonLabels = ["1.0", "2.0", "3.0"];

  const handlePop = (index) => {
    if (popped === index) return; // لو دوسيت نفس البالون متعملش حاجة
    setPopped(index); // خلي هذا البالون مفروق

    onVersionChange(index + 1); // خبر parent بالنسخة
  };

  return (
    <div className="flex justify-center gap-10 pt-20">
      {balloonLabels.map((label, i) => (
        <div key={i} className="relative w-[100px] h-50">

          {/* إظهار البالون أو الانفجار */}
          {popped === i ? (
            <Explosion color={balloonColors[i]} />
          ) : (
            <div
              className={`balloon animate-float ${balloonColors[i]}`}
              onClick={() => handlePop(i)}
            >
              <div className="balloon-bottom"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 
                        -translate-y-1/2 text-2xl font-bold text-white">
                {label}
              </div>
              <div className="string absolute top-32 left-1/2 -translate-x-1/2 w-[30px] h-[100px]">
                <svg viewBox="0 0 20 60">
                  <path d="M 10 0 Q 5 10, 10 20 Q 15 30, 10 40 Q 5 50, 10 60" stroke="#333" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          )}

        </div>
      ))}

    </div>
  );
}