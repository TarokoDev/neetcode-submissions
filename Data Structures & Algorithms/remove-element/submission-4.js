class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = nums.length;
        let i = 0;

        while (i < k) {
            if (nums[i] === val) {
                nums[i] = nums[k - 1];
                k -= 1;
            } else {
                i += 1;
            }
        }

        return k;
    }
}
