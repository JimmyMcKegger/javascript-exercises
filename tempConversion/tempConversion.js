const ftoc = function(x) {
  let c = ((arguments[0] - 32.0) * (5 / 9));
  c = parseFloat(c.toFixed(1));
  return c;
}

const ctof = function(y) {
  let f = (arguments[0] * 1.8 + 32.0);
  f = parseFloat(f.toFixed(1));
  return f;
}

module.exports = {
  ftoc,
  ctof
}
