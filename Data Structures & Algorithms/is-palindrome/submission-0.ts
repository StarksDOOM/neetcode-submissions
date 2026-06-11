class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;
        s = s.toLowerCase();

        while ( left < right ) {

            while (left < right && !this.isAlphaNumeric(s[left])) {
                left++;
            }

            while (left < right && !this.isAlphaNumeric(s[right])) {
                right--;
            }

            if(s[left] !== s[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    /**
     * @param {string} char
     * @return {boolean}
     */
    isAlphaNumeric(char: string): boolean {
        const code = char.charCodeAt(0);
        return (code >= 48 && code <=57) || (code >= 97 && code <=122);
    }
}
