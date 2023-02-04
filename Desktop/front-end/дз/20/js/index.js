const promiseA = new Promise((resolve, reject) => setTimeout(() => resolve(5), 1000))
const promiseB = new Promise((resolve, reject) => setTimeout(() => reject(1), 500))

const promisesArray = [promiseA, promiseB]

function allSettled(promises){

    return new Promise((resolve, reject) => {
        const settledPromises = []
        let currentIndex = 0

        const checkIfPromiseLast = (index) => {
            if(index === (promises.length - 1)){
                return true
            }

            return false
        }

        promises.forEach((promise) => {
            promise
            .then(() => {
                if(checkIfPromiseLast(currentIndex)){
                    resolve([...settledPromises, "fulfilled"])
                }
                else{
                    currentIndex++
                    settledPromises.push("fulfilled")
                }
            })
            .catch(() => {
                if(checkIfPromiseLast(currentIndex)){
                    resolve([...settledPromises, "rejected"])
                }
                else{
                    currentIndex++
                    settledPromises.push("rejected")
                }
            })
        })
    })
}

allSettled(promisesArray)
.then((results) => {
    results.map((result) => console.log(result))
})
