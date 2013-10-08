/*  Connor Healy
Date: 9/4/2013
Assignment: Goal1: Assignment: The Duel
 */


//self-executing function
(function(){

    //console.log("FIGHT Connor");
    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //round number
    var round= 0;

    function fight(){
        console.log("in the fight function");

        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);


        for(var i=0; i<10; i++){
           //random formula is - Math.floor(Math.random() * (max-min) + min)

            var minDamage1 = player1Damage* .5;
            var minDamage2 = player2Damage* .5;
            var f1=Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2=Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+":"+playerOneHealth+""+playerTwoName+":"+playerTwoHealth);

            var results= winnerCheck()
            console.log(results);

            if(results === "no winner"){

                round++;
                alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth);

            }else{
                alert(results);
                break;
            }

            winnerCheck();
 }

    };

    //winnerCheck function
    function winnerCheck (){
        //console.log("in WCFN");
        var result="no winner";

        //if/else/if statement
        if(playerOneHealth<1 && playerTwoHealth<1){
            result="You both Die";

        }else if(playerOneHealth<1){
           result=playerTwoName+" WINS!!!"
        }else if(playerTwoHealth<1){
            result=playerOneName+" WINS!!!"
        };

        //returns result
        return result;

    };

    console.log("program starts");

    //start of program
    fight();

})();
