class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower();

        left = 0
        right = len(s) - 1

        while left <= right:
            if s[left].isalnum() != True:
                left += 1
            if s[right].isalnum() != True:
                right -= 1

            if s[left] == s[right]:
                left += 1
                right -= 1
            else:
                return False

        return True