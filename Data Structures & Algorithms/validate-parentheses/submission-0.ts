class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        //initialize the pile
        let stack: string[] = [];

        //define the brackets lookup dictionary
        let brackets = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        //Loop through each character in the string
        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            const openers = '([{';

            if( openers.includes(char) ) {
                //we found the opener so lets put it in the stack
                stack.push(char);
            } else {
                //its a closer, so lets take it off the stack
                let top = stack.pop();

                //lets check if the closer is not in the dictionary
                if( top !== brackets[char] ) {
                    return false;
                }
            }


        }

        //Final Check: Is the stack empty?
        return stack.length === 0;
    }
}
