class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let map = {}

        for (let i = 0; i < nums.length; i++) {
            let compliment = target - nums[i]
            if (compliment in map) {
                return [i, map[compliment]]
            } else {
                map[nums[i]] = i
            }
        }
    }
}
