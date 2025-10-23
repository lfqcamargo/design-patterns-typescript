import { IMealComposite } from '../interfaces/IMealComposite';

export class MealBox implements IMealComposite {
  private readonly _children: IMealComposite[] = [];

  public get price(): number {
    return this._children.reduce((sum, meal) => sum + meal.price, 0);
  }

  public get name(): string {
    return 'Box';
  }

  public add(...meal: IMealComposite[]): void {
    meal.forEach((item) => this._children.push(item));
  }
}
