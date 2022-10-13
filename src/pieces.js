import React from "react";
import classNames from "classnames";

export const blackPawn = (grabbed) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed })} key="black-pawn" id="black-pawn">♟</span>)
}

export const blackKnight = (grabbed) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed })} key="black-knight" id="black-knight">♞</span>)
}

export const blackBishop = (grabbed) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed })} key="black-bishop" id="black-bishop">♝</span>)
}

export const blackRook = (grabbed) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed })} key="black-rook" id="black-rook">♜</span>)
}

export const blackQueen = (grabbed) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed })} key="black-queen" id="black-queen">♛</span>)
}

export const blackKing = (grabbed) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed })} key="black-king" id="black-king">♚</span>)
}

export const whitePawn = (grabbed) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed })} key="white-pawn" id="white-pawn">♙</span>)
}

export const whiteKnight = (grabbed) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed })} key="white-knight" id="white-knight">♘</span>)
}

export const whiteBishop = (grabbed) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed })} key="white-bishop" id="white-bishop">♗</span>)
}

export const whiteRook = (grabbed) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed })} key="white-rook" id="white-rook">♖</span>)
}

export const whiteQueen = (grabbed) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed })} key="white-queen" id="white-queen">♕</span>)
}

export const whiteKing = (grabbed) => {
  return (<span className={classNames('pieces', { 'grabbed': grabbed })} key="white-king" id="white-king">♔</span>)
}
