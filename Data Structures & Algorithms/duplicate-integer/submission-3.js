class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] in map) {
                // already exist
                return true;
            } else {
                // not present yet, add it in
                map[nums[i]] = true;
            }
        }
        return false // no duplicates
    }
}
