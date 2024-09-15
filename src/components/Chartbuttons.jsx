import React from "react";

function Chartbuttons({ data, onClick, selected }) {
  return (
    <div
      className={`min-w-[20%] max-w-fit border border-yellow-400 hover:bg-yellow-400  ${
        selected ? "bg-yellow-400 text-black" : ""
      } rounded px-1 py-1 lg:p-3 md:p-2 text-center text-white cursor-pointer`}
      onClick={onClick}
    >
      {data.lable}
    </div>
  );
}

export default Chartbuttons;
