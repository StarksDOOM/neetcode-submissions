class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const count: { [key: string]: number } = {};

        // Loop 1: Build the scoreboard using string s
        for (const char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        // Loop 2: Walk through string t and subtract from the scoreboard
        for (const char of t) {
            // If the letter isn't on the board or its count is 0, it's a mismatch
            if (!count[char]) {
                return false;
            }
            
            // Otherwise, subtract 1 from its score
            count[char]--;
        }

        // If both loops finish with no issues, they match perfectly!
        return true;
    }
}
