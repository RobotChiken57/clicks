/*$("html").click(function(event){
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    });
});*/


var leftOffset = 0;
var topOffset = 0;
var dir = "right";

var moveHeading = function (){
    $("#heading").offset({left: leftOffset});
    $("#heading").offset({top: topOffset});
    if (dir == "right")
    leftOffset++;
    else
    leftOffset--;
    if (leftOffset <0 && topOffset >0)
    {
        leftOffset = 0;
        topOffset--;
    }
    else if (topOffset ==0 )
    {
        dir = "right"
    }
    if (leftOffset > 200){
        leftOffset=200;
        topOffset++;
        if (topOffset>200){
            topOffset = 200;
            dir="left";
        }
        else if (topOffset < 0)
        {
            topOffset = 0;
        }
    }
};
var a= setInterval (moveHeading, 10);

var clickHandler = function () {
    clearInterval(a);
};
$("h1").click(clickHandler);

/*var speed = 50;
var clicks = 0;
var clickHandler = function(){
    setInterval(moveHeading, speed);
    speed--;
    $("h1").text("Кол-во кликов "+clicks);
    clicks ++;
    if (clicks >=11){
        clearInterval(a);
        $("h1").text("Вы победили");
    }
};
$("h1").click(clickHandler);*/