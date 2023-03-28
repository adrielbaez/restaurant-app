import React from "react";
import { MENU_OPTIONS } from "@/utils";

export const HeadLineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      {MENU_OPTIONS.map((category, i) => (
        <div className="rounded-xl relative" key={`category_${i}`}>
          {/* overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">{category.name}</p>
            <p className="px-2">{category.promotion}</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl font-medium px-2">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:m-h-[200px] w-full object-cover rounded-xl"
            src={category.img}
            alt={category.name}
          />
        </div>
      ))}
    </div>
  );
};
