import React, { useState } from "react";
import BmiCalc from "./BmiCalc";

function HeroSection() {
  const [weight, Setweight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, SetBmi] = useState('');
  const [massage, setMassage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    if (weight == 0 || height == 0) {
      setMassage("Enter Your mesure Should not be Zero");
    } else {
      const BMI = weight / (height * 0.3048 * (height * 0.3048));
      SetBmi(BMI.toFixed(1));
      if (BMI < 18.5) {
        setMassage("Underweight");
      } else if (BMI >= 18.5 && BMI <= 24.9) {
        setMassage("Normal Weight");
      } else if (BMI >= 25.0 && BMI <= 29.9) {
        setMassage("Overweight");
      } else {
        setMassage("Obess");
      }
    }
  };
  const handleReload = () => {
    setHeight(0);
    Setweight(0);
  };

  return (
    <div className="w-[40%] bg-white p-7 pb-7 pt-7 flex flex-col justify-center m-auto mt-4 rounded-lg py-1">
      <form onSubmit={handleForm}>
        <div className="flex flex-col  py-1">
          <label htmlFor="Weight">Enter Your Weight:</label>
          <input
            className="border rounded-sm m-1"
            value={weight}
            type="number"
            onChange={(e) => Setweight(e.target.value)}
          />
        </div>
        <div className="flex flex-col py-1">
          <label htmlFor="Height">Enter Your Height:</label>
          <input
            className="border rounded-sm m-1"
            value={height}
            type="number"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap flex-col gap-4 justify-around py-4 md:flex-row  ">
          <button  className="bg-black text-white  hover:bg-transparent hover:text-black border py-1 px-3 rounded-sm ">
            Submit
          </button>
          <button
           className="bg-transparent hover:bg-indigo-500 border py-1 px-3 rounded-sm"
  
            onClick={handleReload}
          >
            Reset
          </button>
        </div>
      </form>
      <div className="flex flex-col flex-wrap w-full">
        <p className="font-bold w-full ">Your BMI :  {bmi}</p>
        <p className={massage =="Obess"? "text-red-600":"text-green-500"} >{massage}</p>
      </div>
      <div>
        {}
      </div>
    </div>
  );
}

export default HeroSection;
