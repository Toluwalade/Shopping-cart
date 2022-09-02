// ONE
function dot_product(v1, v2) {
    var ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    return ps;
  }
  console.log(dot_product([2, 4], [8, -4]));


  // TWO
  function isOrthogonal(v1, v2) {
    if (dot_product(v1, v2) === 0) {
      return `v1 and v2 are orthogonal`;
    } else {
      return `v1 and v2 are NOT orthogonal`;
    }
  }
  console.log(isOrthogonal([2, 4], [8, -4]));