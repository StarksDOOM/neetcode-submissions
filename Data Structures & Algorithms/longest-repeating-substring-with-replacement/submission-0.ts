class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {

        //lets declare the necessary
        let start = 0;
        let maxLength = 0;
        let countMap = new Map();
        let maxFreq = 0;

        for (let end = 0; end < s.length; end++) {
            let char = s[end];
            let count = countMap.get(char) || 0;

            //update the map and our max frequency record
            countMap.set(char, count + 1);
            maxFreq = Math.max(maxFreq, countMap.get(char));

            //check if the expanded window is invalid using dynamic math
            if (((end - start + 1) - maxFreq) > k) {
                countMap.set(s[start], countMap.get(s[start]) - 1);
                start++;
            }

            //pointers are stable, now we calculate
            let window_size = (end - start) + 1;

            //record the maxlength seen so far
            maxLength = Math.max(maxLength, window_size);

        }

        return maxLength;
    }
}
