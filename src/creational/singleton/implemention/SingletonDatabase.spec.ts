import { SingletonDatabase } from './SingletonDatabase';
import { describe, expect, it } from 'vitest';

describe('SingletonDatabase', () => {
  it('should be a singleton', () => {
    const database1 = SingletonDatabase.getInstance();
    const database2 = SingletonDatabase.getInstance();
    expect(database1).toBe(database2);
  });

  it('Should add users to the database', () => {
    const database1 = SingletonDatabase.getInstance();
    const database2 = SingletonDatabase.getInstance();

    database1.add({ id: 1, name: 'John Doe' });
    database2.add({ id: 2, name: 'Doe Jhon' });

    const lenDatabase1 = database1.getUsers().length;
    const lenDatabase2 = database2.getUsers().length;
    expect(lenDatabase1).toBe(2);
    expect(lenDatabase2).toBe(2);
  });
});
