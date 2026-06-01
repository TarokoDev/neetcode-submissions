class Solution:

    def encode(self, strs: List[str]) -> str:

        # Hi There Amigo

        # 2#Hi5#There5#Amigo

        # length + seperator + value

        encodedStrs = ""
        for word in strs:
            encodedWord = str(len(word)) + '#' + word
            encodedStrs += encodedWord
        
        return encodedStrs

    def decode(self, s: str) -> List[str]:
        
        # 502#Hello5#World

        words = []
        while len(s) != 0:
            length = ""

            for char in s:
                if char != '#':
                    length += char
                else:
                    break
            
            hash_posh = len(length)
            length = int(length)
            word = s[hash_posh + 1: hash_posh + 1 + length]
            words.append(word)
            s = s[length + 2:]

        return words



