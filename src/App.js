import './App.css';
import Board from './Board.js'
import {
  blackBishop, blackPawn, blackRook, blackKnight,
  blackKing, blackQueen, whiteBishop, whiteKing, whiteKnight,
  whitePawn, whiteRook, whiteQueen
} from './pieces';

const App = () => {
  return (
    <div className="App">
      <p>Hello world!</p>
      <Board />
    </div>
  );
}

export default App;
