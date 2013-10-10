/*  Connor Healy
Date: 9/4/2013
Assignment: Goal2: Assignment: The Duel2
 */


//self-executing function
(function(){

    //console.log("FIGHT Connor");
    //player name
//    var playerOneName = "Spiderman";
//    var playerTwoName = "Batman";
//
//    //player damage
//    var player1Damage = 20;
//    var player2Damage = 20;
//
//    //player health
//    var playerOneHealth = 100;
//    var playerTwoHealth = 100;
    var fighter1 = ["Spiderman", 20, 100];
    var fighter2 = ["Batman", 20, 100];



    //round number
    var round= 0;

    function fight(){
        console.log("in the fight function");

        //alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);
        alert(fighter1[0] + ": " + fighter1[2] + " " + "*START*" + " " + fighter2[0] + ": " + fighter2[2]);
        //alert(fighter2);

        for(var i=0; i<10; i++){
           //random formula is - Math.floor(Math.random() * (max-min) + min)

            var minDamage1 = fighter1[1]* .5;
            var minDamage2 = fighter2[1]* .5;
            var f1=Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2=Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);
            fighter1[2]-=f1;
            fighter2[2]-=f2;

            console.log(fighter1[0]+":"+fighter1[2]+""+fighter1[0]+":"+fighter1[2]);

            var results= winnerCheck()
            console.log(results);

            if(results === "no winner"){

                round++;
                alert(fighter1[0]+":"+fighter1[2]+" *ROUND "+round+" OVER* "+fighter2[0]+":"+fighter2[2]);

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
        if(fighter1[2]<1 && fighter2[2]<1){
            result="You both Die";

        }else if(fighter1[2]<1){
           result=fighter2[0]+" WINS!!!"
        }else if(fighter2[2]<1){
            result=fighter1[0]+" WINS!!!"
        };

        //returns result
        return result;

    };

    console.log("program starts");

    //start of program
    fight();

})();
