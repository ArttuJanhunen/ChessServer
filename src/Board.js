import React, { useEffect, useState } from "react";
import classNames from "classnames";
import {
  blackBishop, blackPawn, blackRook, blackKnight,
  blackKing, blackQueen, whiteBishop, whiteKing, whiteKnight,
  whitePawn, whiteRook, whiteQueen
} from './pieces';

const Board = () => {
  const [board, setBoard] = useState([])
  const [pieceToMove, setPieceToMove] = useState('')
  const [previousX, setPreviousX] = useState(0)
  const [previousY, setPreviousY] = useState(0)
  const [tableReady, setTableReady] = useState(false)

  useEffect(() => {
    updateBoard()
  }, [])

  useEffect(() => {
    if (tableReady) initPieces()
  }, [tableReady])

  useEffect(() => {
    renderBoard()
  }, [board])

  const createRow = () => {
    let row = []
    for (let i = 0; i < 8; i++) {
      row[i] = { color: 'color', x: 0, y: 0, piece: '', grabbed: false }
    }
    return row;
  }

  const updateBoard = () => {
    let newBoard = []
    for (let i = 0; i < 8; i++) {
      newBoard.push(createRow())
    }

    for (let x = 0; x < 8; x++) {
      let color = 'black'
      if (x % 2 === 0) {
        color = 'white'
      }
      for (let y = 0; y < 8; y++) {
        newBoard[x][y].color = color
        newBoard[x][y].x = x
        newBoard[x][y].y = y
        color = color === 'white' ? 'black' : 'white'
      }
    }
    setBoard(newBoard)
    setTableReady(true)
  }

  const initPieces = () => {
    let newBoard = [...board]
    console.log(board)

    newBoard[1].forEach(block => {
      block.piece = 'black-pawn'
    });
    newBoard[6].forEach(block => {
      block.piece = 'white-pawn'
    });

    setBoard(newBoard)

    movePiece('black-rook', 0, 0)
    movePiece('black-knight', 0, 1)
    movePiece('black-bishop', 0, 2)
    movePiece('black-queen', 0, 3)
    movePiece('black-king', 0, 4)
    movePiece('black-bishop', 0, 5)
    movePiece('black-knight', 0, 6)
    movePiece('black-rook', 0, 7)

    movePiece('white-rook', 7, 0)
    movePiece('white-knight', 7, 1)
    movePiece('white-bishop', 7, 2)
    movePiece('white-queen', 7, 3)
    movePiece('white-king', 7, 4)
    movePiece('white-bishop', 7, 5)
    movePiece('white-knight', 7, 6)
    movePiece('white-rook', 7, 7)
  }

  const movePiece = (piece, x, y) => {
    let newBoard = [...board]
    newBoard[x][y].piece = piece
    setBoard(newBoard)
  }

  const handleClick = (block) => {
    if (pieceToMove && !block.piece) {
      movePiece(pieceToMove, block.x, block.y)
      setPieceToMove('')
      movePiece('', previousX, previousY)
      let newBoard = board
      newBoard[previousX][previousY].grabbed = false
      setBoard(newBoard)
      setPreviousX(0)
      setPreviousY(0)
    } else if (block.piece && !pieceToMove) {
      setPieceToMove(block.piece)
      setPreviousX(block.x)
      setPreviousY(block.y)
      const dimPiece = block.grabbed &&
        previousX === block.x &&
        previousY === block.y
      if (dimPiece) {
        let newBoard = board
        newBoard[previousX][previousY].grabbed = false
        setBoard(newBoard)
        setPieceToMove('')
        setPreviousX(0)
        setPreviousY(0)
      } else {
        block.grabbed = true
      }
    } else if (block.x === previousX && block.y === previousY && pieceToMove) {
      block.grabbed = false
      setPieceToMove('')
      setPreviousX(0)
      setPreviousY(0)
    }
  }

  const renderBoard = () => {
    return (
      <div className={classNames('grid-container', {
        'grabbing': pieceToMove
      })}>
        {board.map(row => row.map(block => {
          return (
            <div className={`grid-item ${block.color}`}
              id={`${block.x},${block.y}`}
              key={`${block.x},${block.y}`}
              onClick={() => {
                handleClick(block)
              }}>{block.piece && renderPiece(block.piece, block.grabbed)}</div>
          )
        }))}
      </div>
    )
  }

  const renderPiece = (piece, grabbed) => {
    switch (piece) {
      case 'black-pawn':
        return blackPawn(grabbed)
      case 'black-rook':
        return blackRook(grabbed)
      case 'black-knight':
        return blackKnight(grabbed)
      case 'black-bishop':
        return blackBishop(grabbed)
      case 'black-queen':
        return blackQueen(grabbed)
      case 'black-king':
        return blackKing(grabbed)
      case 'white-pawn':
        return whitePawn(grabbed)
      case 'white-rook':
        return whiteRook(grabbed)
      case 'white-knight':
        return whiteKnight(grabbed)
      case 'white-bishop':
        return whiteBishop(grabbed)
      case 'white-queen':
        return whiteQueen(grabbed)
      case 'white-king':
        return whiteKing(grabbed)
      default:
        return ''
    }
  }

  return (
    <div className="board-container">Board
      {renderBoard()}
    </div>
  )
}

export default Board