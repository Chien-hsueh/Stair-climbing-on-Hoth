export const calculateClimb = (userInput) => {
    
    userInput = Number(userInput)
    
    if (userInput === '') return 0;

    if (userInput === 0) {return 0;}
    if (userInput === 1) {return 1;}
    if (userInput === 2) {return 2;}

    let minusTwo = 1
    let minusOne = 2
    let current

    for (let i= 3; i <= userInput; i++){
    current = minusTwo + minusOne
    minusTwo = minusOne
    minusOne = current
    }

    return current
};