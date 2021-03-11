const calculateScoreForAPlayer = require('../app/bowlingScoreCalculator.js');

class Game {

    constructor(rollProvider, consoleDisplayer) {
        this.rollProvider = rollProvider;
        this.consoleDisplayer = consoleDisplayer;
        this.launchArray = [];
    }

    play() {
        const nbOfFallenPins = this.rollProvider.getRoll();
        const lastPLayedFrame = this.launchArray[this.launchArray.length - 1];

        const isFirstRollOfTheGame = lastPLayedFrame === undefined;
        const isTourComplete = lastPLayedFrame?.length === 2 || (lastPLayedFrame !== undefined && lastPLayedFrame[0] === 10);

        if (isFirstRollOfTheGame || isTourComplete) {
            this._addNewFrameWithTheRoll(nbOfFallenPins);
        } else {
            this._addRollToTheOngoingFrame(lastPLayedFrame, nbOfFallenPins);
        }
        this.getScore()
        const isGameFinished = this.launchArray.length === 10 && this.launchArray[9].length === 2;
        if (isGameFinished) this.consoleDisplayer.displayToConsole(this.getScore())
    }

    _addRollToTheOngoingFrame(lastPLayedFrame, nbOfFallenPins) {
        lastPLayedFrame.push(nbOfFallenPins);
    }

    _addNewFrameWithTheRoll(nbOfFallenPins) {
        this.launchArray.push([nbOfFallenPins]);
    }

    getScore() {
        return calculateScoreForAPlayer(this.launchArray);
    }

}

module.exports = Game;