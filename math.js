function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
// exports.add = (a,b) => a+b;

module.exports = {
  addFn: add,
  subFn: subtract,
};
