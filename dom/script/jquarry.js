$("h1").fadeout(3000);
$("h1").text("Этот текст скоро исчезнет").fadeout(3000);

for (var i=0; i<3; i++){
    var friend = prompt(" ");
    $("body").append("<p>"+ friend + "<p>");
}

var headingElement = document.getElementById("main-heading");
console.log(headingElement.innerHTML);
var newHeadingElement = "Мои друзья";
headingElement=newHeadingElement;