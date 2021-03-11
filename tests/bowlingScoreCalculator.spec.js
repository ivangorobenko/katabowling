const expect = require('chai').expect;
const calculateScoreForAPlayer = require('../app/bowlingScoreCalculator.js');

describe('Bowling', () => {
    context('Expect', () => {
        it('doit renvoyer un score de 10 le joueur fait un strike à la première lancée', () => {
            expect(calculateScoreForAPlayer([[10]])).to.equal(10)
        });
        it('doit renvoyer un score 1 quand 1 seul point a été gagné dans une partie', () => {
            expect(calculateScoreForAPlayer([[1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(1)
        });
        it('doit renvoyer un score de 2 quand dans un tour le joueur gagne 1 point par lancée ', () => {
            expect(calculateScoreForAPlayer([[1, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(2)
        });
        it('doit renvoyer un score de 16 quand dans un jeu le joueur gagne plusieurs points dans plusieurs lancées en faisant 1 spare et 0 strike', () => {
            expect(calculateScoreForAPlayer([[1, 9], [1, 0], [0, 4], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(16)
        });
        it('doit renvoyer un score de 20 quand dans un jeu le joueur gagne plusieurs points dans plusieurs lancées en faisant 0 spare et 1 strike', () => {
            expect(calculateScoreForAPlayer([[10], [1, 2], [0, 4], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(20)
        });
        it('doit renvoyer un score de 41 quand dans un jeu le joueur gagne plusieurs points dans plusieurs lancées en faisant 2 strike à la suite', () => {
            expect(calculateScoreForAPlayer([[10], [10], [1, 4], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(41)
        });
        it('doit renvoyer un score de 20 quand dans un jeu le joueur gagne plusieurs points dans plusieurs lancées en faisant 3 strike à la suite', () => {
            expect(calculateScoreForAPlayer([[10], [10], [10], [1, 4], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(71)
        });
        it('doit renvoyer un score de 20 quand dans un jeu le joueur gagne plusieurs points dans plusieurs lancées en faisant 2 strike à la suite et un spare', () => {
            expect(calculateScoreForAPlayer([[10], [10], [9, 1], [1, 4], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.equal(65)
        });
        it('doit renvoyer un score de 17 quand dans un jeu le joueur fait un strike dans la première lancée du dernier tour', () => {
            expect(calculateScoreForAPlayer([[0,0], [0,0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [10, 3, 4]])).to.equal(17)
        });
        it('doit renvoyer un score de 17 quand dans un jeu le joueur fait 2 strike à la suite au dernier tour', () => {
            expect(calculateScoreForAPlayer([[0,0], [0,0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [10, 10, 4]])).to.equal(24)
        });
        it('doit renvoyer un score de 10 quand dans un jeu le joueur fait 1 spare au dernier tour', () => {
            expect(calculateScoreForAPlayer([[1,2], [0,0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1, 9]])).to.equal(13)
        });


    })
})

//10+19 => 29 +20 => 49+11=>60+5=>
//10+9+1 => 20
//9+1+1 => 11
//1+4 =>5

//Cas simple sans Spare et sans Strike
// [[1,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]] => 1
// [[1,1],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]] => 2
// [[1,1],[1,0],[0,4],[0,0],[2,0],[0,0],[0,0],[0,0],[0,0],[0,0]] => 9

//Cas simple spare sans strike
// [[1,9],[1,0],[0,4],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]] => (10 + bonus 1) + 1 + 4


// le tour, la lancée