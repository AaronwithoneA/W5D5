// function sum() {
//   let args = Array.prototype.slice.call(arguments);
//   return args.reduce((a,b) => a + b);
// }


// function sum(...args) {
//   return args.reduce((a,b) => a + b);
// }

// console.log(sum(1, 2, 3, 4, 5));


// Function.prototype.myBind = function(context) {
//   return () => this.prototype.call(context);
// };

// Function.prototype.myBind = function(context){
//   let args = Array.prototype.slice.call(arguments).slice(1);
//   let that = this;
//   return function() {
//     let args2 = Array.prototype.slice.call(arguments);
//     let args3 = args.concat(args2);
//     that.apply(context, args3);
//   };
// };

// var catChase = dog.chase.mybind(cat, dog);
// catChase()

// Function.prototype.myBind = function(context,...args){
//   let that = this;
//   return function(...args2) {
//     let args3 = args.concat(args2);
//     that.apply(context, args3);
//   };
// };
