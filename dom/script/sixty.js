
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