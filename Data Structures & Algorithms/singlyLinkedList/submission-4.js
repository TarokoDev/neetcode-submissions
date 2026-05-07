class ListNode {
    constructor(value, next = null) {
        this.val = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.head.next;
        let i = 0;

        while (curr) {
            if (i === index) {
                return curr.val;
            } else {
                i++
                curr = curr.next;
            }
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new ListNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;

        if (this.head === this.tail) {
            this.tail = newNode;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let newNode = new ListNode(val);
        newNode.next = null;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let curr = this.head.next;
        let i = 0;
        let prev = this.head;

        while (curr) {
            if (i === index) {
                prev.next = curr.next;

                if (curr === this.tail) {
                   this.tail = prev;
                }
                return true;
            }
            prev = curr;
            curr = curr.next;
            i++
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let res = [];

        let curr = this.head.next;

        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }

        return res;
    }
}
