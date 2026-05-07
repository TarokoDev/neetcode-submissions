class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // check if s and t are the same length
        if (s.length !== t.length) return false;

        let mapS = {}
        let mapT = {}

        for (let i = 0; i < s.length; i++) {
            if (s[i] in mapS ) {
                mapS[s[i]] += 1;
            } else {
                mapS[s[i]] = 1; 
            }
        }

        for (let i = 0; i < t.length; i++) {
            if (t[i] in mapT) {
                mapT[t[i]] += 1;
            } else {
                mapT[t[i]] = 1;
            }
        }

        for (var i in mapS) {
            if (mapS[i] !== mapT[i]) {
                return false
            }
        }

        return true;
    }
}
