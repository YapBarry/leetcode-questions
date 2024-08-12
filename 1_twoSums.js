/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    
    // loop through each element nums array
    for(let i=0; i< nums.length; i++){
        // if complement to the element exists in the hashtable, return the index of the element and the index of the complement
        if(map.has(target-nums[i])){
            return [i, map.get(target-nums[i])]
        } else { // if not, store the element's index in the hashtable
            map.set(nums[i],i)
        }
    }

};