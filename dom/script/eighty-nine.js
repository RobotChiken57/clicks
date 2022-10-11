var Car = function (x,y){
    this.x = x;
    this.y = y;
};

/*var drawCar = function (car) {
    var carHtml = '<img src="img/car.webp">';

    var carElement = $(carHtml);

    carElement.css({
        position:"absolute",
        left: car.x,
        top: car.y
    });

    $("body").append(carElement);
};

var tesla = new Car (20,20);
var nissan = new Car (100,200);
drawCar(tesla);
drawCar(nissan);
*/

Car.prototype.draw = function (){
    var carHtml = '<img src="img/car.webp">';

    this.carElement = $(carHtml);

    this.carElement.css({
        position:"absolute",
        left: Car.x,
        top: Car.y
    });

    $("body").append(this.carElement);
};



Car.prototype.moveRight = function (speed){
    this.x += speed;
    this.carElement.css({
        left:this.x,
        top:this.y
    });
};
Car.prototype.moveLeft = function (speed){
    this.x -= speed;
    this.carElement.css({
        left:this.x,
        top:this.y
    });
};
Car.prototype.moveUp = function (speed){
    this.y -= speed;
    this.carElement.css({
        left:this.x,
        top:this.y
    });
};
Car.prototype.moveDown = function (speed){
    this.y += speed;
    this.carElement.css({
        left:this.x,
        top:this.y
    });
};

var tesla = new Car (20,20);
var nissan = new Car (20,200);

tesla.draw();
nissan.draw();


setInterval(function(){tesla.moveRight(Math.floor(Math.random()*50))}, 30);
setInterval(function(){nissan.moveRight(Math.floor(Math.random()*50))}, 30);


