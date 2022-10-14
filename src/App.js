import classNames from 'classnames';
import { useEffect, useState } from 'react';
import './App.css';
import Board from './Board.js'
import CaptureContainer from './CaptureContainer';
import {
  blackBishop, blackPawn, blackRook, blackKnight,
  blackKing, blackQueen, whiteBishop, whiteKing, whiteKnight,
  whitePawn, whiteRook, whiteQueen
} from './pieces';

const App = () => {
  const [player, setPlayer] = useState({})
  const [capturedWhites, setCapturedWhites] = useState([])
  const [capturedBlacks, setCapturedBlacks] = useState([])

  useEffect(() => {
    const newPlayer = {
      color: 'black'
    }
    setPlayer(newPlayer)
  }, [])

  const capturePiece = (block) => {
    if (block.piece.startsWith('white')) {
      setCapturedWhites(capturedWhites.concat(block.piece))
    } else {
      setCapturedBlacks(capturedBlacks.concat(block.piece))
    }
  }

  return (
    <div className="App">
      <p>Hello world!</p>
      <div className='game-area'>
        <div className={classNames('capture-area', {
          'black-player': player.color === 'black'
        })}>
          <CaptureContainer capturedPieces={capturedWhites} player={player} />
          <CaptureContainer capturedPieces={capturedBlacks} player={player} />
        </div>
        <Board player={player} capturePiece={capturePiece} />
      </div>
    </div>
  );
}

export default App;
