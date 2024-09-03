// Enums:Enumeartion
var Position;
(function (Position) {
    Position[Position["First"] = 0] = "First";
    Position[Position["Second"] = 1] = "Second";
    Position[Position["Third"] = 2] = "Third";
})(Position || (Position = {}));
console.log(Position.First);
console.log(Position);
// DiscriminatedUnion
