class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let freq = {};

        for (let i = 0; i < nums.length; i++) {
            if (freq[nums[i]] === undefined) {
                freq[nums[i]] = 1;
            } else {
                freq[nums[i]] += 1;
            }
        }

        const sorted = Object.entries(freq).sort((a, b) => (b[1] - a[1]));

        let res = [];
        
        for (let i = 0; i < k; i++) {
            res.push(parseInt(sorted[i][0]))
        }

        return res;
    }
}
