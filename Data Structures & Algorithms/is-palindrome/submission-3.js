class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumeric(char) {
        if (char >= 'A' && char <= 'Z') return true;
        if (char >= 'a' && char <= 'z') return true;
        if (char >= '0' && char <= '9') return true;
        
        return false;
    }

    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left <= right) {

            if (this.isAlphanumeric(s[left]) === false) {
                left += 1;
                continue;
            }
            
            if (this.isAlphanumeric(s[right]) === false) {
                right -= 1;
                continue;
            }
            
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left += 1;
            right -= 1;
        }

        return true;
    }
}
