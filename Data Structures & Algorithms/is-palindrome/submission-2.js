class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l <= r) {

            while (l < r && !this.isAlphaNumeric(s[l])) {
                l+=1
            }

            while (l < r && !this.isAlphaNumeric(s[r])) {
                r-=1
            }

            if (s[l].toLowerCase() === s[r].toLowerCase()) {
                l += 1;
                r -= 1;
            } else {
                return false
            }
        }

        return true;
    }

    isAlphaNumeric(c) {
        return (c >= 'A' && c <= 'Z' || 
                c >= 'a' && c <= 'z' || 
                c >= '0' && c <= '9');
    }
}
