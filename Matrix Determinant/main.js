function determinant(matrix) {
  const n = matrix.length;

  if (n === 1) {
    return matrix[0][0];
  }

  if (n === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  let det = 0;

  for (let j = 0; j < n; j++) {
    const a = matrix[0][j];
    const sign = (j % 2 === 0) ? 1 : -1;
    const a_minor = [];

    for (let i = 1; i < n; i++) {
      const row = matrix[i].slice(0, j).concat(matrix[i].slice(j + 1));
      a_minor.push(row);
    }

    det += sign * a * determinant(a_minor);
  }

  return det;
}