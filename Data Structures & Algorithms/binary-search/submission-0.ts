class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        //lets define the intial stuff first
        let left = 0;
        let right = nums.length - 1;

        while ( left <= right ) {
            let mid = Math.floor((left + right) / 2);

            if ( nums[mid] === target ) {
                //This is the jackpot
                return mid;
            } else if ( nums[mid] < target ) {
                //The number is too low, look in the left half
                left = mid + 1;
            } else {
                //The number is too high, look in the right half
                right = mid - 1;
            }
        }

        //If the while loop breaks, the boundaries crossed and the 
        //target doesn't exist in the array.
        return -1;
        
    }
}
