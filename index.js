// Your code here
function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

// let wrapAdjective = (string = '*') => (special = 'special') => `You are ${special}`
function wrapAdjective (string = '*') {
    return function (special = 'special'){
        return `You are ${string}${special}${string}!`
    }
}
const encouragingPromptFunction = wrapAdjective("!!!")
// console.log(encouragingPromptFunction)