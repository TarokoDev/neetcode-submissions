class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        anagram_map = {}

        for s in strs:
            #sort s first
            sorted_word = "".join(sorted(s))

            #check if sorted_word already exists in anagram_map
            if sorted_word in anagram_map:
                anagram_map[sorted_word].append(s)
            else:
                anagram_map[sorted_word] = [s]

        return list(anagram_map.values())