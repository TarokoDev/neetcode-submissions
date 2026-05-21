class Solution:
    def isValid(self, s: str) -> bool:

        if len(s) % 2 != 0:
            return False
        
        closingToOpeningMap = {
            "}" : "{",
            "]" : "[",
            ")" : "("
        }

        stack = []

        for char in s:
            if char not in closingToOpeningMap:
                stack.append(char)
            elif (char in closingToOpeningMap) & (stack[-1] == closingToOpeningMap[char]):
                stack.pop()
            else:
                return False

        return True
