class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        if (nums.length === 0) {
            return false;
        }
        
        for (var i = 0; i < nums.length; i++) {
            if (i === nums.length - 1) {
                return false;
            }

            for (var j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true
                }
            }
        }
    }
}
