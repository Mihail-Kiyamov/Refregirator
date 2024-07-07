export default function DistributionFood(list) {
  const door = { list: [] };
  const firstShelf = { list: [] };
  const secondShelf = { list: [] };
  const thirdShelf = { list: [] };
  const fruitsBox = { list: [] };
  const vegteablesBox = { list: [] };
  const outside = { list: [] };

  function solveConflicts(arr, firstTag, secondTag) {
    const firstCategory = [];
    const secondCategory = [];
    const remains = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][firstTag]) {
        firstCategory.push(structuredClone(arr[i]));
        continue;
      }
      if (arr[i][secondTag]) {
        secondCategory.push(structuredClone(arr[i]));
        continue;
      }
      remains.push(structuredClone(arr[i]));
    }
    return firstCategory.concat(remains, secondCategory);
  }
  function countRowsColumns(amount) {
    let rows = 1;
    let columns = 1;
    switch (amount) {
      case 2:
        columns = 2;
        break;
      case 3:
        columns = 3;
        break;
      case 4:
      case 5:
      case 6:
        columns = 3;
        rows = 2;
        break;
      case 7:
      case 8:
        columns = 4;
        rows = 2;
        break;
      case 9:
      case 10:
      case 11:
      case 12:
        columns = 4;
        rows = 3;
        break;
      case 13:
      case 14:
      case 15:
        columns = 5;
        rows = 3;
        break;
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
        columns = 5;
        rows = 4;
        break;
      default:
    }
    return [rows, columns];
  }

  //распределяем продукты по местам
  list.forEach((element) => {
    switch (element.place) {
      case 0:
        door.list.push(element);
        break;
      case 1:
        firstShelf.list.push(element);
        break;
      case 2:
        secondShelf.list.push(element);
        break;
      case 3:
        thirdShelf.list.push(element);
        break;
      case 4:
        fruitsBox.list.push(element);
        break;
      case 5:
        vegteablesBox.list.push(element);
        break;
      case 6:
        outside.list.push(element);
        break;
      default:
    }
  });

  solveConflicts(firstShelf.list, "sorbent", "sorbat");
  solveConflicts(secondShelf.list, "sorbent", "sorbat");
  solveConflicts(thirdShelf.list, "sorbent", "sorbat");

  [
    door,
    firstShelf,
    secondShelf,
    thirdShelf,
    fruitsBox,
    vegteablesBox,
    outside,
  ].forEach((item) => {
    let [rows, columns] = countRowsColumns(item.list.length);
    item.rows = rows;
    item.columns = columns;
  });

  return [
    door,
    firstShelf,
    secondShelf,
    thirdShelf,
    fruitsBox,
    vegteablesBox,
    outside,
  ];
}
