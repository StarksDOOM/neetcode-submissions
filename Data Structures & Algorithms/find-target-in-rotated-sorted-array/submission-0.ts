class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        //define left and right points
        let left = 0;
        let right = nums.length - 1;

        while (left <= right ) {
            //lets define the middle
            let mid = Math.floor((left + right) / 2);

            //we found the jackpot!
            if( nums[mid] === target ) {
                return mid;
            } else if (nums[left] <= nums[mid]) { // Left side is sorted
            
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1; // Target is in the left half!
                } else {
                    left = mid + 1;  // Target is in the right half!
                }

            } else {

                //right side is sorted
                if (target <= nums[right] && target > nums[mid]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }   
            }

        }

        //target was never found
        return -1;
    }
}
