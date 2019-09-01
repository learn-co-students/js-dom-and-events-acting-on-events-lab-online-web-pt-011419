function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}
preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.querySelector('input').value
}

function addNewElementAsLi(){
  let list = document.createElement('li')

  list.innerHTML = retrieveEmployeeInformation()

  return document.querySelector('.employee-list').appendChild(list);
}

function addNewLiOnClick(){
  let newList = document.querySelector('input')

  newList.addEventListener("click", addNewElementAsLi());

  newList.value = ""
}

function clearEmployeeListOnLinkClick(){
  // query for input type a & list
  let button = document.querySelector('a')
  let list = document.querySelector('ul')

  button.addEventListener('click', function(e){ list.innerHTML = ''})
}
