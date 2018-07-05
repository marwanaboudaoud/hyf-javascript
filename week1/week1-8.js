var m = 3;
var r = "I'm happy";
var w = false;
var n = [24 , "december"];

console.log("The value of my variable m is: " + m);
console.log("The value of my variable r is: " + r);
console.log("The value of my variable w is: " + w);
console.log("The value of my variable n is: " + n);

console.log("the type of m variable is number");
console.log("the type of r variable is string");
console.log("the type of w variable is boolean");
console.log("the type of n variable is object");

var typer = typeof (r);
var typem = typeof (m);
var typew = typeof (w);
var typen = typeof (n);

if ((typer == typem) || (typer == typew) || (typer == typen)) {
    console.log("r has SAME TYPE");
} else if ((typem == typew) || (typem == typen)) {
    console.log("m has SAME TYPE");
} else if (typew == typen) {
    console.log("w and n have the SAME TYPE");
} else {
    console.log("NO SIMILAR TYPES");
}