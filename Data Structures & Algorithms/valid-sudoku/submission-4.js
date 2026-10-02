class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
            let rowSet = new Set();
            let colSet = new Set();
            for (let j = 0; j < 9; j++) {
                let row = board[i][j];
                let col = board[j][i];

                if (row !== ".") {
                    if (rowSet.has(row)) return false;
                    rowSet.add(row);
                }
                if (col !== ".") {
                    if (colSet.has(col)) return false;
                    colSet.add(col);
                }
            }
        }

        for (let row = 0; row < 9; row += 3) {
            for (let col = 0; col < 9; col += 3) {
                let set = new Set();
                for (let i = row; i < row + 3; i++) {
                    for (let j = col; j < col + 3; j++) {
                        let val = board[i][j];
                        if (val !== ".") {
                            if (set.has(val)) return false;
                            set.add(val);
                        }
                    }
                }
            }
        }
        return true;
    }
}
