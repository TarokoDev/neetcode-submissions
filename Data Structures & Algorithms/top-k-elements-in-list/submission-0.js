class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {}

        for (let num of nums) {
            freq[num] = (freq[num] || 0) + 1
        }

        let sort_desc = Object.entries(freq).sort((a, b) => b[1] - a[1]);
        console.log(sort_desc)

        let result = []

        for (let i = 0; i < k; i++) {
            result.push(sort_desc[i][0])
        }

        return result
    }
}
