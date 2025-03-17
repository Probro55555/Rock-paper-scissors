function getComputerChoice() {
    let cpchoice = Math.floor(Math.random()*3) // Will return values: 0 or 1 or 2
    return cpchoice

}
function getHumanChoice() {
    let choice = parseInt(prompt("Enter  0.Rock  1.Paper  2.Scissor :  "))
    return choice
}
function main() {
    let i;
    let cpu = 0;
    let human = 0;
    
    console.log("Hello")
    for(i=0;i<=5;i++){
        
        let cpchoice = getComputerChoice()
        
        let choice = getHumanChoice()

        if ((cpchoice == 0 && choice == 1) || (cpchoice == 2 && choice == 0) ||(cpchoice == 1 && choice == 2)){
            console.log("You win!!!")
            human +=1;
             }
        else if ((cpchoice == 0 && choice == 2) || (cpchoice == 2 && choice == 1) || (cpchoice == 1 && choice == 0)) {
            console.log("Computer wins!!!")
            cpu +=1;
            i+=1;
        }
        else {
            console.log("It's a tie!!!")
            
        }
        



        
    
}

}
main()
