const RED = "RED";
const YELLOW = "YELLOW";
const BLUE = "BLUE";
const GREEN = "GREEN";

var simon = {
    sendColor: function (color){
        console.log(color);
    },
    colors: [GREEN, YELLOW, BLUE, RED],
    sequence: [],
    nextSequence: function(){
        var nextColor = simon.colors[Math.floor(Math.random()*4)];
        sequence.push(nextColor);
        console.log(sequence);
    }
};

$(document).ready(function(){
    $("#red").click(function(){simon.sendColor(RED)});
    $("#green").click(function(){simon.sendColor(GREEN)});
    $("#blue").click(function(){simon.sendColor(BLUE)});
    $("#yellow").click(function(){simon.sendColor(YELLOW)});
     
})