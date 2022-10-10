for (var i=0; i<5; i++){
    var friend = prompt("Введите имя вышего друга");
    $("body").append("<p>"+ friend + "</p>").fadeIn(1000).hide(1000);
    $("h1").text("Мои друзья");
}
$("p").append(" лучший!");

var step = 0;
for (var i=0; i<5; i++){
    $("h1").fadeOut(1000+ step);
    $("h1").fadeIn(1000+ step);
    step+=1000;

}

$("h1").fadeOut(1000).delay(5000).fadeIn(1000);