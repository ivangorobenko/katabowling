const expect = require('chai').expect;
const sinon = require('sinon');
const Game = require('../app/Game');

let game;

describe('Game', () => {
    let rolls;
    let nbOfRolls;
    let called = false
    let scoreToDisplay = undefined
    let consoleDisplayerMock = undefined
    beforeEach(() => {
        nbOfRolls = 0;
        const rollProviderStub = {
            getRoll: () => {
                const roll = rolls[nbOfRolls];
                nbOfRolls++;
                return roll;
            }
        }
        const consoleDisplayer = {
            displayToConsole: (score) => {
                called = true;
                scoreToDisplay = score;
            }
        }

        consoleDisplayerMock = sinon.mock(consoleDisplayer)

        game = new Game(rollProviderStub, consoleDisplayer);
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
        it('doit donner le score de 16 si à la première lancée on fait un strike et puis on fait tomber 1 et 2 quilles aux lancées suivantes', () => {
            rolls = [10, 1, 2];

            game.play()
            game.play()
            game.play()
            expect(game.getScore()).to.equal(16)
        });
        it('doit afficher le score à la fin de la partie', () => {
            rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 2];
            consoleDisplayerMock.expects("displayToConsole").once().withArgs(10);

            rolls.forEach(() => game.play());
            // expect(called).to.be.true;
            // expect(scoreToDisplay).to.equal(10);
            consoleDisplayerMock.verify()
            //mock qui vérifie que à la fin de la partie consoleDisplayer.displayToConsole a été appelé avec le bon score
        });

    })
})
