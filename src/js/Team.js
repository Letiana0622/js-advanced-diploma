/**
 * Класс, представляющий персонажей команды
 *
 * @todo Самостоятельно продумайте хранение персонажей в классе
 * Например
 * @example
 * ```js
 * const characters = [new Swordsman(2), new Bowman(1)]
 * const team = new Team(characters);
 *
 * team.characters // [swordsman, bowman]
 * ```
 * */

/*
export default class Team {
  constructor() {
      this.characters = [];
  }
  
  add(...persons) {
   for (const person of persons) {
    this.characters.push(person);
   }
  }
}
*/

class Team {
  constructor() {
      this.characters = [];
  }
  
    [Symbol.iterator] = function () {
      const properties = Object.keys(this)
      let count = 0
  
      return {
        next() {
          if (count < properties.length) {
            const key = properties[count]
            let result = { done: false, value: this[key] }
            count++
            return result
          } else {
            return { done: true }
          }
        },
      }
    }
  
  add(...persons) {
   for (const person of persons) {
    this.characters.push(person);
   }
  }
  }

/*
class Team {
  // TODO: write your logic here
  constructor() {
    this.characters = new Set();
  }

  add(person) {
      this.characters.add(person);
     }
}

*/

/*

Класс Team хранит команду игрока или соперника. Реализуйте хранение персонажей по вашему усмотрению.

Например:

const characters = [new Swordsman(2), new Bowman(3)]; // Обратите внимание на new в отличие от playerTypes в прошлом примере
const team = new Team(characters);

team.characters // [swordsman, bowman]
*/

