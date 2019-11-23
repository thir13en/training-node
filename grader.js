const scores = [90, 98, 89, 100, 100, 86, 94];
const reducer = (acc, curr) => acc + curr;

console.log(Math.round(scores.reduce(reducer) / scores.length));
