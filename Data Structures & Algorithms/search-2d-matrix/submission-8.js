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

            if (array[mid] === target) {
                return true;
            } else if (array[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return false;
    }


    searchMatrix(matrix, target) {

        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][0] <= target && target <= matrix[i][matrix[i].length - 1]) {
                return this.binarySearch(matrix[i], target)
            }
        }

        return false;
    }
}
