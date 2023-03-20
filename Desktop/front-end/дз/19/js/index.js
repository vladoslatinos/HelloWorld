const menuList = {  burger: [
    {      
        name: '🍔',
      time: 3000    
    },
    {      
        name: '🍟',
      time: 1000    
    },
    {      
        name: '🥤',
      time: 500    
    }
  ],  
     chicken: [
    {      
        name: '🍗',
      time: 5000    
    },
    {      
        name: '🥔',
      time: 2000    
    },
    {      
        name: '🍺',
      time: 1500    
    }
  ],  avocado: [
    {      
        name: '🥑',
      time: 3000    
    },
    {
      name: '🍚',      
        time: 5000
    },    {
      name: '🧉',      
        time: 2000
    }  ]
};
function createOrder(menuItem) {  
    console.log('Start cooking order...');
  
    const promises = menuItem.map(({ name, time }) => {
    return new Promise((resolve, reject) => {      
        setTimeout(() => {
        const status = Math.random() < 0.8 ? 'fulfilled' : 'rejected';        
        const result = {
          status: status,          
          value: name
        };        
            if (status === 'fulfilled') {
                resolve(result);        
            } else {
                reject(result);        
            }
           }, time);    
    });
  });
  return Promise.all(promises);
}
createOrder(menuList.chicken)
  .then((res) => {    
    console.log(res);
  })  
    .catch((err) => {
    console.error(err);  
});


