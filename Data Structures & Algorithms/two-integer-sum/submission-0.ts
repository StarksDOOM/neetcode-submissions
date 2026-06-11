class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // Our memory bank database 
        // Key: The number we saw, Value: The index position where we found it
        const map = new Map<number, number>();

        // Single pass layout to look at every number one-by-one
        for (let i = 0; i < nums.length; i++) {
            // Calculating the exact missing piece we need to hit the target
            const difference = target - nums[i];

            if (map.has(difference)) {
                let firstItem = map.get(difference);
                let secondItem = i; 
                return [firstItem, secondItem];
            }

            map.set(nums[i], i);
        }

        return [];
    }
}
