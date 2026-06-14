class TimeMap {

    keyStore: Map<string, { value: string; timestamp: number }[]>;

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        //we check if the key exists already... if it doesnt set an empty array
        if( !this.keyStore.has(key) ) this.keyStore.set(key, []);

        //then we add the key into the array
        this.keyStore.get(key).push({ value, timestamp });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {

        //if there is no result, just return empty string
        if( !this.keyStore.has(key) ) return "";

        //store the history from the keystore
        const history = this.keyStore.get(key);

        //backwards loop to find the newest item
        for( let i = history.length -1; i >= 0; i--) {
            
            if (history[i]['timestamp'] <= timestamp) {
                return history[i]['value'];
            }
        }

        //fallback if the target timestamp is older than our earliest entry
        return "";

    }
}
