const setItemToTheLOcalStorage =() =>{
    const person = {
        firstName : 'Abraham',
        lastName : 'Linkon'
    }
    const personStringified = JSON.stringify(person);
    localStorage.setItem('name',personStringified)
}
setItemToTheLOcalStorage()