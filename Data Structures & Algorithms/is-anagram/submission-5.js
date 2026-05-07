class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // Sort method
        // if (s.length !== t.length) {
        //     return false;
        // }

        // let s_sort = s.split("").sort().join();
        // let t_sort = t.split("").sort().join();

        // if (s_sort === t_sort) {
        //     return true;
        // } else {
        //     return false;

        //Hash map or frequency counter method
        if (s.length !== t.length) {
            return false;
        }

        let freq = {}

        for (let char of s) {
            freq[char] = (freq[char] || 0) + 1
        }

        for (let char of t) {
            if (!freq[char]) return false;
            freq[char] -= 1;
        }

        return true;

    }
}
