class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let mapS = {};
        let mapT = {};

        for (let i = 0; i < s.length; i++) {
            if (s[i] in mapS) {
                mapS[s[i]] = mapS[s[i]] + 1;
            } else {
                mapS[s[i]] = 1;
            }
        }

        for (let i = 0; i < t.length; i++) {
            if (t[i] in mapT) {
                mapT[t[i]] = mapT[t[i]] + 1;
            } else {
                mapT[t[i]] = 1;
            }
        }

        for (const key in mapS) {
            if (mapS[key] !== mapT[key]) {
                return false;
            }
        }

        return true;
    }
}
