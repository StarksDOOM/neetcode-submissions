class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        //lets define the necessary vars
        let left = 0;
        let right = nums.length - 1;

        while ( left < right ) {
            //lets calculate middle
            let mid = Math.floor( (left + right) / 2);

            if ( nums[mid] > nums[right] ) {
                //too big, the dropoff is on the right
                left = mid + 1;
            } else {
                
                //mid could be the min or its to the left
                right = mid;
            }
        }

        // left and right met at the minimum value's index
        return nums[left];

    }
}
