class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        seen = {}

        for i, num in enumerate(nums):
            num2 = target - num
            if (num2 in seen) and (num2 != num):
                return [seen[num2], i]
            else:
                seen[num] = i