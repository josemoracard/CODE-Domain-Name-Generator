/* eslint-disable */

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let x = 0; x < pronoun.length; x++) {
  for (let y = 0; y < adj.length; y++) {
    for (let z = 0; z < noun.length; z++) {
      console.log(pronoun[x] + adj[y] + noun[z] + ".com");
    }
  }
}
