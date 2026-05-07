class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    binarySearch(array, target) {
        let left = 0;
        let right = array.length - 1;

        while (left <= right) {

            let mid = Math.floor((left + right) / 2);

            if (left === right) {
                mid = left;
            }

            if (array[mid] === target) {
                return true;
            } else if (target > array[mid]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return false;
    }

    searchMatrix(matrix, target) {

        for (let i = 0; i < matrix.length; i++) {
            if (this.binarySearch(matrix[i], target)) {
                return true;
            }
        }
        return false;

    }
}
