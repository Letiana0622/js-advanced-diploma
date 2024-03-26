/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */
/*import Character from './Character'*/
import Bowman from "./characters/Bowman";
import Daemon from "./characters/Daemon";
import Magician from "./characters/Magician";
import Swordsman from "./characters/Swordsman";
import Undead from "./characters/Undead";
import Vampire from "./characters/Vampire";
import Team from "./Team.js";

export function* characterGenerator(allowedTypes, maxLevel) {
  let i = 0;
  while (i < 5) {
    let randomIndex = Math.floor(Math.random() * allowedTypes.length);
    let randomType = allowedTypes[randomIndex];
    let randomLevel = Math.floor(Math.random() * maxLevel) + 1;
    let newCharacter;
    if (randomType === "Vampire") {
      newCharacter = new Vampire(randomLevel, randomType);
    } else if (randomType === "Undead") {
      newCharacter = new Undead(randomLevel, randomType);
    } else if (randomType === "Daemon") {
      newCharacter = new Daemon(randomLevel, randomType);
    } else if (randomType === "Bowman") {
      newCharacter = new Bowman(randomLevel, randomType);
    } else if (randomType === "Magician") {
      newCharacter = new Magician(randomLevel, randomType);
    } else if (randomType === "Swordsman") {
      newCharacter = new Swordsman(randomLevel, randomType);
    }

    yield newCharacter;
    i += 1;
  }
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const newTeam = new Team();
  for (let i = 0; i < characterCount; i++) {
    let playerGenerator = characterGenerator(allowedTypes, maxLevel);
    let newCharacter = playerGenerator.next().value;
    newTeam.add(newCharacter);
  }
  return newTeam;
}

/*
generateTeam - формирует команду на основе characterGenerator. Для формирования всех персонажей на поле потребуется вызвать generateTeam дважды:
 для команд игрока и соперника.

Функция возвращает экземпляр класса Team

const playerTypes = [Bowman, Swordsman, Magician]; // доступные классы игрока
const team = generateTeam(playerTypes, 3, 4); // массив из 4 случайных персонажей playerTypes с уровнем 1, 2 или 3

team.characters[0].level // 3
team.characters[1].level // 3
team.characters[2].level // 1
*/

/*
characterGenerator - characterGenerator - функция генератор, которая формирует случайного персонажа из списка переданных классов.

Пример работы:

const playerTypes = [Bowman, Swordsman, Magician]; // доступные классы игрока
const playerGenerator = characterGenerator(playerTypes, 2); // в данном примере персонажи игрока могут быть 1 или 2-ого уровней

const character1 = playerGenerator.next().value; // случайный персонаж из списка playerTypes с уровнем 1 или 2
character1.type; // magician
character1.attack; // 10
character1.level; // 2

const character2 = playerGenerator.next().value; // ещё один случайный персонаж
character2.level; // 1
character2.type; // swordsman

playerGenerator.next().value; // можно вызывать бесконечно
playerGenerator.next().value;
playerGenerator.next().value;
playerGenerator.next().value;
playerGenerator.next().value; // всегда получим нового случайного персонажа со случайным ур
*/
