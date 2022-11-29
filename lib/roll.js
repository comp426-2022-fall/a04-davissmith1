export function roll(sides, dice, timesRolled){
    var results = [];
    for(let i = 0; i < timesRolled; i++){
        results[i]= dice*Math.floor(Math.random() * this.sides) + 1 
    }
    return("sides: " + sides +", \n" + "dice: " + dice + ", \n" + "rolls:" + timesRolled + ", \n" + "resulst: " + results);
}
