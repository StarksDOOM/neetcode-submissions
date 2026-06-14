class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let start = 0;
        let maxLength = 0;
        let charSet = new Set<string>(); // Our window's unique character checklist
        
        // 'end' will act as our scout, expanding the window to the right
        for (let end = 0; end < s.length; end++) {
            let char = s[end];

            // If we hit a duplicate, shrink the window from the left
            while ( charSet.has(char) ) {
                charSet.delete(s[start]);
                start++;
            }

            // Add the current safe character to our window checklist
            charSet.add(char);

            // Calculate current window size and update our high score
            let window_size = (end - start) + 1;
            maxLength = Math.max(maxLength, window_size);
        }
        
        return maxLength;
    }
}
