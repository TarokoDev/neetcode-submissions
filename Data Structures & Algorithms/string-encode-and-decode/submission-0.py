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
        
        # 5#Hello5#World

        words = []
        while len(s) != 0:
            length = int(s[0])
            word = s[2: length + 2]
            words.append(word)
            s = s[length + 2:]

        return words



