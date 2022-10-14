import React from "react";
import classNames from "classnames";

export const blackPawn = (grabbed, playerColor, captured) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed, 'black-player': playerColor === 'black', 'captured': captured })} key="black-pawn" id="black-pawn">♟</span>)
}

export const blackKnight = (grabbed, playerColor, captured) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed, 'black-player': playerColor === 'black', 'captured': captured })} key="black-knight" id="black-knight">♞</span>)
}

export const blackBishop = (grabbed, playerColor, captured) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed, 'black-player': playerColor === 'black', 'captured': captured })} key="black-bishop" id="black-bishop">♝</span>)
}

export const blackRook = (grabbed, playerColor, captured) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed, 'black-player': playerColor === 'black', 'captured': captured })} key="black-rook" id="black-rook">♜</span>)
}

export const blackQueen = (grabbed, playerColor, captured) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed, 'black-player': playerColor === 'black', 'captured': captured })} key="black-queen" id="black-queen">♛</span>)
}

export const blackKing = (grabbed, playerColor, captured) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed, 'black-player': playerColor === 'black', 'captured': captured })} key="black-king" id="black-king">♚</span>)
}

export const whitePawn = (grabbed, playerColor, captured) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed, 'black-player': playerColor === 'black', 'captured': captured })} key="white-pawn" id="white-pawn">♙</span>)
}

export const whiteKnight = (grabbed, playerColor, captured) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed, 'black-player': playerColor === 'black', 'captured': captured })} key="white-knight" id="white-knight">♘</span>)
}

export const whiteBishop = (grabbed, playerColor, captured) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed, 'black-player': playerColor === 'black', 'captured': captured })} key="white-bishop" id="white-bishop">♗</span>)
}

export const whiteRook = (grabbed, playerColor, captured) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed, 'black-player': playerColor === 'black', 'captured': captured })} key="white-rook" id="white-rook">♖</span>)
}

export const whiteQueen = (grabbed, playerColor, captured) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed, 'black-player': playerColor === 'black', 'captured': captured })} key="white-queen" id="white-queen">♕</span>)
}

export const whiteKing = (grabbed, playerColor, captured) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed, 'black-player': playerColor === 'black', 'captured': captured })} key="white-king" id="white-king">♔</span>)
}
