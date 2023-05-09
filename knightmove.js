// using breadth-first search to search for the shortest path from start to end

function knightMoves(start, end) {
  if (start[0] > 8 || start[1] < 0) {
    return "starting point is invalid";
  }
  if (end[0] > 8 || end[1] < 0) {
    return "ending point is invalid";
  }
  const moves = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];

  const queue = [[start, [start]]]; //[[current position,[path]]]
  const visited = new Set([start.toString()]); //visited position

  while (queue.length > 0) {
    const [currentPos, path] = queue.shift();
    if (currentPos.toString() == end.toString()) return path;

    for (const move of moves) {
      const nextPos = [currentPos[0] + move[0], currentPos[1] + move[1]];
      if (
        !visited.has(nextPos.toString()) &&
        nextPos[0] > 0 &&
        nextPos[0] <= 8 &&
        nextPos[1] > 0 &&
        nextPos[1] <= 8
      ) {
        visited.add(nextPos.toString());
        queue.push([nextPos, [...path, nextPos]]);
      }
    }
  }
}
console.log(knightMoves([1, 1], [8, 8]));
