// Code your JavaScript / jQuery solution here
var turn = 0
var currentGame = 0
var winners = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,4,8],[2,4,6],
  [0,3,6],[1,4,7],[2,5,8]
];

$(attachListeners);

function setMessage(text) {
  $('#message').append(text);
}

function doTurn(td){
  updateState(td)
  turn++
  if(checkWinner()){
    saveGame();
    clearGame();
  } else if (turn === 9) {
    setMessage("Tie game.")
    saveGame();
    clearGame();
  }
}

var player = () => turn % 2 ? "O": "X";

function updateState(td){
  td.innerHTML = player();
}

function checkWinner() {
  var board = {};
  var winner = false;

  $('td').text((index, square) => board[index] = square);
}

function saveGame(){
  
}

function previousGames() {
  
}

function clearGame() {
  turn = 0
}

function attachListeners() {
  $('#save').on('click', () => saveGame());
  $('#previous').on('click', () => previousGames());
  $('#clear').on('click', () => clearGame());

  $('td').on('click', function(){
    if($(this).text() == "" && !checkWinner()){
      doTurn(this);
    }
  });
}