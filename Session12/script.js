var a = 10;
var b = 43;
var c = 13;
var d = 4;
var e = 77;
var f = 90;
var g = 7;
var h = 34;
var i = 22;
var j = 87;


var max = a;

if (b > max) {
    max = b;
}
if (c > max) {
    max = c;
}
if (d > max) {
    max = d;
}
if (e > max) {
    max = e;
}
if (f > max) {
    max = f;
}
if (g > max) {
    max = g;
}
if (h > max) {
    max = h;
}
if (i > max) {
    max = i;
}
if (j > max) {
    max = j
}

var min = a;

if (b < min) {
    min = b;
}
if (c < min) {
    min = c;
}
if (d < min) {
    min = d;
}
if (e < min) {
    min = e;
}
if (f < min) {
    min = f;
}
if (g < min) {
    min = g;
}
if (h < min) {
    min = h;
}
if (i < min) {
    min = i;
}
if (j < min) {
    min = j
}

var average = (a + b + c + d + e + f + g + h + i + j) / 10;

var variance = (
    (a - average) ** 2 +
    (b - average) ** 2 +
    (c - average) ** 2 +
    (d - average) ** 2 +
    (e - average) ** 2 +
    (f - average) ** 2 +
    (g - average) ** 2 +
    (h - average) ** 2 +
    (i - average) ** 2 +
    (j - average) ** 2
);

variance /= 10;


console.log(`
    maximum: ${max}
    minimum: ${min}
    Average: ${average} 
    Variance: ${variance}`);



