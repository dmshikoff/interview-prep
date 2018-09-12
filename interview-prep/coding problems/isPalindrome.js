

function isPalindrome(str) {
    let occurance = {}
      if(str.length % 2 === 0){
          
          for(let char of str){
              if(occurance.hasOwnProperty(char)){
                  occurance[char]++
              }
              else{
                  occurance[char] = 1
              }
          }
  
          let quantity = Object.values(occurance)
          
          for(let amount of quantity){
              if(amount % 2 !== 0) return false
          }
      }
      else{
          let numOfOdd = 0
          
          for(let amount in occurance){
              if(amount % 2 !== 0) numOfOdd++
          }
  
          if(numOfOdd > 1) return false
      }
      return true
  }