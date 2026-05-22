class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        
        hash = {}

        for num in nums:
            if num not in hash:
                hash[num] = 1
            else:
                hash[num] += 1

        array = []

        for key, value in hash.items():
            array.append([value, key])

        array.sort(reverse=True)

        result = []

        for i in range(k):
            result.append(array[i][1])

        return result

        