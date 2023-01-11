const addBtm = document.querySelector('#addBtm');
const inputName = document.querySelector('#inputName');
const list = document.querySelector('#list');

addBtm.addEventListener('click' , function(){
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.textContent = inputName.value;
    list.append(newItem);

    const delBtm = document.createElement('button')
    delBtm.textContent = 'Блок был создан при нажатии на кнопку'
    delBtm.style.color = 'red';
    newItem.append(delBtm);

    delBtm.addEventListener('click' , function(){
        newItem.remove()
    })
    
    inputName.value = '';
})