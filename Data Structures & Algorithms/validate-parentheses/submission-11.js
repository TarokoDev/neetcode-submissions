class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        if (s.length % 2 !== 0) return false;

        let isCLosing = {
            "]" : "[",
            ")" : "(",
            "}" : "{"
        }

        let stack = [];

        for (let i = 0; i < s.length; i++) {
            if (!(s[i] in isCLosing)) {
                stack.push(s[i]);
            } else if (s[i] in isCLosing) {
                if (stack[stack.length - 1] === isCLosing[s[i]]) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
