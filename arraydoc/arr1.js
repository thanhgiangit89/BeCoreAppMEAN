//const nums=new Array();
const nums=[1,10,4,3];
console.log(nums);

//sua
nums[1]=9;

// them cuoi
nums.push(0);
// them dau
nums.unshift(7)
// them giua
nums.splice(2,0,6);

// xoa dau
nums.shift();
// xoa cuoi
nums.pop();
// xoa o giua
nums.splice(2,1);

console.log(nums);
