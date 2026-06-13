class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        //Initialize vars
        let left = 1;
        let right = Math.max(...piles);

        while ( left <= right ) {
            let mid = Math.floor( ( left + right ) / 2 );
        
            //Initialize hours spent
            let hoursSpent = 0;

            //lets loop through the piles to get the running total across hours
            for (const pile of piles ) {
                hoursSpent += Math.ceil( pile / mid );
            }

            //eval totals here
            if( hoursSpent > h ) {
                
                //too slow, lets pick up the speed a little
                left = mid + 1;
            } else {

                //too fast, lets slow down
                right = mid - 1;
            }

        }

        //this will be the smallest speed remaining
        return left;
    }
}
