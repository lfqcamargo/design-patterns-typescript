import { IMealBuilder } from '../interfaces/IMealBuilder';
import { MainDishBuilder } from './MainDishBuilder';

export class Director {
  constructor(private _builder: IMealBuilder = new MainDishBuilder()) {}

  public makeMeal(): IMealBuilder {
    return this._builder.reset().makeMeal().makeBeverage().makeDessert();
  }

  public makeVegetarianMeal(): IMealBuilder {
    return this._builder.reset().makeMeal('veg').makeBeverage().makeDessert();
  }
}
