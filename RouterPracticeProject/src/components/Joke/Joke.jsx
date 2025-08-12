import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Joke() {
//   const [joke, setJoke] = useState("");
//   const jokefun = async () => {
//     let res = await fetch("https://official-joke-api.appspot.com/random_joke");
//     let data = await res.json();
//     setJoke(data);
//   };
//   useEffect(() => jokefun, []);
let joke =useLoaderData()
  return (
    <div>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  );
}

export default Joke;

export const jokefunction = async () => {
  let res = await fetch("https://official-joke-api.appspot.com/random_joke");
  let data = await res.json();
  return data;
};
