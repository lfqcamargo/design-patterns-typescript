import { describe, expect, it } from 'vitest';

import { Director } from './entities/Director';

describe('Builder Pattern', () => {
  it('should be able to build a meat meal', () => {
    const director = new Director();
    const builder = director.makeMeal();
    const mealBox = builder.getMeal();

    expect(mealBox).toBeDefined();
    expect(mealBox.price).toBeGreaterThan(0);
    expect(builder.getPrice()).toBe(52); // 5 + 10 + 20 + 7 + 10
  });

  it('should be able to build a vegetarian meal', () => {
    const director = new Director();
    const builder = director.makeVegetarianMeal();
    const mealBox = builder.getMeal();

    expect(mealBox).toBeDefined();
    expect(mealBox.price).toBeGreaterThan(0);
    expect(builder.getPrice()).toBe(37); // 5 + 10 + 5 + 7 + 10
  });
});
