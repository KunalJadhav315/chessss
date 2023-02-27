// Create a chess board
const board = document.getElementById("board");
for (let i = 0; i < 8; i++) {
	for (let j = 0; j < 8; j++) {
		const square = document.createElement("div");
		square.classList.add((i + j) % 2 === 0 ? "white" : "black");
		board.appendChild(square);
	}
}

// Define chess pieces
const pieces = {
	"white-king": "♔",
	"white-queen": "♕",
	"white-rook": "♖",
	"white-bishop": "♗",
	"white-knight": "♘",
	"white-pawn": "♙",
	"black-king": "♚",
	"black-queen": "♛",
	"black-rook": "♜",
	"black-bishop": "♝",
	"black-knight": "♞",
	"black-pawn": "♟",
};

// Set up the initial chess board
const startingPositions = [
	["white-rook", "white-knight", "white-bishop", "white-queen", "white-king", "white-bishop", "white-knight", "white-rook"],
	["white-pawn", "white-pawn", "white-pawn", "white-pawn", "white-pawn", "white-pawn", "white-pawn", "white-pawn"],
	["", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", ""],
	["black-pawn", "black-pawn", "black-pawn", "black-pawn", "black-pawn", "black-pawn", "black-pawn", "black-pawn"],
	["black-rook", "black-knight", "black-bishop", "black-queen", "black-king", "black-bishop", "black-knight", "black-rook"],
];
for (let i = 0; i < 8; i++) {
	for (let j = 0; j < 8; j++) {
		const square = board.children[i * 8 + j];
		const piece = startingPositions[i][j];
		if (piece !== "") {
			square.innerText = pieces[piece];
		}
	}
}
