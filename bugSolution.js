function myFunc() {
  var a; // Declare the variable before accessing it
  console.log(a); // Outputs undefined, as expected
  a = 10;
}
myFunc(); // Outputs undefined