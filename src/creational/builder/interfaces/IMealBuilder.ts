import { IMealComposite } from './IMealComposite';

export interface IMealBuilder {
  reset(): this;
  makeMeal(option?: string): this;
  makeBeverage(): this;
  makeDessert(): this;
  getMeal(): IMealComposite;
  getPrice(): number;
}
