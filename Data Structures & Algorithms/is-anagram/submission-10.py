class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        s_map = {}
        t_map = {}

        for i in range(len(s)):
            if s[i] in s_map:
                s_map[s[i]] += 1
            else:
                s_map[s[i]] = 1

            if t[i] in t_map:
                t_map[t[i]] += 1
            else:
                t_map[t[i]] = 1

        print(s_map)
        print(t_map)
        
        if s_map == t_map:
            return True 
        else:
            return False