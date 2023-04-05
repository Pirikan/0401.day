const Tetris = window.ReactTetris.default;
ReactDOM.render(React.createElement(Tetris), document.getElementById('tetris'));

// ページが読み込まれたときにテトリスを開始する
document.addEventListener('DOMContentLoaded', () => {
  const tetris = new Tetris();
  tetris.start();
});