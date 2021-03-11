const expect = require('chai').expect;
const Game = require('../app/Game');

let game; 

describe('Game', () => {
    let rolls;
    let nbOfRolls;

    beforeEach(() => {    
        nbOfRolls = 0;

        const rollProviderStub = {
            getRoll : () => {
                const roll = rolls[nbOfRolls];
                nbOfRolls++;
                return roll;
            }
        }

        game = new Game(rollProviderStub);
    });

    context('Expect', () => {
        it('doit ajouter le nombre de quilles tombées 4 à la première lancée quand un joueur joue pour la première fois', () => {
            rolls = [4];
            
            game.play()
            expect(game.getScore()).to.equal(4)
        });
        it('doit ajouter le nombre de quilles tombées 5 à la première lancée et 1 à la deuxième lancée quand un joueur joue pour la première fois', () => {
            rolls = [5, 1];
            
            game.play()
            expect(game.getScore()).to.equal(5)

            game.play()
            expect(game.getScore()).to.equal(6)
        });
        
    })
})
