import React, { useState } from "react";

function BGColor() {
  const [color, setcolor] = useState("olive");
  return (
    <div
      className=" w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex  flex-wrap justify-center bottom-12
    inset-x-0 px-2  gap-4"
      >
        <button className="bg-red-800 px-5 py-3 rounded-lg text-2xl text-white" onClick={()=>setcolor('red')}>
          Red
        </button>
        <button className="bg-green-800 px-5 py-3 rounded-lg text-2xl text-white"  onClick={()=>setcolor('green')}>
          Green
        </button>
        <button className="bg-blue-800 px-5 py-3 rounded-lg text-2xl text-white"  onClick={()=>setcolor('blue')}>
          Blue
        </button>
        <button className="bg-gray-800 px-5 py-3 rounded-lg text-2xl text-white"  onClick={()=>setcolor('gray')}>
          Gray
        </button>
      </div>
    </div>
  );
}

export default BGColor;
