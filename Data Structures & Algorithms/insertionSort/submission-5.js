/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {

        let result = [];
        if (pairs.length === 0) return result;
        result.push([...pairs])

        for (let i = 1; i < pairs.length; i++) {
            let temp = pairs[i];
            let j = i - 1;

            while (j >= 0 && temp.key < pairs[j].key) {
                pairs[j+1] = pairs[j]
                j--
            }
            pairs[j+1] = temp
            result.push([...pairs]);
        }
        return result;
    }
}
