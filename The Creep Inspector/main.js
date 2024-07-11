import { predict } from "./predict.js";

let simpleCases = [

    [6, ["###########",
    "#...#.1...#",
    "#...#1111.#",
    "#.#.#11212#",
    "#.....3.23#"],
        ["...",
         "...",
         "..."]]
  ];


  for (let [nr, room, expected] of simpleCases) {
    console.log(`Case #${nr}`);
    console.log( room.join("\n"));
    console.log(predict( room.join("\n")));
    console.log( expected.join("\n"));
  }

  console.log(`end`);
//console.log(predict(".0.\n000\n.0."));

