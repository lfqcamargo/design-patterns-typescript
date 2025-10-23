import { IMealBuilder } from '../interfaces/IMealBuilder';
import { MealBox } from './MealBox';
import { Rice } from './Rice';
import { Beans } from './Beans';
import { Meat } from './Meat';
import { Beverage } from './Beverage';
import { Dessert } from './Dessert';

export class MainDishBuilder implements IMealBuilder {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(option?: 'veg'): this {
    let rice: Rice;
    let beans: Beans;
    let meat: Meat;

    if (option === 'veg') {
      rice = new Rice('Arroz', 5);
      beans = new Beans('Feijão', 10);
      meat = new Meat('Ovo', 5);
    } else {
      rice = new Rice('Arroz', 5);
      beans = new Beans('Feijão', 10);
      meat = new Meat('Carne', 20);
    }
    this._meal.add(rice, beans, meat);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Cola', 7);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Pudim', 10);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.price;
  }
}
