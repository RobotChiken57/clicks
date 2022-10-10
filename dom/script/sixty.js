var leftOffset = 0;
var moveHeading = function (){
    $("#heading").offset({left: leftOffset});
    leftOffset++;
    if (leftOffset > 200){
        leftOffset=0;
    }
};
setInterval (moveHeading, 30);



var clickHandler = function (event) {
    console.log("Клик! " + event.pageX + " " + event.pageY);
};
$("h1").click(clickHandler);


$("html").mousemove(function(event){
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    });
});