const menuList = { 
    burger: [ 
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
    ], 
    avocado: [ 
        { 
            name: '🥑', 
            time: 3000 
        }, 
        { 
            name: '🍚', 
            time: 5000 
        }, 
        { 
            name: '🧉', 
            time: 2000 
        } 
    ] 
}; 

function createOrder(menuItem, getResult) { 
    const result = []; 

    function getDish(menuItem, callback) { 
        menuItem.forEach(({ name, time }, index) => { 
            setTimeout(() => { 
                if (Math.ceil(Math.random() * 10) < 8) { 
                    const fulfilledResult = { 
                        status: 'fulfilled', 
                        value: name 
                    } 

                    callback(fulfilledResult, index); 
                } else { 
                    const rejectedResult = { 
                        status: 'rejected', 
                        reason: name 
                    }; 

                    callback(rejectedResult, index); 
                } 
            }, time) 
        }) 
    } 

    function getDoneMenu(dish, index) { 
        result[index] = dish; 

        if (result.filter(item => item).length === menuItem.length) getResult(result); 
    } 

    getDish(menuItem, getDoneMenu); 
} 

createOrder(menuList.avocado, x => console.log(x)); 
createOrder(menuList.burger, x => console.log(x)); 
createOrder(menuList.chicken, x => console.log(x));


