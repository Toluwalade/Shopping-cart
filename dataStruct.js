// Problem One

// First Solution
function distinctSum(set1, set2) {
    var sum = 0;
    var distinctElements = [];
    for (var i = 0; i < set1.length; i++) {
        if (set2.includes(set1[i]) == false) {
           sum += set1[i];
           distinctElements.push(arr1[i]); 
        }
    }
    for (var j = 0; j < set2.length; j++) {
        if (set1.includes(set2[j]) == false) {
            sum += set2[j];
            distinctElements.push(set2[j]); 
         }
    }
    distinctElements = distinctElements.toString();
    return `${sum} (distinct elements ${distinctElements})`;
}

//  console.log(distinctSum([3, 1, 7, 9], [2, 4, 1, 9, 3]));


 // Second Solution
function distinctSum2(set1, set2) {
    var sum = 0;
    var count = {};
    var distinct = [];
    var set = set1.concat(set2);
    set.forEach(function (i) {
      count[i] = (count[i] || 0) + 1;
    });
    for (var key in count) {
      if (count[key] == 1) {
        sum += parseInt(key);
        distinct.push(key);
      }
    }
    return `${sum} (distinct elements ${distinct.toString()})`;
  }
//    console.log(distinctSum2([3, 1, 7, 9], [2, 4, 1, 9, 3]));


   // Problem 2

   // First Solution
   function overlappingSum(set1, set2) {
    var sum = 0;
    var overlappingElements = [];
    for (var i = 0; i < set1.length; i++) {
      if (set2.includes(set1[i])) {
        sum += set1[i];
        overlappingElements.push(set1[i]);
      }
    }
    for (var j = 0; j < set2.length; j++) {
      if (set1.includes(set2[j])) {
        sum += set2[j];
        overlappingElements.push(set2[j]);
      }
    }
    return `Sum of overlapping elements: ${sum}`;
  }
  
 console.log(overlappingSum([12, 13, 6, 10], [13, 10, 16, 15]));


 // Second Solution
 function overlappingSum2(set1, set2) {
    var sum = 0;
    var count = {};
    var overlap = [];
    var set = set1.concat(set2);
    set.forEach(function (i) {
      count[i] = (count[i] || 0) + 1;
    });
    for (var key in count) {
      if (count[key] > 1) {
        sum += parseInt(key) * count[key];
        overlap.push(key);
      }
    }
    return `Sum of overlapping elements: ${sum}`;
  }

// console.log(overlappingSum2([12, 13, 6, 10], [13, 10, 16, 15]));