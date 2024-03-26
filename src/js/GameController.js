import { generateTeam } from "./generators";
import Position from "./PositionedCharacter";
/*import GamePlay from './src/js/GamePlay'*/

function positionedTeam() {
  const playerTypes = ["Bowman", "Swordsman", "Magician"];
  const computerTypes = ["Vampire", "Undead", "Daemon"];
  const playerCells = [
    0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57,
  ];
  const computerCells = [
    6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63,
  ];
  let teamPlayer = generateTeam(playerTypes, 3, 4);
  /*console.log(teamPlayer.characters)*/
  /*console.log(typeof(teamPlayer))*/

  let teamComputer = generateTeam(computerTypes, 3, 4);
  /*console.log(teamComputer)*/

  let positions = [];

  for (let player of teamPlayer.characters) {
    let randomPlayerPosition =
      playerCells[Math.floor(Math.random() * playerCells.length)];
    let position = new Position(player, randomPlayerPosition);
    positions.push(position);
    /*console.log(positions)*/
  }

  for (let player_ of teamComputer.characters) {
    let randomComputerPosition =
      computerCells[Math.floor(Math.random() * computerCells.length)];
    let position_ = new Position(player_, randomComputerPosition);
    positions.push(position_);
  }
  return positions;
}

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.positions = positionedTeam();
  }

  init() {
    /* window.addEventListener("load", () => {
      this.gamePlay.drawUi("prairie");
      let positions = positionedTeam();
      this.gamePlay.redrawPositions(positions);
    });*/
    this.gamePlay.drawUi("prairie");
    /*let positions = positionedTeam();*/
    /*this.gamePlay.redrawPositions(positions);*/
    this.gamePlay.redrawPositions(this.positions);
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));

    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    const activChar = this.positions.find(
      (element) => element.position === index,
    );
    if (activChar) {
      const message = `🎖${activChar.character.level} ⚔${activChar.character.attack} 🛡${activChar.character.defence} ❤${activChar.character.health}`;
      this.gamePlay.showCellTooltip(message, index);
    }

    /*const cell = this.cells[index];
    if (cell.firstElementChild) {
      this.gamePlay.showCellTooltip('toolTip',index)
    }*/

    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    this.gamePlay.hideCellTooltip(index);
    // TODO: react to mouse leave
  }
}

/*
generateTeam - формирует команду на основе characterGenerator. Для формирования всех персонажей на поле потребуется вызвать generateTeam дважды

Персонажи генерируются случайным образом в столбцах 1 и 2 для игрока и в столбцах 7 и 8 для соперника:
Чтобы привязать персонаж к ячейке, воспользуйтесь классом PositionedCharacter в src/js/PositionedCharacter.js

const character = new Bowman(2);
const position = 8; // для поля 8x8 лучник будет находиться слева на второй строке
const positionedCharacter = new PositionedCharacter(character, position); 


Для отрисовки воспользуйтесь методом redrawPositions класса src/js/GamePlay.js, 

/**
   * Draws positions (with chars) on boardEl
   *
   * @param positions array of PositionedCharacter objects
   */

/*
redrawPositions(positions) {
  for (const cell of this.cells) {
    cell.innerHTML = '';
  }

  for (const position of positions) {
    const cellEl = this.boardEl.children[position.position];
    const charEl = document.createElement('div');
    charEl.classList.add('character', position.character.type);

    const healthEl = document.createElement('div');
    healthEl.classList.add('health-level');

    const healthIndicatorEl = document.createElement('div');
    healthIndicatorEl.classList.add('health-level-indicator', `health-level-indicator-${calcHealthLevel(position.character.health)}`);
    healthIndicatorEl.style.width = `${position.character.health}%`;
    healthEl.appendChild(healthIndicatorEl);

    charEl.appendChild(healthEl);
    cellEl.appendChild(charEl);
  }
}
*/

/*
Метод принимает на вход массив объектов PositionedCharacter. 
Для упрощения при любом дальнейшем изменении игрового поля (перемещение персонажа или его смерть) 
мы предлагаем вам целиком перерисовать игровое поле с помощью данного метода.

Логику формирования и отрисовки команд игрока и соперника, как и логику всей игры рекомендуется выполнять в классе src/js/GameController.js

*/
