// Сеть фастфудов предлагает несколько видов гамбургеров:
// * маленький (50 тугриков, 20 калорий)
// * средний (75 тугриковб 30 каллорий)
// * большой (100 тугриков, 40 калорий)

// Гамбургер может быть с одним из нескольких видов начинок:
// * сыром (+ 10 тугриков, + 20 калорий)
// * салатом (+ 20 тугриков, + 5 калорий)
// * картофелем (+ 15 тугриков, + 10 калорий)
// * посыпать приправой (+ 15 тугриков, 0 калорий)
// * полить майонезом (+ 20 тугриков, + 5 калорий).

// При этом начинок можно добавить несколько или не быть совсем

// Напишите программу, расчитывающую стоимость и калорийность гамбургера. 
// Используй ООП подход (подсказка: нужен класс Гамбургер, статические константы, 
// методы для выбора опций и рассчета нужных величин).


const SIZES = {
    SMALL: {
        price: 50,
        calories: 20,
    },
    MEDIUM: {
        price: 75,
        calories: 30,
    },
    BIG: {
        price: 100,
        calories: 40,
    }
}

const STUFFINGS = {
    CHEESE: {
        price: 10,
        calories: 20,
    },
    SALAD: {
        price: 20,
        calories: 5,
    },
    POTATO: {
        price: 15,
        calories: 10,
    },
    FLAVORING: {
        price: 15,
        calories: 0,
    },
    MAYONNAISE: {
        price: 20,
        calories: 5,
    }
}

function CreateHamburger(size, name) {
    this.name = name;
    this.size = size;
    this.stuffings = [];
    this._DATA_NAMES = {
        PRICE: 'price',
        CALORIES: 'calories',
    }
};

CreateHamburger.prototype.addStuffings = function(stuffing) {
    this.stuffings.push(stuffing);
}

CreateHamburger.prototype.calculateData = function (dataName) {
    return this.stuffings.reduce((a,e) => (a += e[dataName]), this.size[dataName]);
}

CreateHamburger.prototype.getPrice = function () {
    return this.calculateData(this._DATA_NAMES.PRICE)
}
CreateHamburger.prototype.getCalories = function () {
    return this.calculateData(this._DATA_NAMES.CALORIES)
}

const smallHamburger = new CreateHamburger(SIZES.SMALL, 'SMALL with double salad');

smallHamburger.addStuffings(STUFFINGS.MAYONNAISE);
smallHamburger.addStuffings(STUFFINGS.POTATO);
smallHamburger.addStuffings(STUFFINGS.SALAD);
smallHamburger.addStuffings(STUFFINGS.SALAD);
smallHamburger.addStuffings(STUFFINGS.CHEESE);
smallHamburger.addStuffings(STUFFINGS.FLAVORING);


const mediumHamburger = new CreateHamburger(SIZES.MEDIUM, 'MEDIUM without mayonnaise');

mediumHamburger.addStuffings(STUFFINGS.POTATO);
mediumHamburger.addStuffings(STUFFINGS.SALAD);
mediumHamburger.addStuffings(STUFFINGS.CHEESE);
mediumHamburger.addStuffings(STUFFINGS.FLAVORING);


const bigHamburger = new CreateHamburger(SIZES.BIG, 'BIG with double potato');

bigHamburger.addStuffings(STUFFINGS.MAYONNAISE);
bigHamburger.addStuffings(STUFFINGS.POTATO);
bigHamburger.addStuffings(STUFFINGS.POTATO);
bigHamburger.addStuffings(STUFFINGS.SALAD);
bigHamburger.addStuffings(STUFFINGS.CHEESE);
bigHamburger.addStuffings(STUFFINGS.FLAVORING);


function showFinalInfo (hamburger) {
    const totalCalories = hamburger.getCalories();
    const totalPrice = hamburger.getPrice();
    console.log(`Hamburger name:`, hamburger.name,`\nPrice: ${totalPrice}\nCalories: ${totalCalories}`);
}

showFinalInfo(smallHamburger);
showFinalInfo(mediumHamburger);
showFinalInfo(bigHamburger);