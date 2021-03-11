const calculateTourScoreWithoutBonus = tour => tour[1] !== undefined ? tour[0] + tour[1] : tour[0];

const isSpare = tour => tour[0] + tour[1] === 10 && tour[0] !== 10;

const isStrike = tour => tour[0] === 10;


const calculateBonusForTheStrike = (gameTours, tourIndex) => {
    const nextLaunch = gameTours[tourIndex + 1][0];
    const followingLaunch = isStrike(gameTours[tourIndex + 1]) ? gameTours[tourIndex + 2][0] : gameTours[tourIndex + 1][1];
    return nextLaunch + followingLaunch;
};

const calculateBonusForTheSpare = (gameTours, tourIndex) => gameTours[tourIndex + 1][0];

const calculateBonus = (tour, tourIndex, gameTours) => {
    if (isSpare(tour)) return calculateBonusForTheSpare(gameTours, tourIndex)
    if (isStrike(tour)) return calculateBonusForTheStrike(gameTours, tourIndex)
};

const calculateScoreForTheLastTour = tour => tour.reduce((accumulator, currentValue) => accumulator + currentValue);

const calculateTourScore = (tour, tourIndex, gameTours) => {
    const isLastTour = tourIndex === 9;
    if(isLastTour) return calculateScoreForTheLastTour(tour);

    const tourScoreWithoutBonus = calculateTourScoreWithoutBonus(tour);
    const tourBonus = calculateBonus(tour, tourIndex, gameTours);
    return tourBonus !== undefined ? tourScoreWithoutBonus + tourBonus : tourScoreWithoutBonus;
};

const calculateScoreForAPlayer = gameTours => {
    let score = 0;
    gameTours.forEach((tour, tourIndex) => {
        const tourScore = calculateTourScore(tour, tourIndex, gameTours);
        score += tourScore;
    })
    return score;
}


module.exports = calculateScoreForAPlayer;