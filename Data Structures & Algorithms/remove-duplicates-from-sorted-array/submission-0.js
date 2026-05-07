class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let n = nums.length;
        let j = 1;
        
        for (let i = 1; i < n; i++) {
            if (nums[i] != nums[i-1]) {
                nums[j] = nums[i];
                j += 1;
            }
        }
        return j
    }
}
