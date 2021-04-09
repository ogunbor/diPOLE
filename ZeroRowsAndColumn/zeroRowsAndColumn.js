let make_zeroes = function(matrix) {
    if (!matrix || matrix.length === 0) {
        return;
    }

    let zero_rows = new Set();
    let zero_cols = new Set();

    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                if (!zero_rows.has(i)) {
                    zero_rows.add(i);
                }
                if (!zero_cols.has(j)) {
                    zero_cols.add(j);
                }
            }
        }
    }

    zero_rows.forEach(function(r) {
        for (let c = 0; c < cols; c++) {
            matrix[r][c] = 0;
        }
    });

    zero_cols.forEach(function(c) {
        for (let r = 0; r < rows; r++) {
            matrix[r][c] = 0;
        }
    });
};

let create_random_matrix = function(rows, cols) {
    let v = [];

    for (let i = 0; i < rows; i++) {
        v.push([]);
        for (let j = 0; j < cols; j++) {
            let t = Math.floor(Math.random() * 100 + 1);
            v[i].push(t);
            if (t <= 5) {
                v[i][j] = 0;
            }
        }
    }
    return v;
};