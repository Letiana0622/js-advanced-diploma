/**
 * @todo
 * @param index - индекс поля
 * @param boardSize - размер квадратного поля (в длину или ширину)
 * @returns строка - тип ячейки на поле:
 *
 * top-left+
 * top-right+
 * top
 * bottom-left+
 * bottom-right+
 * bottom
 * right
 * left
 * center+
 *
 * @example
 * ```js
 * calcTileType(0, 8); // 'top-left'
 * calcTileType(1, 8); // 'top'
 * calcTileType(63, 8); // 'bottom-right'
 * calcTileType(7, 7); // 'left'
 * ```
 * */
export function calcTileType(index, boardSize) {
  // TODO: ваш код будет тут
  let square = boardSize * boardSize;
  let topLeft = 0;
  let topRight = boardSize-1;
  let bottomLeft = square - boardSize;
  let bottomRight = square -1;

  let leftList = []
  for (let i=0; i < boardSize-2; i++) {
    leftList.push((boardSize) + (i*boardSize))
  }
  let indexIsInLeftList = leftList.includes(index);

  let rightList = []
  for (let i=0; i < boardSize-2; i++) {
    rightList.push((boardSize*2-1) + (i*boardSize))
  }
  let indexIsInRighttList = rightList.includes(index);

  
  if (index === topLeft) {return 'top-left'}
  else if (index === topRight) {return 'top-right'}
  else if (index === bottomLeft) {return 'bottom-left'}
  else if (index === bottomRight) {return 'bottom-right'}
  else if (index > topLeft && index < topRight) {return 'top'}
  else if (index > bottomLeft && index < bottomRight) {return 'bottom'}
  else if (indexIsInLeftList ) {return 'left'}
  else if (indexIsInRighttList) {return 'right'}
  else {return 'center'}


/*
  switch (index) {
    case topLeft: return 'top-left';
    break;
    case topRight: return 'top-right';
    break;
    case bottomLeft: return 'bottom-left';
    break;
    case bottomRight: return 'bottom-right';
    break;
    case index > topLeft && index < topRight: return 'top';
    break;
    case index > bottomLeft && index < bottomRight: return 'bottom';
    break;
    case indexIsInLeftList === true: return 'left';
    break;
    case indexIsInRighttList === true: return 'right';
    break;
    default: return 'center';
    break;
  }*/

}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
