
const calculateScoreForAPlayer = require('../app/bowlingScoreCalculator.js');
class Game {

    constructor(rollProvider) {
        this.rollProvider = rollProvider;
        this.launchArray = [];
    }
    //rollProvider.getRoll() => nombre de quilles qui sont tombées
    // play => rollProvider.getRoll()=> gameTours[[]]
    play() {
        const nbOfFallenPins = this.rollProvider.getRoll();
        console.log("Nb of fallen pins : ",nbOfFallenPins)
        const lastPLayedFrame = this.launchArray[this.launchArray.length-1];
    
        console.log("Last played frame : ", lastPLayedFrame);
        if(lastPLayedFrame!==undefined && lastPLayedFrame.length==1){
            lastPLayedFrame.push(nbOfFallenPins);
        }
        else {
            this.launchArray.push([nbOfFallenPins]);
        }
        console.log("Launch array : ", this.launchArray);
    }

    getScore(){
        return calculateScoreForAPlayer(this.launchArray);
    }

}

module.exports = Game;