import classNames from "classnames";
import React from "react";
import {
  blackBishop, blackPawn, blackRook, blackKnight,
  blackKing, blackQueen, whiteBishop, whiteKing, whiteKnight,
  whitePawn, whiteRook, whiteQueen
} from './pieces';

const CaptureContainer = ({ capturedPieces, player }) => {

  const renderPiece = (piece, grabbed = false, playerColor = 'white', captured = true) => {
    switch (piece) {
      case 'black-pawn':
        return blackPawn(grabbed, playerColor, captured)
      case 'black-rook':
        return blackRook(grabbed, playerColor, captured)
      case 'black-knight':
        return blackKnight(grabbed, playerColor, captured)
      case 'black-bishop':
        return blackBishop(grabbed, playerColor, captured)
      case 'black-queen':
        return blackQueen(grabbed, playerColor, captured)
      case 'black-king':
        return blackKing(grabbed, playerColor, captured)
      case 'white-pawn':
        return whitePawn(grabbed, playerColor, captured)
      case 'white-rook':
        return whiteRook(grabbed, playerColor, captured)
      case 'white-knight':
        return whiteKnight(grabbed, playerColor, captured)
      case 'white-bishop':
        return whiteBishop(grabbed, playerColor, captured)
      case 'white-queen':
        return whiteQueen(grabbed, playerColor, captured)
      case 'white-king':
        return whiteKing(grabbed, playerColor, captured)
      default:
        return ''
    }
  }

  return (
    <div className={classNames("capture-container", {
      'black-player': player.color === 'black'
    })}>
      {capturedPieces.map((piece) => {
        return renderPiece(piece)
      })}
    </div>
  )
}

export default CaptureContainer