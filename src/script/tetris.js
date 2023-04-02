// テトリスの実装
const canvas = document.createElement('canvas');
canvas.width = 300;
canvas.height = 600;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
const blockSize = 30;
const cols = canvas.width / blockSize;
const rows = canvas.height / blockSize;

let board = new Array(rows).fill(null).map(() => new Array(cols).fill(0));
let currentPiece = null;
let currentPieceX = 0;
let currentPieceY = 0;

function getRandomPiece() {
    // テトリスのブロックの種類
    const pieces = [
        [[1, 1, 1, 1]], // I
        [[1, 1, 1], [0, 1, 0]], // T
        [[1, 1, 1], [1, 0, 0]], // L
        [[1, 1, 1], [0, 0, 1]], // J
        [[0, 1, 1], [1, 1, 0]], // Z
        [[1, 1, 0], [0, 1, 1]], // S
        [[1, 1], [1, 1]] // O
    ];
    const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
    return randomPiece;
}

function rotatePiece(piece) {
    const newPiece = [];
    for (let i = 0; i < piece.length; i++) {
      newPiece.push([]);
    }
    for (let i = 0; i < piece.length; i++) {
      for (let j = 0; j < piece.length; j++) {
        newPiece[j][piece.length - 1 - i] = piece[i][j];
      }
    }
    return newPiece;
}