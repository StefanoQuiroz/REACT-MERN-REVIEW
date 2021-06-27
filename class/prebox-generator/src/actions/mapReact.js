/* const nums = [1,2,3,4,5,6];

const newNums = [];

for(let i=0; i<nums.length; i++){
    newNums.push(nums[i]*2);
}

console.table({nums, newNums});

console.log(nums.map(item => item*2)); */
const nums = [1,2,3,4,5,6];
const double = (num) => (num*2);
console.log(nums.map(double));