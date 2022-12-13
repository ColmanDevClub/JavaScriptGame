function init() {
    const rows = 5;
    const cols = 5;
    let myArr = [];
    const player = {
        name: "Yuval",
        currentPositionOnBoard: "0,0",
        currentHealthPoints: "100",
        powerRate: "30",
        isInBattle: false,
    }
    let pickUpItemsList = [];
    pickUpItemsList.push({
        name: "plus 5 hp",
        hpChange: "5",
        powerChange: "0",
        currentPositionOnBoard: "1,2",   
    }) 
    pickUpItemsList.push({
        name: "plus 10 attack",
        hpChange: "0",
        powerChange:"10",
        currentPositionOnBoard: "3,3",
    })
    let monstersList = [];
    monstersList.push({
        name: "boo",
        currentHealthPoints: "100",
        powerRate: "15",
        currentPositionOnBoard: "2,2"
    })
    const playerPositionOnBoardI = player.currentPositionOnBoard.split(",")[0]
    const playerPositionOnBoardJ = player.currentPositionOnBoard.split(",")[1]
    console.log("First Move")
    console.log(player)
    for (let i =0; i< rows; i++){
    myArr[i] = [];
        for (let j=0; j<cols; j++){
            if (i == playerPositionOnBoardI && j == playerPositionOnBoardJ){
                myArr[i][j] = "|PLAYER|";
            }else{
                myArr[i][j] = "|      |"
            }
            for (let k = 0; k < pickUpItemsList.length; k++){
                const pickUpItemsI = pickUpItemsList[k].currentPositionOnBoard.split(",")[0];
                const pickUpItemsJ = pickUpItemsList[k].currentPositionOnBoard.split(",")[1];
                if (i == pickUpItemsI && j == pickUpItemsJ){
                    myArr[i][j] = "|  ?  |"
                }
            }
            for (let m = 0; m < monstersList.length; m++){
                const monsterI = monstersList[m].currentPositionOnBoard.split(",")[0];
                const monsterJ = monstersList[m].currentPositionOnBoard.split(",")[1];
                if (i == monsterI && j == monsterJ){
                    myArr[i][j] = "|   ?   |"
                }
            } 
        }   
    }
    console.log(myArr);
}
init();