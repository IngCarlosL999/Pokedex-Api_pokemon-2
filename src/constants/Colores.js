const colorByTypes ={
    normal:"bg-[#BCBCAC]",
    fighting: "bg-[#bc5442]",
    flying: "bg-[#669aff]",
    poison: "bg-[#ab549a]",
    ground: "bg-[#debc54]",
    rock: "bg-[#bcac66]",
    bug:"bg-[#abbc1c]",
    ghost:"bg-[#6666bc]",
    steel:"bg-[#abacbc]",
    fire:"bg-[#ff421c]",
    water:"bg-[#2f9aff]",
    grass:"bg-[#78cd54]",
    electric:"bg-[#ffcd30]",
    psychic:"bg-[#ff549a]",
    ice: "bg-[#78deff]",
    dragon:"bg-[#7866ef]",
    dark:"bg-[#785442]",
    fairy:"bg-[#ffacff]",
    unknow:"",
    shadow:"",

  }

  const colorByStat = {
    HP: "[&>div]:bg-[#78cd54] bg-slate-100",
    ATK: "[&>div]:bg-[#ff421c] bg-slate-100",
    DEF: "[&>div]:bg-[#bcac66] bg-slate-100",
    SPA: "[&>div]:bg-[#6666bc] bg-slate-100",
    SPD: "[&>div]:bg-[#ff549a] bg-slate-100",
    SPEED: "[&>div]:bg-[#bc5442] bg-slate-100",
    TOT: "[&>div]:bg-[#2f9aff] bg-blue-300",
  };

  const colorByText = {
    normal: "text-[#BCBCAC]",
    fighting: "text-[#bc5442]",
    flying: "text-[#669aff]",
    poison: "text-[#ab549a]",
    ground: "text-[#debc54]",
    rock: "text-[#bcac66]",
    bug: "text-[#abbc1c]",
    ghost: "text-[#6666bc]",
    steel: "text-[#abacbc]",
    fire: "text-[#ff421c]",
    water: "text-[#2f9aff]",
    grass: "text-[#78cd54]",
    electric: "text-[#ffcd30]",
    psychic: "text-[#ff549a]",
    ice: "text-[#78deff]",
    dragon: "text-[#7866ef]",
    dark: "text-[#785442]",
    fairy: "text-[#ffacff]",
    unknown: "", // Cambié "unknow" a "unknown" para mantener la consistencia
    shadow: "",
};

const borderByTypes = {
  normal: "border-[#BCBCAC]",
  fighting: "border-[#bc5442]",
  flying: "border-[#669aff]",
  poison: "border-[#ab549a]",
  ground: "border-[#debc54]",
  rock: "border-[#bcac66]",
  bug: "border-[#abbc1c]",
  ghost: "border-[#6666bc]",
  steel: "border-[#abacbc]",
  fire: "border-[#ff421c]",
  water: "border-[#2f9aff]",
  grass: "border-[#78cd54]",
  electric: "border-[#ffcd30]",
  psychic: "border-[#ff549a]",
  ice: "border-[#78deff]",
  dragon: "border-[#7866ef]",
  dark: "border-[#785442]",
  fairy: "border-[#ffacff]",
  unknown: "",
  shadow: "",
};

const degradado = {
  normal: "#BCBCAC",
  fighting: "#bc5442",
  flying: "#669aff",
  poison: "#ab549a",
  ground: "#debc54",
  rock: "#bcac66",
  bug: "#abbc1c",
  ghost: "#6666bc",
  steel: "#abacbc",
  fire: "#ff421c",
  water: "#2f9aff",
  grass: "#78cd54",
  electric: "#ffcd30",
  psychic: "#ff549a",
  ice: "#78deff",
  dragon: "#7866ef",
  dark: "#785442",
  fairy: "#ffacff",
  unknown: "",
  shadow: "",
};

  export {colorByTypes , colorByStat, colorByText, borderByTypes, degradado}