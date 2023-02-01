function sortedFrequency(arr, target) {
    let indices = 0;
    
    let idx = arr.indexOf(target);
    while (idx !== -1) {
      indices+=1;
      idx = arr.indexOf(target, idx + 1);
      
    }
    if(!arr.includes(target)) return -1
    return indices;
    
    

}

module.exports = sortedFrequency