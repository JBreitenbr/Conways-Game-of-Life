export default function GameDescription() {
  return (
    <div className="game_description bold">
      <p>
The Game of Life is a cellular automaton devised by the British mathematician John H. Conway in 1970.The universe of the Game of Life is a two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead.Every cell interacts with its eight neighbours- at each step in
time ("generation"), the following transitions occur:
      </p>
      <ul>
        <li>
          Any live cell with fewer than two live neighbours dies.
        </li>
        <li>
          Any live cell with two or three live neighbours lives on to the next generation.
        </li>
        <li>
          Any live cell with more than three live neighbours dies.
        </li>
        <li>
          Any dead cell with three live neighbours becomes a live cell.
        </li>
      </ul>
    </div>
  );
}
