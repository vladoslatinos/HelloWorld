function allSettled(promises) { 
  return Promise.all(promises.map((promise) => { 
    return promise 
      .then((value) => { 
        return { status: "fulfilled", value }; 
      }) 
      .catch((reason) => { 
        return { status: "rejected", reason }; 
      }); 
  })); 
};