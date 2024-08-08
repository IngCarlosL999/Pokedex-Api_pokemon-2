import { atRule } from "postcss";
import React from "react";

const Evolutions = ({ evolutionsSend }) => {
  console.log(evolutionsSend);
  return (
    <div>
      {evolutionsSend.map((evolution, index) => (
        <article className="items-center grid justify-center" key={evolution.name}>
          {index !== 0 && (
            <div className="bg-slate-200 p-2 rounded-full text-sm font-bold">
              <span>Lv. {evolution.min_level}</span>
            </div>
          )}
          <button className="hover:bg-slate-100 m-2 transition-colors rounded-3xl">
            <img src={evolution.image} alt="" />
          </button>
        </article>
      ))}
    </div>
  );
};

export default Evolutions;
