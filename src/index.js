module.exports = function zeros(expression) {
  function factorial(item) // for factorial NEW!!!!
    {
      let result = BigInt(1);
		    for (i = BigInt(1); i <= item; i++) 
        {
          result = BigInt(result) * i;
        }
      	return result;
    }
    
  function factorialDouble(item) // for factorial double
    {
      item = Number(item);
      if (item % 2 === 0) ///<< mistake FULSE !!!!
      { 
        item = BigInt(item);
        let result = BigInt(1);
		    for (i = BigInt(2); i <= item; i++) 
        {
          result = BigInt(result) * i++;
        }
      	return result;
      }   // FULSE
      else
      {
        item = BigInt(item);
        let result = BigInt(1);  // true
		    for (i = BigInt(3); i <= item; i++) 
        {
          result = BigInt(result) * i++;
        }
      	return result;
      } 
    }
  
  let a = /[0-9]+(?=!\*)|[0-9]+(?=!$)/g;
  let array = expression.match(a); //get number with input factorial
  let b = /\d+(?=!!\*)|\d+(?=!!$)/g;
  let arraydouble = expression.match(b); //get number with input factorial double
  
  let f = BigInt(1); //type big int
  let fd = BigInt(1); //type big int

  if(array === null)
    {f = BigInt(1);}
  else
  {
    for(let i = 0; i < array.length; i++)
    {
      let big = BigInt(Number(array[i]));//new
      f *= factorial(big); //new
    }
  }

  if(arraydouble === null)
    {fd = BigInt(1);}
  else
  {
    for(let i = 0; i < arraydouble.length; i++)
    {
      let big = BigInt(Number(arraydouble[i]));//new
      fd *= factorialDouble(big); //new
    }
  }

  let zero = String(BigInt(f * fd));
  let answer=0;

  if (zero === 1)
  return 0;
  pattern = /0+$/;
  position = zero.search(pattern);
  if(position === -1)
  {return 0;}
  for (let i = position; i < zero.length; i++)
  {
    answer++;
  }
return answer;
}
