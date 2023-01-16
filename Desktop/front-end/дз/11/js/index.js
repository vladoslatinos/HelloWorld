


const func = (arg) => { 
  const sumValue = 1000 * arg 

return sumValue 
} 

const cacheValues = new Map() 
const MAX_CASH_LIMIT = 5 

const cache = (arg, fn) => { 
  if(cacheValues.has(arg)) { 
    console.log("cache value") 
    return cacheValues.get(arg) 
} 
else { 
    const funcValue = fn(arg) 

  if(!funcValue) { 
      console.log("function does not return any value") 

    return 
  } 

  if(cacheValues.size === MAX_CASH_LIMIT) { 
      const oldestKey = cacheValues.keys().next().value 

      cacheValues.delete(oldestKey) 
  } 

  console.log("real value") 
  cacheValues.set(arg, funcValue)  

  return funcValue 
} 
}  



