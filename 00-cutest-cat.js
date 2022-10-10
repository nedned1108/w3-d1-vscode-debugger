/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.
*/

function cutestCat(cats) {
  let cutest = {};
  cutest.name = ""
  cutest.cuteness = 0;
  debugger
  
  let i = 0;
  while (i < cats.length) {
    let cat = cats[i];
    
    debugger
    if (cat.cuteness > cutest.cuteness) {
      cutest.name = cat.name;
      cutest.cuteness = cat.cuteness;
      debugger
    }
    i++;
    debugger
  }
  
  debugger;
  return cutest
}


const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]
debugger
console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
