class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let left = 0;

        //Lets grab the rows and columns
        let m = matrix.length;
        let n = matrix[0].length;

        //lets translate that now
        let right = (m * n) - 1;

        while ( left <= right ) {
            let mid = Math.floor( (left + right) / 2);

            // Map virtual 1D index back to 2D coordinates
            let row = Math.floor(mid / n);
            let col = mid % n;
            let val = matrix[row][col];

            //lets evaluate the guess here
            if( val === target ) {
                return true; //we found it!
            } else if ( val < target ) {
                left = mid + 1; //we look more to the right because its too low
            } else {
                right = mid - 1; //we look more to the left because its too high
            }

        }

        //if the loop finishes without finding a target
        return false;
    }
}
