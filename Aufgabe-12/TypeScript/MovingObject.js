var Aufgabe11;
(function (Aufgabe11) {
    class MovingObject {
        draw() {
            //
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
        update() {
            this.move();
        }
    }
    Aufgabe11.MovingObject = MovingObject;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=MovingObject.js.map