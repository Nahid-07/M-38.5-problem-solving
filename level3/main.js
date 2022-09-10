const getElement =(id)=>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue
}
const addName =()=>{
    const getName = getElement('input-F1');
    localStorage.setItem('Name',getName)
}
const removeName = ()=>{
    localStorage.removeItem('Name')
}
const addEmail = ()=>{
    const getAge = getElement('input-F2');
    localStorage.setItem('Email',getAge);
}
const removeEmail = ()=>{
    localStorage.removeItem('Email')
}
const addMessege = () =>{
    const getMessege = getElement('input-F3');
    localStorage.setItem('Messege', getMessege)
}
const removeMessege = ()=>{
    localStorage.removeItem('Messege')
}

// reset Button
const reset=()=>{
    localStorage.clear()
}