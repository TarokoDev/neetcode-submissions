class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class MyDeque {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.head === null && this.tail === null;
    }

    /**
     * @param {number} value
     */
    append(value) {
        let newNode = new ListNode(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        let newNode = new ListNode(value);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.isEmpty()) {
            return -1;
        }

        const popped = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        
        return popped.val;
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) {
            return -1;
        }

        const popped = this.head;

        if (this.head === this.tail) {
            this.head = null
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        return popped.val;
    }
}
