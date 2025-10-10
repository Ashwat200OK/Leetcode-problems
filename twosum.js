var twoSum = function (nums, target) {
    let left = 0;
    let right = left + 1;
    while (left - 1 < nums.length) {

        if (right < nums.length) {
            if (nums[left] + nums[right] === target) {
                return [left, right]
            } else {
                right++
            }
        } else {
            left++
            right = left + 1
        }
    }
};

console.log(twoSum([2, 7, 10, 12, 15], 9))


// [2, 7, 10, 12, 15]