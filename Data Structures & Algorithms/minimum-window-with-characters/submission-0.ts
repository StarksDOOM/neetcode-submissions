class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        // Step 1: Build a frequency map of the characters we need to find in string 't'
        let targetMap = new Map(); 

        for (let i = 0; i < t.length; i++) {
            if (targetMap.has(t[i])) {
                targetMap.set(t[i], targetMap.get(t[i]) + 1);
            } else { 
                targetMap.set(t[i], 1); 
            }
        }

        // Step 2: Initialize sliding window pointers and status counters
        let start = 0;                  // Left boundary of our sliding window
        let windowMap = new Map();       // Tracks character frequencies inside our current window
        let have = 0;                   // Number of unique characters satisfying target criteria
        let need = targetMap.size;       // Total number of unique characters required to be valid
        let minLength = Infinity;       // Record holder for shortest window length found
        let res = "";                   // Record holder for the actual shortest substring text

        // Step 3: Expand the window by moving the 'end' pointer forward
        for (let end = 0; end < s.length; end++ ) {
            
            // Add the incoming right-side character to our window map
            if ( windowMap.has(s[end]) ) {
                windowMap.set(s[end], windowMap.get(s[end]) + 1);
            } else {
                windowMap.set(s[end], 1);
            }

            // If the character's frequency perfectly matches the target frequency,
            // we checked off one item on our unique character checklist!
            if (windowMap.get(s[end]) === targetMap.get(s[end])) {
                have++;
            }

            // Step 4: The window is valid! Try to shrink it from the left to find a smaller one
            while (have === need) {
                
                // If the current window size is strictly smaller than our record baseline...
                if ((end - start) + 1 < minLength) {
                    minLength = (end - start) + 1; // Update the shortest length record
                    res = s.slice(start, end + 1); // Extract and save the record substring
                }

                // Capture the character leaving the window from the left boundary
                let leftChar = s[start];
                
                // Decrement its frequency since it is no longer inside the window
                windowMap.set(leftChar, windowMap.get(leftChar) - 1);

                // If this character was required, and its count dropped below what we need,
                // our window is no longer valid. Mark it off our checklist.
                if (windowMap.get(leftChar) < targetMap.get(leftChar)) {
                    have--;
                }

                // Physically slide the left pointer inward to check the next window
                start++;
            }
        }

        // Step 5: Return the final shortest valid substring we recorded
        return res;

    }
}
