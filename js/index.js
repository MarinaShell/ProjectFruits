// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления

// список фруктов в JSON формате
let fruitsJSON = `[
  {"index": "0", "kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"index": "1","kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"index": "2","kind": "Личи", "color": "розово-красный", "weight": 17},
  {"index": "3","kind": "Карамбола", "color": "желтый", "weight": 28},
  {"index": "4","kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

/*****************************************************************************/
/* преобразование JSON в объект JavaScript*/
let fruits = JSON.parse(fruitsJSON);

/*** ОТОБРАЖЕНИЕ ***/

/*****************************************************************************/
/*список классов для фруктов*/
let arrayClass = ["fruit__item fruit_violet", 
                  "fruit__item fruit_green",
                  "fruit__item fruit_carmazin",
                  "fruit__item fruit_yellow",
                  "fruit__item fruit_lightbrown"
                ]
/*****************************************************************************/
/* отрисовка карточек */
const display = () => {
   //fruitsList.removeChild(li);


   for (let i = 0; i < fruits.length; i++) {
    const {index, kind, color, weight} = fruits[i];
    let li = document.createElement('li');
    li.className = arrayClass[index];
    let div = document.createElement('div');
    div.className = "fruit__info";
    
    let div_index = document.createElement('div');
    div_index.innerHTML = "index: "+ index;
    
    let div_kind = document.createElement('div');
    div_kind.innerHTML = "kind " + kind;
    
    let div_color = document.createElement('div');
    div_color.innerHTML = "color " + color;

    let div_weight = document.createElement('div');
    div_weight.innerHTML = "weight " + weight;

    div.appendChild(div_index);
    div.appendChild(div_kind);
    div.appendChild(div_color);
    div.appendChild(div_weight);
    li.appendChild(div);
    fruitsList.appendChild(li);
   }
};

/*****************************************************************************/
/* первая отрисовка карточек */
display();

/***************************ПЕРЕМЕШИВАНИЕ*************************************/

/*****************************************************************************/
/*генерация случайного числа в заданном диапазоне*/
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/*****************************************************************************/
// перемешивание массива
shuffleFruits = () => {
  let result = [];

  let i = 0;
  while (fruits.length > 0) {
    let el = getRandomInt(0,fruits.length-1);
    console.log(el);
    result.splice(i,1,fruits[el]);
    fruits.splice(el,1);
    i++;
  }
  fruits = result;

  /*проверяем, изменился ли массив*/
  let res = 0;
  for (let i = 0; i<fruits.length;i++)
  {
    const {index, ...arr} = fruits[i];
    if (index == i)
      res++;
  }
  
  if (res==5)
    return false; 
  else
    return true;
};

/*****************************************************************************/
/*нажатие кнопки Перемешать*/
shuffleButton.addEventListener('click', () => {
  let res = shuffleFruits();
  if (res)
    display();
  else
     alert("порядок не изменился"); 
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  fruits.filter((item) => {
    // TODO: допишите функцию
  });
};

filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  display();
});
