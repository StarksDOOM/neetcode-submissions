class DynamicArray {
    cap: number;
    arr_size: number;
    storage: number[];

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        //store capacity
        this.cap = capacity;

        //lets set the initial array size
        this.arr_size = 0;

        //lets also create the initial storage array
        this.storage = new Array(this.cap);
    }

    /**
     * @param {number} - The current index in the array
     * @returns {number}
     */
    get(i: number): number {
        return this.storage[i];
    }

    /**
     * @param {number} i - Index of the element to update
     * @param {number} n - New value to set at the given index
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.storage[i] = n;
    }

    /**
     * @param {number} n - The element to add to the end of the array
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.arr_size === this.cap) this.resize();
        this.storage[this.arr_size] = n;
        this.arr_size++;
    }

    /**
     * @returns {number} - The element removed from the end of the array
     */
    popback(): number {
        let i = this.arr_size - 1;
        let newPos = this.storage[i];
        this.arr_size--;
        return newPos;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        // Inside resize()
        let newStorage = new Array(this.cap * 2);

        // Loop through the current size and move items over
        for (let i = 0; i < this.arr_size; i++) {
            newStorage[i] = this.storage[i];
        }

        // Now update the ledger
        this.storage = newStorage;
        this.cap = this.cap * 2;
    }

    /**
     * @returns {number} - The current number of elements in the array
     */
    getSize(): number {
        return this.arr_size;
    }

    /**
     * @returns {number} - The total capacity of the array
     */
    getCapacity(): number {
        return this.cap;
    }
}
