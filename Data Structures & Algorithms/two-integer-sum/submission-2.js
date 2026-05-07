class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let result = [];

        for (let i = 0; i < nums.length; i++) {
            let num1 = nums[i]
            let num2 = target - num1
            if (nums.indexOf(num2) !== -1) {
                if (num1 < num2) {
                    result = [i, nums.indexOf(num2)]
                } else {
                    result = [nums.indexOf(num2), i]
                }
            }
        }
        return result;
    }
}
