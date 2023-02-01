// function countZeroes() {
//     let firstIdx = 0;
//     let lastIdx = arr.length - 1;
//     while (firstIdx <= lastIdx) {
//         let middleIdx = Math.floor((firstIdx + rightIdx) / 2);
//     }
// }


function countZeroes(arr) {
    let indices = 0;
    const element = 0;
    let idx = arr.indexOf(element);
    while (idx !== -1) {
      indices+=1;
      idx = arr.indexOf(element, idx + 1);
    }
    return indices;
    }

module.exports = countZeroes;
