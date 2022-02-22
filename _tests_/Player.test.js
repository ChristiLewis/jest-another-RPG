const Potion = require('../lib/_mocks_/Potion.js');

jest.mock('../lib/Potion.js');

const Player = require('../lib/Player');
const { expect } = require('@jest/globals');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    //CHECK FOR INVENTORY ARRAY CONTAINING AN OBJECT CREATION
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

console.log(new Potion());