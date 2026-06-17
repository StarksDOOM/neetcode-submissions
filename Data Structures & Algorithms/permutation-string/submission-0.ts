class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {

        //define var for frequency count
        let freqCount = new Map();

        //lets loop through each individual letter of s1
        for( let i = 0; i < s1.length; i++) { 
            if( freqCount.has(s1[i])) { 
                freqCount.set(s1[i], freqCount.get(s1[i]) + 1);
            } else { 
                freqCount.set(s1[i], 1 );
            }
        }

        //define vars for active window
        let start = 0;
        let maxLength = s1.length;
        let countMap = new Map();

        //lets loop through each individual letter of s2
        for( let end = 0; end < s2.length; end++) {

            if ( countMap.has( s2[end] ) ) { 
                countMap.set(s2[end], countMap.get(s2[end]) + 1);
            } else {
                countMap.set(s2[end], 1);
            }

            if( (end - start ) + 1 > maxLength ) { 
                countMap.set(s2[start], countMap.get(s2[start]) - 1 ); 
                start++; 
            }

            if( ( end - start ) + 1 === maxLength ) {
                //theres a match!
                if( this.matches( freqCount, countMap ) ) {
                    return true;
                }
            }
        }

        //found no matches
        return false;


    }

    /** 
     * @param {Map<string, number} freqCount
     * @param {Map<string, number} countMap
     * @return {boolean}
    */
    matches(freqCount: Map<string, number>, countMap: Map<string, number> ): boolean {
        
        //loop through both to make sure we get one that doesnt match
        for( let char of freqCount.keys() ) {
            if( freqCount.get(char) !== countMap.get(char) ) {
                return false;
            }
        }

        return true;
    }
}
