import images from "../../images/foodIcons/foodIcons";

const allFoodList = [
  {
    categoryName: "Fruits and berries",
    categoryNameRU: "Фрукты и ягоды",
    list: [
      {
        name: "peaches and apricots",
        nameRU: "Персики и абрикосы",
        category: "fruits",
        place: 4,
        src: images.peach,
      },
      {
        name: "plums",
        nameRU: "Сливы",
        category: "fruits",
        place: 4,
        src: images.plum,
      },
      {
        name: "bananas",
        nameRU: "Бананы",
        category: "fruits",
        place: 4,
        src: images.banana,
      },
      {
        name: "grape",
        nameRU: "Виноград",
        category: "fruits",
        place: 4,
        src: images.grapes,
      },
      {
        name: "avocado",
        nameRU: "Авокадо",
        category: "fruits",
        place: 4,
        src: images.avocado,
      },
      {
        name: "citrus",
        nameRU: "Цитрусовые",
        category: "fruits",
        place: 4,
        src: images.orange,
      },
      {
        name: "kiwi",
        nameRU: "Киви",
        category: "fruits",
        place: 4,
        src: images.kiwi,
      },
      {
        name: "exotic",
        nameRU: "Экзотика",
        category: "fruits",
        place: 4,
        src: images.dragonFruit,
      },
      {
        name: "apples and pears",
        nameRU: "Яблоки и груши",
        category: "fruits",
        place: 4,
        src: images.apple,
      },
    ],
  },
  {
    categoryName: "vegteables",
    categoryNameRU: "Овощи",
    list: [
      {
        name: "Tomatoes",
        nameRU: "Помидоры",
        category: "vegteables",
        place: 5,
        src: images.tomatoes,
      },
      {
        name: "Cucumbers",
        nameRU: "Огурцы",
        category: "vegteables",
        place: 5,
        src: images.cucumber,
      },
      {
        name: "Mushrooms",
        nameRU: "Грибы",
        category: "vegteables",
        place: 5,
        src: images.mushroom,
        sorbent: true,
      },
      {
        name: "Potato",
        nameRU: "Картошка",
        category: "vegteables",
        place: 5,
        src: images.potato,
      },
      {
        name: "Cabbage",
        nameRU: "Капуста",
        category: "vegteables",
        place: 5,
        src: images.cabbage,
      },
      {
        name: "Salad and greens",
        nameRU: "Зелень",
        category: "vegteables",
        place: 5,
        src: images.spinach,
      },
      {
        name: "Zucchini and eggplant",
        nameRU: "Кабачки и баклажаны",
        category: "vegteables",
        place: 5,
        src: images.zucchini,
      },
      {
        name: "Beets and carrots",
        nameRU: "Морковь и редиска",
        category: "vegteables",
        place: 5,
        src: images.carrot,
      },
      {
        name: "Onion and garlic",
        nameRU: "Лук и чеснок",
        category: "vegteables",
        place: 5,
        src: images.onion,
        sorbat: true,
      },
    ],
  },
  {
    categoryName: "dairy",
    categoryNameRU: "Молочка",
    list: [
      {
        name: "Milk",
        nameRU: "Молоко",
        category: "dairy",
        place: 1,
        src: images.milk,
      },
      {
        name: "Eggs",
        nameRU: "Яйца",
        category: "dairy",
        place: 1,
        src: images.eggCarton,
        sorbent: true,
      },
      {
        name: "Sour cream",
        nameRU: "Сметана",
        category: "dairy",
        place: 1,
        src: images.smetana,
      },
      {
        name: "Butter",
        nameRU: "Масло",
        category: "dairy",
        place: 1,
        src: images.butter,
        sorbent: true,
      },
      {
        name: "Kefir and ryazhenka",
        nameRU: "Кефир и ряженка",
        category: "dairy",
        place: 1,
        src: images.kefir,
      },
      {
        name: "Cottage cheese",
        nameRU: "Творог",
        category: "dairy",
        place: 1,
        src: images.cottageCheese,
        sorbent: true,
      },
      {
        name: "Cream",
        nameRU: "Сливки",
        category: "dairy",
        place: 1,
        src: images.smetana,
      },
      {
        name: "yogurt",
        nameRU: "Йогурт",
        category: "dairy",
        place: 1,
        src: images.yogurt,
      },
      {
        name: "desserts and cheeses",
        nameRU: "Десерты и сырки",
        category: "dairy",
        place: 1,
        src: images.cheesecake,
      },
      {
        name: "Condensed milk",
        nameRU: "Сгущенка",
        category: "dairy",
        place: 1,
        src: images.sgushchenka,
      },
      {
        name: "cheese",
        nameRU: "Сыр",
        category: "dairy",
        place: 1,
        src: images.cheese,
        sorbent: true,
      },
    ],
  },
  {
    categoryName: "meat and fish",
    categoryNameRU: "Мясо и рыба",
    list: [
      {
        name: "meat",
        nameRU: "Мясо",
        category: "meat",
        place: 2,
        src: images.meat,
        sorbent: true,
      },
      {
        name: "smoked meat",
        nameRU: "Копченное мясо",
        category: "meat",
        place: 2,
        src: images.smokedMeat,
        sorbat: true,
      },
      {
        name: "Chicken",
        nameRU: "Курица",
        category: "meat",
        place: 2,
        src: images.chicken,
      },
      {
        name: "Sausage",
        nameRU: "Сосиски",
        category: "meat",
        place: 2,
        src: images.sausages,
      },
      {
        name: "raw fish",
        nameRU: "Рыба",
        category: "fish",
        place: 3,
        src: images.fish,
      },
      {
        name: "Salted and smoked fish",
        nameRU: "Копченная и соленная рыба",
        category: "fish",
        place: 3,
        src: images.smokedFish,
        sorbat: true,
      },
    ],
  },
  {
    categoryName: "water and drinks",
    categoryNameRU: "Вода и напитки",
    list: [
      {
        name: "water",
        nameRU: "Вода",
        category: "drinks",
        place: 0,
        src: images.water,
      },
      {
        name: "Juices and fruit drinks",
        nameRU: "Соки и морсы",
        category: "drinks",
        place: 0,
        src: images.orangeJuice,
      },
      {
        name: "soda",
        nameRU: "Газировка",
        category: "drinks",
        place: 0,
        src: images.cola,
      },
      {
        name: "Iced tea and kvass",
        nameRU: "Холодный чай и квас",
        category: "drinks",
        place: 0,
        src: images.iceTea,
      },
      {
        name: "Energy, beer and wine",
        nameRU: "Энергетики и пиво",
        category: "drinks",
        place: 0,
        src: images.energyDrink,
      },
    ],
  },
  {
    categoryName: "Other",
    categoryNameRU: "Другое",
    list: [
      {
        name: "bread",
        nameRU: "Хлеб",
        place: 6,
        src: images.bread,
      },
      {
        name: "honey",
        nameRU: "Мёд",
        place: 6,
        src: images.honey,
      },
      {
        name: "medicines",
        nameRU: "Медицина",
        place: 6,
        src: images.medicines,
      },
    ],
  },
];
export default allFoodList;
