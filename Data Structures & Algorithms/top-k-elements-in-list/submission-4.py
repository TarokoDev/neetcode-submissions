class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count_map = {}

        for num in nums:
            if num in count_map:
                count_map[num] += 1
            else:
                count_map[num] = 1

        buckets = []

        for i in range(len(nums) + 1):
            buckets.append([])

        for key, value in count_map.items():
            buckets[value] = [key]

        print(buckets)

        result = []

        for bucket in reversed(buckets):
            if bucket != []:
                result.append(bucket[0])

            if len(result) == k:
                return result

            