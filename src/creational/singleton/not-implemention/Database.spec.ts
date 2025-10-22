import { Database } from './Database';
import { describe, expect, it } from 'vitest';

describe('Database', () => {
  it('should not be a singleton', () => {
    const database1 = new Database();
    const database2 = new Database();
    expect(database1).not.toBe(database2);
  });

  it('Should add users to the database', () => {
    const database1 = new Database();
    const database2 = new Database();

    database1.add({ id: 1, name: 'John Doe' });
    database2.add({ id: 2, name: 'Doe Jhon' });

    const lenDatabase1 = database1.getUsers().length;
    const lenDatabase2 = database2.getUsers().length;
    expect(lenDatabase1).toBe(1);
    expect(lenDatabase2).toBe(1);
  });
});
