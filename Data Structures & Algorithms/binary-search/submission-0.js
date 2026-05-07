class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let leftIdx = 0
        let rightIdx = nums.length - 1

        while (leftIdx <= rightIdx) {
            let midIdx = Math.floor((leftIdx + rightIdx) / 2)

            if (nums[midIdx] === target) {
                return midIdx
            } else if (nums[midIdx] > target) {
                rightIdx = midIdx - 1
            } else if (nums[midIdx] < target) {
                leftIdx = midIdx + 1
            }
        }
        return -1
    }
}
