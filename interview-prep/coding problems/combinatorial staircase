//given a staircase "n" steps high, if you can take steps 3 at a time, 2 at a time and 1 at a time, 
// write a function that determines the number combinations of steps that can be taken to reach the top.

const f = height => {
  if (height === 0 ) return 0
  else if (height === 1 ) return 1
  else return f(height-1)+f(height-2)+1
}

[1,2,3,4,5,6,7,8,9,10].map(el=>console.log(el,f(el)))

//the first number, plus the second number, plus one equals the third number.
//ex: 1 + 2 + 1 = 4
//ex: 2 + 4 + 1 = 7
//ex: 4 + 7 + 1 = 12