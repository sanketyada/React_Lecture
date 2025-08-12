import React, { useCallback, useEffect, useRef, useState } from "react";

function PassWordGenerate() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef =useRef()

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJHLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+{}[]'<>,./?|";

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswod =useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3) for range Selection
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);


  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md
        rounded-lg p-4 my-8 text-orange-400 bg-gray-500"
      >
        <h1 className="text-center font-bold text-2xl text-white">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="py-1 px-3 w-full bg-white my-2 rounded-lg text-black"
            readOnly
            placeholder="Password"
            value={password}
            ref={passwordRef}
          />
          <button onClick={copyPasswod} className="outline-none bg-blue-700 text-white px-2 py-3 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className=" flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length :{length}</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={(e) => {
                setCharallowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PassWordGenerate;
