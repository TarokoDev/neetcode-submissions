class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;

        const charMap = {
            '(' : ')',
            '{' : '}',
            '[' : ']'
        }

        let stack = []

        for (const char of s) {
            if (char in charMap) {
                stack.push(char)
            } else if (charMap[stack[stack.length - 1]] === char) {
                stack.pop()
            } else {
                return false;
            }
        }
        return stack.length === 0
    }
}
