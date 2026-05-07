class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};

        for (let i = 0; i < nums.length; i++) {
            if (map[nums[i]] === undefined) {
                map[nums[i]] = i;
            }
        }

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];

            if (complement in map && map[complement] !== i) {
                return [i, map[complement]]
            }
        }
    }
}
