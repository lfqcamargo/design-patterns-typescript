import { IMealComposite } from '../interfaces/IMealComposite';

export abstract class Meal implements IMealComposite {
  constructor(
    private _name: string,
    private _price: number,
  ) {}

  public get price(): number {
    return this._price;
  }

  public get name(): string {
    return this._name;
  }
}
