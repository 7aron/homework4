//A function called 'triangleStars' that prints an upside-down triangle to the console of the given height.
const starsnumber = function(stars) {
   if( stars === 0) {
    return "";
   } return "*" + starsnumber(stars - 1);
};

const spacenumber = function(space){
 if(space === 0) {
  return "";
 } return " " + spacenumber(space - 1);

};

const triangleStars = function(i) {
  if (i === 0) {
    return "";  
  }
  console.log(spacenumber((num - i)) + (starsnumber((2 * i) - 1))); 
  return triangleStars(i - 1);
};
const num = 6;
const result = triangleStars(num);

//A function that takes two arguments, base and n returns the result of multiplying the base times itself n time

const pow = function(base, n) {
if(base < 1 || n < 1) {
return "check your numbers";
} else if (base === 1) {
return 1;}
else if (n === 1) {
return base;
}
return base * pow(base, n-1)

};

console.log(pow(5, 1));


//A function called checkerboard using recursion which, given a size argument, will draw an n by n checkerboard on the screen

const checker= function(check) {
  if (check === 0) {
    return "";
  } return "*" + checker(check - 1);
};

const board = function(check1) {
  if (check1 === 0){
 return "";
  } return "*" + board(check1 - 1);
};

const div = function(i, n){
  if(n === 0) {
    return "";
  } console.log(checker(i));
    console.log(board(i));
    return div(i, n - 1);
};


const checkerboard = function(i) {
  if(i % 2 === 0) {
    return div(i, i/2);
  } else if (i % 2 !== 0){
    div(iconst checker= function(check) {
  if (check === 0) {
    return "";
  } return "*" + checker(check - 1);
};

const board = function(check1) {
  if (check1 === 0){
 return "";
  } return "*" + board(check1 - 1);
};

const div = function(i, n){
  if(n === 0) {
    return "";
  } console.log(checker(i));
    console.log(board(i));
    return div(i, n - 1);
};


const checkerboard = function(i) {
  if(i % 2 === 0) {
    return div(i, n/2);
  } else if (i % 2 !== 0){
    div(inp, (i - 1)/2);
    console.log(checker(i));
return "";
  }
};

console.log(checkerboard(5));, (i - 1)/2);
    console.log(checker(i));
return "";
  }
};

console.log(checkerboard(5));

//A function that reverses a string with recursion.

const f = function(str){
  const length = str.length;
  const llater = function(length){
    if(length <= 0)
      return "";
    return str[length - 1] + llater(length - 1);
  }; return llater(length);
};

  console.log(f("debuluk"));


