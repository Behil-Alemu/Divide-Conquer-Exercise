function findRotatedIndex(arr, target) {
    // let firstIdx = 0;
    // let lastIdx = arr.length - 1;
    // nums = [...arr].sort((a, b) => a - b);

  
    // while (firstIdx <= lastIdx) {
    //   // find the middle value
    //   let middleIdx = Math.floor((firstIdx + lastIdx) / 2);
    //   let middleVal = nums[middleIdx];
  
    //   if (middleVal < target) {
    //     // middleVal is too small, look at the right half
    //     firstIdx = middleIdx + 1;
    //   } else if (middleVal > target) {
    //     // middleVal is too large, look at the left half
    //     lastIdx = middleIdx - 1;
    //   } else {
    //     // we found our value!
    //     return middleIdx;
    //   }
    // }
    
    // // left and right pointers crossed, val isn't in arr
    // return -1;

    
    let idx = arr.indexOf(target);
    
    if(!arr.includes(target)) return -1
    return idx;
}

module.exports = findRotatedIndex